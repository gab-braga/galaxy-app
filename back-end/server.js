const exoplanetsData = require("./exoplanetas.json");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(exoplanetsData);
const middlwares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlwares);
server.use(router);
server.listen(port);