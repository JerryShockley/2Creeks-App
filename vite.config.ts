import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [
    RubyPlugin(),
  ],
  server: {
    hmr: {
        protocol: 'ws',
        host:'10.211.55.27',
    },
    host:  '10.211.55.2',
    https: false,
    watch: {
      usePolling: true,
    },
},
})
