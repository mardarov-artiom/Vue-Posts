const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'build',
  assetsDir: 'static/',
  publicPath: '',
});
