const { v4: uuidv4 } = require('uuid');

const words = ["hello", "animals", "clothes", "windy", "weather", "vegetables", "chocolate", "vocabulary"];


const buildPayload = () => {
  return (req, res, next) => {
    try {
      const { nguesses = 10, wguesses, gletters } = req.body;
      const payload = {
        uuid: uuidv4(),
        nguesses,
        wguesses,
        mword: maskedWord(),
        gletters
      };
      req.body = payload;
      next();
    } catch (error) {
      logger.error('Error building payload: ' + error)
      res.status(500).json({ msg: error })
    }
  }
};

const maskedWord = () => {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
};

module.exports = {
  buildPayload
}