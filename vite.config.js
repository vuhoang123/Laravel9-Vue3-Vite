import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
    plugins: [
        laravel(["resources/css/app.css", "resources/js/app.js"]),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        eslintPlugin({
            cache: false,
            fix: true,
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                // Default
                // dir: 'dist',
                // With laravel: laravel-app/public/js
                dir: "./public/js",
                filename: "[name].js",
                chunkFileNames: "js/chunks/[name].js",
            },
        },
    },
});
