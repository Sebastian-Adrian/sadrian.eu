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
        // Dev-Server
        proxy: 'http://localhost:3000'
    }
})
