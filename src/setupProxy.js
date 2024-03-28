const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/riotgames',
    createProxyMiddleware({
      target: 'https://kr.api.riotgames.com',
      changeOrigin: true,
    }),
  );
};