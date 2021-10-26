const { CustomAPIError } = require('../errors/custom-error')
const errorHandlerMiddleware = (error, request, response, next) => {
  if (error instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: error.message })
  }
  return res.status(500).json({ msg: 'Something went wrong, please try again' })
}

module.exports = errorHandlerMiddleware