const express = require('express');
const cors = require('cors');
const { Routes } = require('../routes');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();

        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        const routes = new Routes(this.app);
        routes.init();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Hangman api listening at http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;