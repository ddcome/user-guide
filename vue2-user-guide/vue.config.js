const { defineConfig } = require('@vue/cli-service')
const path = require("path")

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
        .rule('svg')
        .exclude.add(path.resolve(__dirname, 'src/assets/svg-icons'))
        .end();
    config.module
        .rule('icons')
        .test(/.svg$/)
        .include.add(path.resolve(__dirname, 'src/assets/svg-icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]',
        });
},
})
