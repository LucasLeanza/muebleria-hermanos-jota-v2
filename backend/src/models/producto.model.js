import mongoose from 'mongoose'
import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "Nombre obligatorio"],
    trim: true,
    minlength: [2, "Nombre muy corto"]
  },
  descripcion: {
    type: String,
    maxlength: [500, "Limite de caracteres alcanzados para la descripcion"]
  },
  precio: {
    type: Number,
    min: [0, "Precio inválido"]
  },
  imageURL: {
    type: String
  }
})

const Product = model('Product', ProductSchema)

export { Product }