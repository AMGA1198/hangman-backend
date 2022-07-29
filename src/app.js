require('dotenv').config();
global.logger = require("./helpers/logger");
const Server = require('./config/server.config');


const server = new Server();

server.listen();
