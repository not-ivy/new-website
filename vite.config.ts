import {defineConfig} from 'vite';
import preact from '@preact/preset-vite';
import mdx from '@mdx-js/rollup';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact(),
		mdx({jsxImportSource: 'preact', providerImportSource: '@mdx-js/preact'}),
	],
});
