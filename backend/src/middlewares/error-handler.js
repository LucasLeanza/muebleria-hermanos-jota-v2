export default function errorHandler(err, req, res, next) {
  console.error(err)
  res.status(500).json({ error: { message: 'Error interno del servidor' } })
}