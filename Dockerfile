# =========================================================
# Stage 1: Build frontend assets (React + Inertia + Tailwind)
# =========================================================
FROM node:22-alpine AS assets
WORKDIR /app

COPY emerRes/package.json emerRes/package-lock.json ./
# --include=dev guarantees vite/react/tailwind install even if NODE_ENV=production
# is set in the build environment (they're listed under devDependencies).
RUN npm ci --include=dev

COPY emerRes/ ./
# Run vite build directly (not `npm run build`) to skip the SSR bundle —
# ssr.jsx imports from ../../vendor/tightenco/ziggy, a Composer directory
# that doesn't exist in this Node-only stage, and SSR isn't enabled/used
# anywhere in this app anyway.
RUN npx vite build

# =========================================================
# Stage 2: PHP application
# =========================================================
FROM php:8.3-fpm-alpine AS app

# System packages: nginx + supervisor to run web server, php-fpm,
# and the queue worker together in one container.
RUN apk add --no-cache \
    nginx \
    supervisor \
    bash \
    curl \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    libzip-dev \
    icu-dev \
    oniguruma-dev \
    mysql-client \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) \
        pdo \
        pdo_mysql \
        mbstring \
        exif \
        pcntl \
        bcmath \
        gd \
        zip \
        intl

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Install PHP deps first (better layer caching)
COPY emerRes/composer.json emerRes/composer.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader --optimize-autoloader

# Copy the rest of the app
COPY emerRes/ ./

# Bring in the compiled frontend assets from stage 1
COPY --from=assets /app/public/build ./public/build

RUN composer dump-autoload --optimize \
    && mkdir -p storage/framework/{cache,sessions,views} storage/logs bootstrap/cache \
    && chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

# Nginx + Supervisor config
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/supervisord.conf /etc/supervisord.conf
COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# MySQL CA certificate (e.g. from Aiven) for SSL connections.
# Place your downloaded cert at docker/certs/aiven-ca.pem before building.
# Set MYSQL_ATTR_SSL_CA=/etc/ssl/certs/aiven-ca.pem in Render's env vars to use it.
COPY docker/certs/aiven-ca.pem /etc/ssl/certs/aiven-ca.pem

EXPOSE 8080

ENTRYPOINT ["/entrypoint.sh"]
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf", "-n"]