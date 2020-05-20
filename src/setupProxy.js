/**
 * These proxy's are set up for dev
 * @type {[type]}
 */

const createProxyMiddleware = require('http-proxy-middleware');
console.log('register proxy for dev')

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
  //    target: 'https://image-server2.openstadsdeel.nl',
      target: 'http://localhost:8111',
      changeOrigin: true,
    })
  );

  app.use(
    '/image',
    createProxyMiddleware({
  //    target: 'https://image-server2.openstadsdeel.nl',
      target: 'http://localhost:3333',
      changeOrigin: true,
      onProxyReq : (proxyReq, req, res) => {

         // add custom header to request
         proxyReq.setHeader('Authorization', `Bearer 27834y23874`);
      }
    })
  );

  app.use(
    '/images',
    createProxyMiddleware({
      target: 'https://image-server2.openstadsdeel.nl',
      changeOrigin: true,
      onProxyReq : (proxyReq, req, res) => {

         // add custom header to request
         proxyReq.setHeader('Authorization', `Bearer MHhfb5U0m8vquAR81p`);
      }
    })
  );
};
