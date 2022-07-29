const { newGame, updateGameState } = require("../controllers/hangman.controller");
const { hangmanSchema } = require("../helpers/schemas");
const { validatePayload } = require("../middlewares/validate-payload");
const { buildPayload } = require("../middlewares/build-payload");

class hangmanRoutes {
  static init(router, path) {
    router.post(`${path}/newgame`, buildPayload() ,validatePayload(hangmanSchema), newGame);
    router.post(`${path}/updategame`, validatePayload(hangmanSchema), updateGameState);
  }
}


module.exports = hangmanRoutes;
