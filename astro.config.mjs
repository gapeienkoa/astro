// @ts-check
import { defineConfig } from 'astro/config';

/* https://github.com/withastro/astro/issues/9525 */
/* https://github.com/withastro/astro/pull/12128 */
process.env.ASTRO_TELEMETRY_DISABLED = '1';

// https://astro.build/config
export default defineConfig({
    /* https://docs.astro.build/en/guides/dev-toolbar/#per-project */
    devToolbar: { enabled: false }
});
