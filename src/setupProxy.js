const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  console.log("Inside proxy");
  // throw new Error("asasdasdasdasdasd")
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:5500",
      secure: false,
      changeOrigin: true,
    })
  );
};
