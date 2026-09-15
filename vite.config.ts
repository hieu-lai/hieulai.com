import tailwindcss from '@tailwindcss/vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import rsc from '@vitejs/plugin-rsc'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    tailwindcss(),
    tanstackStart({ rsc: { enabled: true } }),
    rsc(),
    viteReact(),
  ],
  optimizeDeps: {
    exclude: ['@base-ui/react', '@base-ui/utils', 'lucide-react'],
    include: [
      '@base-ui/react > use-sync-external-store/shim',
      '@base-ui/react > use-sync-external-store/shim/with-selector',
    ],
  },
})

export default config
