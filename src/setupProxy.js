const { createProxyMiddleware } = require("http-proxy-middleware");
const dotenv = require("dotenv");
dotenv.config({ path: ".env.domain" });

console.log(process.env.PROXY_DOMAIN);

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: `${process.env.PROXY_DOMAIN}:3001/`,
            changeOrigin: true,
        })
    );
};
