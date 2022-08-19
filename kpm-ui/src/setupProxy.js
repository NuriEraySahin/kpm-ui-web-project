const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
  app.use(
    '/wifi',
    createProxyMiddleware({
      target: 'http://localhost:3070',
      changeOrigin: true,
    })
  );
};