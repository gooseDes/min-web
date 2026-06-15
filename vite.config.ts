import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { patchCssModules } from "vite-css-modules";

export default defineConfig({
    envPrefix: ["VITE_", "MIN_"],
    plugins: [
        react(),
        patchCssModules({
            generateSourceTypes: true,
            declarationMap: true,
        }),
    ],
    base: "./",
    resolve: {
        tsconfigPaths: true,
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
        },
    },
    build: {
        target: "es2022",
    },
});
