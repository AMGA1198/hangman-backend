
module.exports.validatePayload = (schema) => {
  return (req, res, next) => {
    try {
      const payload = req.body;
      const validation = schema.validate(payload);
      if (validation.error) {
        logger.info('Invalid schema: ' + validation.error)
        res.status(400).send({ msg: validation.error });
      };
      next();
    } catch (error) {
      logger.error('Error at schema game: ' + error)
      res.status(500).send({ msg: error });
    }
  }
};
