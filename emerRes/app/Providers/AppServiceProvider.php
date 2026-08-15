<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        // Render (and most PaaS platforms) terminate HTTPS at their edge/load
        // balancer, then forward plain HTTP internally to the container.
        // Without this, Laravel generates asset/URL links as http://, which
        // browsers block as mixed content on an https:// page.
        if ($this->app->environment('production')) {
            URL::forceScheme('https');
        }
    }
}