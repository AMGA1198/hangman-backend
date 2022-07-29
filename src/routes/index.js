const { Router } = require("express");
const hangmanRoutes = require("./hangman.routes");


class Routes {

    constructor(app) {
        this.router = Router();
        this.app = app;
        this.paths = {
            hangman: '/hangman'
        }
    }

    init() {
        hangmanRoutes.init(this.router, this.paths.hangman);
        this.app.use('/api/v1', this.router);
    }

}

module.exports = {
    Routes
}