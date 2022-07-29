const { response } = require('express');
const { createGame, updateGame } = require('../services/hangman.service');

const newGame = (req, res = response) => {
  try {
    const result = createGame(req.body);
    if (result) {
      logger.info('Created game: ' + JSON.stringify(result));
      res.status(201).json(result);
    } else {
      logger.info('Bad request at creating game' + req.body);
      res.status(400).json({ msg: 'Bad request' });
    }
  } catch (error) {
    logger.error('Error at creating new game: ' + error)
    res.status(500).json({ msg: error })
  }
};

const updateGameState = (req, res = response) => {
  try {
    const result = updateGame(req.body);
    if (result) {
      logger.info('Updated game: ' + JSON.stringify(result));
      res.status(200).json(result);
    } else {
      logger.info('Game not found with uuid: ' + req.body.uuid);
      res.status(404).json('Not found');
    }
  } catch (error) {
    logger.error('Error at updating game: ' + error)
    res.status(500).json({ msg: error })
  }
}

module.exports = {
  newGame,
  updateGameState
}