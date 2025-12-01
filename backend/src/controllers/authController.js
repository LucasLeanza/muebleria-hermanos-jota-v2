import jwt from 'jsonwebtoken'
import Usuario from '../models/Usuario.js'

// ============================================
//                   REGISTRO
// ============================================
export const registro = async (req, res) => {
  try {
    const { nombre, email, password } = req.body

    //Valido que lleguen todos los campos
    if(!nombre || !email || !password) {
      return res.status(400).json({
        error: 'Todos los campos son obligatorios'
      })
    }

    //Verifico si el email ya existe
    const usuarioExistente = await Usuario.findOne({ email })
    if(usuarioExistente) {
      return res.status(400).json({
        error: 'El email ya está registrado'
      })
    }

    //Creo el nuevo usuario. La password se hashea automáticamente con el pre-save del model
    const nuevoUsuario = new Usuario({
      nombre,
      email,
      password
    })

    await nuevoUsuario.save()

    //Genero el JWT
    const token = jwt.sign(
      {
        id: nuevoUsuario._id,
        email: nuevoUsuario.email,
        nombre: nuevoUsuario.nombre
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' } //El token expira en 7 días
    )

    //Respondo con el usuario y el token. NO envio la password en la respuesta
    res.status(201).json({
      mensaje: 'Usuario registrado exitosamente',
      token,
      usuario: {
        id: nuevoUsuario._id,
        nombre: nuevoUsuario.nombre,
        email: nuevoUsuario.email
      }
    })

  } catch (error) {
    console.error('Error en registro', error)
    res.status(500).json({
      error: 'Error al registrar el usuario',
      detalle: error.message
    })
  }
}

// ============================================
//                   LOGIN
// ============================================
export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    //Valido que lleguen los campos
    if(!email || !password) {
      return res.status(400).json({
        error: 'Email y contraseña son obligatorios'
      })
    }

    //Busco el usuario por email
    const usuario = await Usuario.findOne({ email })
    if(!usuario) {
      return res.status(401).json({
        error: 'Credenciales inválidas'
      })
    }

    const passwordValida = await usuario.compararPassword(password)
    if(!passwordValida) {
      return res.status(401).json({
        error: 'Credenciales inválidas'
      })
    }

    //Genero el JWT
        const token = jwt.sign(
      {
        id: usuario._id,
        email: usuario.email,
        nombre: usuario.nombre
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )

    //Respondo con el usuario y el token
    res.status(200).json({
      mensaje: 'Login exitoso',
      token,
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email
      }
    })

  } catch (error) {
    console.error('Error en el login: ', error)
    res.status(500).json({
      error: 'Error al iniciar sesión',
      detalle: error.message
    })
  }
}