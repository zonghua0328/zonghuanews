// 自定义vant主题的文件路径
const path = require('path')

const coverPath = path.join(__dirname, './src/style/cover.less')

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${coverPath}";`
        }
      }
    }
  },
  // 代理
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'https://api.imjad.cn/cloudmusic',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  }
}