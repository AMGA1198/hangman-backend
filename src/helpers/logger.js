const { createLogger, format, transports } = require('winston')

const dailyRotateFileTransport = new transports.File({
  filename: `${process.env.LOGGER_FILE_DIR}/hangman.log`,
});

const dailyRotateFileTransportConsole = new transports.Console({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.printf(
      info => `| ${info.timestamp} ${info.level} | --> ${info.message}`
    )
  )
});

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.printf(
      info =>
        `| ${info.timestamp} ${info.level.toLocaleUpperCase()} | --> ${info.message
        }`
    )
  ),
  transports: [
    dailyRotateFileTransportConsole,
    dailyRotateFileTransport
  ]
});

logger.stream = {
  write: function (message, encoding) {
    logger.info(message)
  }
};

module.exports = logger
