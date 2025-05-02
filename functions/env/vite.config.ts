import { cloudflare } from '@cloudflare/vite-plugin'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     external: [
  //       // Treat all modules starting with "cloudflare:" as external during build
  //       /^cloudflare:.*/
  //     ]
  //   }
  // },
  plugins: [cloudflare({ viteEnvironment: { name: 'ssr' } }), tailwindcss(), reactRouter(), tsconfigPaths()]
})
