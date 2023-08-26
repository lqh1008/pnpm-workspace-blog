//server.js
const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");
const devProxy = require("./proxy"); // 引入代理文件

const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    if (dev && devProxy) {
      devProxy().forEach(function (proxy) {
        server.use(createProxyMiddleware(proxy.context, proxy));
      });
    }

    server.all("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("An error occurred, unable to start the server");
    console.log(err);
  });
