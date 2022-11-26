import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import Unocss from 'unocss/vite'
import presetMini from '@unocss/preset-mini'
import fs from 'node:fs';

let metadatafile = {};

fs.readdirSync('./src/pages/wiki').forEach((file) => {
  let path = `./src/pages/wiki/${file}`;
  metadatafile[file.replace('.tsx', '')] = {
    created: fs.statSync(path).birthtime,
    edited: fs.statSync(path).mtime,
  }
});

fs.writeFileSync('./public/wiki.json', JSON.stringify(metadatafile));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    Unocss({
      presets: [
        presetMini({ dark: 'media' }),
      ],
      theme: {
        colors: {
          'palette': {
            black: "#333335",
            white: "#fbffd4",
            cyan: "#aefdfe",
            magenta: "#dfa1ff",
            yellow: "#e6f697",
          }
        },
        fontFamily: {
          sans: 'Manrope, ui-sans-serif, sans-serif',
          mono: 'Major Mono Display, ui-monospace, monospace',
        },
      },
      rules: [
        ['backdrop-brighten', { 'backdrop-filter': 'brightness(1.25)'}]
      ]
    }),
  ],
})
