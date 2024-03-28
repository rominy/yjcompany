const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/riotgames', {
      target: 'https://kr.api.riotgames.com',
      changeOrigin: true,
    }),
  );
}