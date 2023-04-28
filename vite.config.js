import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/, /\.vue\?vue/,
      ],
      imports: ['vue', 'vue-router'],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver(),
      ],
      dirs: [
        './src/components/**',
        './src/utils'
      ],
      vueTemplate: true,
      dts: './src/auto-imports.d.ts',
    }),
    Components({
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: false,
          enabledCollections: ['ep'],
          alias: {
            small: 'icon-small',
            middle: 'icon-middle',
            large: 'icon-large',
          },
          customCollections: [
            'icon-small',
            'icon-middle',
            'icon-large',
          ],
        }),
      ],
      dts: "./src/components.d.ts",
    }),
    Icons({
      autoInstall: true,
      customCollections: {
        "icon-small": FileSystemIconLoader(
          './src/assets/icons',
          svg => svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
        "icon-middle": FileSystemIconLoader(
          './src/assets/icons',
          svg => svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
        "icon-large": FileSystemIconLoader(
          './src/assets/icons',
          svg => svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
      },
      iconCustomizer(collection, icon, props) {
        if (collection === 'icon-small') {
          props.width = '2em'
          props.height = '2em'
        }
        if (collection === 'icon-middle') {
          props.width = '4em'
          props.height = '4em'
        }
        if (collection === 'icon-large') {
          props.width = '6em'
          props.height = '6em'
        }
      },
      // transform(svg, collection, icon, prop) {
      //   // apply fill to this icon on this collection
      //   if (collection === 'icon-middle') {
      //     return svg.replace(/^<svg /, '<svg fill="currentColor" ')
      //   }
      //   return svg
      // },
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
})
