import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'


export default defineConfig({
  // 情况 A：用户/组织站点（用户名.github.io 这种），base 填 '/'
  // base: '/',
  // 情况 B：项目站点（用户名.github.io/仓库名 这种），base 填 '/仓库名/'
  base: '/my-blog/',
  plugins: [vue()],
})
