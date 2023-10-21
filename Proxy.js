const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/',  // Specify the API endpoint to proxy
    createProxyMiddleware({
      target: 'http://localhost:5000',  // URL of your Flask backend
      changeOrigin: true,
    })
  );
};
