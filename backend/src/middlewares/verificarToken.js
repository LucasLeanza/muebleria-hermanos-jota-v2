import jwt from 'jsonwebtoken'

const verificarToken = (req, res, next) => {
  // Obtengo el token del header Authorization (formato bearer)
  const authHeader = req.headers.authorization

  //Verifico que exista el header y empieze con "Bearer"
  if(!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'No autorizado. Token no proporcionado'
    })
  }

  // Separo el authHeader para quedarme unicamente con el token y deshacerme del "Bearer: "
  const token = authHeader.split(' ')[1]

  try {
    //Verifico y decodifico el token.
    //jwt.verify() tira error si el token es inválido o expiró
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    //Agrego la información del user decodificada al objeto req
    // Cualquier ruta que use este middleware va a tener acceso a req.usuario
    req.usuario = decoded

    next()
  } catch (error) {
    return res.status(401).json({
      error: 'Token inválido o expirado'
    })
  }
}

export default verificarToken