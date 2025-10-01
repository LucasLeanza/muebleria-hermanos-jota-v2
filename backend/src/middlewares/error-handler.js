function errorHandler (err, req, res, next) {
  console.error(err)
  res.status(500).json({ error: { message: 'Error intento del servidor' } })
}

module.exports = errorHandler