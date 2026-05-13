const https = require("https");
const fs = require("fs");
const next = require("next");

const app = next({ dev: true });
const handle = app.getRequestHandler();

const options = {
  key: fs.readFileSync("./shop.domain.com+2-key.pem"),
  cert: fs.readFileSync("./shop.domain.com+2.pem"),
};

app.prepare().then(() => {
  https.createServer(options, (req, res) => {
    handle(req, res);
  }).listen(3000, () => {
    console.log("https://shop.domain.com:3000");
  });
});