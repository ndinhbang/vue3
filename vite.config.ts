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
                    'ant-prefix': 'b'
                },
            },
        },
    },
    plugins: [vue(), sri({augmentManifest: true, hashAlgorithms: ['sha256']})],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: fileURLToPath(new URL('./src', import.meta.url))
            },
            // {
            //     find: /^~/,
            //     replacement: ''
            // },
        ]
    }
})
