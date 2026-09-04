import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
    fonts: [
        {
            provider: fontProviders.google(),
            name: "Inter",
            cssVariable: "--font-body",
            weights: [400, 500, 600, 700],
            fallbacks: ["sans-serif"],
        },
    ],
    devToolbar: {
        enabled: false,
    },
});
