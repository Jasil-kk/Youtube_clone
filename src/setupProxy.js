const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://react-test.aventusinformatics.com',
      changeOrigin: true,
    })
  );
};