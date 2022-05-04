/* eslint-disable vue/max-len */
const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],
  css: {
    loaderOptions: {
      sass: {
        additionalData: bootstrapSassAbstractsImports.join('\n'),
      },
      scss: {
        additionalData: [...bootstrapSassAbstractsImports, ''].join(';\n'),
      },
    },
  },
});
