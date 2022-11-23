import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import Unocss from 'unocss/vite'
import presetMini from '@unocss/preset-mini'
import presetWebFonts from '@unocss/preset-web-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    Unocss({
      presets: [
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
