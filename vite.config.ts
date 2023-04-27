import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'live-demo') {
    return {
      base: './',
      plugins: [vue()],
    }
  } else {
    return {
      plugins: [vue()],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/themeManager'),
          name: 'VueDaisyUIThemeManager',
          fileName: 'vue-daisyui-theme-manager',
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue',
            },
          },
        },
      },
    }
  }
})
