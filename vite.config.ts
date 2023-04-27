import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import sri from "vite-tiptop-sri"

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        manifest: true,
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    'ant-prefix': 'b',
                    'animation-duration-slow': '0.1s',
                    'animation-duration-base': '0.1s',
                },
            },
        },
    },
    plugins: [vue(), sri({augmentManifest: true, hashAlgorithms: ['sha256']})],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            // fix less import by: @import ~
            // @see: https://github.com/vitejs/vite/issues/2185#issuecomment-784637827
            // '/^~/' : '',
        }
    }
})
