const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = defineConfig({
  transpileDependencies: true,
    configureWebpack: {
        plugins: [
            new NodePolyfillPlugin()
        ],
    },
    devServer: {
        proxy: {
            '/api/send-email': {

                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true
            }
        }
    }
})
