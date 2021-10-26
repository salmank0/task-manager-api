const notFound = (request, response) => {
  return response.status(404).json({success: false, data: {message: `Route ${request.url} does not exist!`}})
}

module.exports = notFound
