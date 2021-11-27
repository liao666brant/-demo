module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  productionSourceMap: false,
  devServer: {
    // assetPublicPath: '/dist/',
    // 配置多个代理
    proxy: {
      "/api": {
        target: "https://view.inews.qq.com/",
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      "/usc": {
        target: "http://110.42.237.123:8080/CovidData/",
        changeOrigin: true,
        pathRewrite: {
          '^/usc': ''
        }
      }
    }
  }
};
