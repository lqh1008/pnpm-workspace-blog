const proxy = () => {
  const testServer = "http://localhost:3000";

  return [
    {
      context: ["/api"],
      target: testServer,
      secure: false,
      changeOrigin: true,
      cookieDomainRewrite: {
        "*": "",
      },
      pathRewrite: {
        "^/api": "/",
      },
    },
  ];
};

module.exports = proxy;
