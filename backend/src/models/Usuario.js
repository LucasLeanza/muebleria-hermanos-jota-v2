import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const { Schema, model } = mongoose

const UsuarioSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    trim: true,
    minlength: [2, "El nombre debe tener al menos 2 caracteres"]
  },
  email: {
    type: String,
    required: [true, "El email es obligatorio"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Email inválido"]
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
    minlength: [6, "La contraseña debe tener al menos 6 caracteres"]
  }
}, { timestamps: true })

//El pre-save sirve para hashear la contraseña antes de guardar
UsuarioSchema.pre('save', async function(next) {
  //Solo hashea si la contraseña es nueva o se modifica
  if(!this.isModified('password')) {
    return next()
  }

  try {
    const salt = await bcrypt.genSalt(10)
    
    this.password = await bcrypt.hash(this.password, salt)
    next()
  } catch (error) {
    next(error)
  }
})

UsuarioSchema.methods.compararPassword = async function(passwordIngresado) {
  return await bcrypt.compare(passwordIngresado, this.password)
}

const Usuario = model('Usuario', UsuarioSchema)

export default Usuario