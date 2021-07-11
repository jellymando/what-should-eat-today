const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/places", {
            target: "http://localhost:3001/",
            changeOrigin: true,
        })
    );

    app.use(
        createProxyMiddleware("/keywords", {
            target: "http://localhost:3001/",
            changeOrigin: true,
        })
    );
};
