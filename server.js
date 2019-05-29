const express = require("express");

const server = express();

//middleware

server.use(express.json());
server.use(logger);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(
    `A ${req.method} request to '${
      req.url
    }' was made at ${new Date().toISOString()}.`
  );
  next();
}

module.exports = server;
