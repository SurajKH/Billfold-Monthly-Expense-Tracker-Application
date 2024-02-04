// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//     app.use(
//         createProxyMiddleware('/auth-service', { target: 'http://localhost:8080', changeOrigin: true })
//     );

//     app.use(
//         createProxyMiddleware('/bill-service', { target: 'http://localhost:8081', changeOrigin: true })
//     );
// };

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
    app.use(createProxyMiddleware('/bill-service', {
        target: 'http://localhost:8081',
        changeOrigin: true,
        pathRewrite: { '^/bill-service': '' }
    })
    );
}
