module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/web-app/' // web-app 為 repo 名稱
      : '/'
  }