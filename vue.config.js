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
        proxy: 'https://localhost:3000' // enter dev server url here
    }
})
