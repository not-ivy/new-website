import { defineConfig } from 'vite'
import { readFileSync } from 'node:fs';
import preact from '@preact/preset-vite'
import Unocss from 'unocss/vite'
import presetMini from '@unocss/preset-mini'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetIcons from '@unocss/preset-icons'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
  },
  optimizeDeps: {
    disabled: false,
  },
  plugins: [
    preact(),
    Unocss({
      presets: [
        presetIcons({
          collections: {
            heroicons: () => JSON.parse(readFileSync('./node_modules/@iconify-json/heroicons/icons.json', 'utf-8'))
          },
        }),
        presetMini({ dark: 'media' }),
        presetWebFonts({
          provider: 'google',
          fonts: {
            sans: 'Manrope',
            mono: 'Major Mono Display',
          }
        }),
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
        }
      }
    }),
  ],
})
