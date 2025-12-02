// @ts-check
import { defineConfig } from 'astro/config';

process.env.ASTRO_TELEMETRY_DISABLED = '1';

// https://astro.build/config
export default defineConfig({
    devToolbar: { enabled: false }
});
