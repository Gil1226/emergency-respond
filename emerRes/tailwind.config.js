import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                body: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                phone: '0 40px 70px -20px rgba(60,15,10,0.55)',
                dash: '0 30px 60px -30px rgba(60,20,15,0.25)',
            },
            colors: {
                primary: '#DC5049',
                secondary: '#A82E26',
                coral1: '#F58C81',
                ink: '#241C1B',
                muted: '#7B6E6C',
                bgsoft: '#FFF3F1',
                line: '#F0E2DF',
                pending: '#F0645A',
                ongoing: '#F0A83C',
                rescued: '#1F9D55',
                available: '#22B573',
            },
        },
    },

    plugins: [forms],
};
