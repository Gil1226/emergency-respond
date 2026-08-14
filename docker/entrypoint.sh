#!/bin/bash
set -e

cd /var/www/html

# Generate APP_KEY only if it's missing (Render env vars persist across deploys,
# so in practice you'll set APP_KEY once in the dashboard instead of relying on this).
if [ -z "$APP_KEY" ]; then
    echo "No APP_KEY set — generating one. Copy this into your Render env vars so it persists:"
    php artisan key:generate --force --show
fi

echo "Caching config, routes, and views..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "Linking storage..."
php artisan storage:link || true

echo "Running migrations..."
php artisan migrate --force

echo "Startup complete — handing off to supervisord."
exec "$@"
