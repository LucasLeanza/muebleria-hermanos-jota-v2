import { Product } from '../models/producto.model.js'
import mongoose from 'mongoose'
import { handleMongooseError } from '../middlewares/mongoose-error-handler.js'
import { ensureValidId } from '../middlewares/mongoose-valid-id-handler.js'

async function createProduct(req, res, next){
  try {
    const product = await Product.create(req.body)
    return res.status(201).json(product)
  } catch(error) {
    next(error)
  }
}

async function getProducts(req, res, next) {
  try {
    const products = await Product.find()
    return res.json(products)
  } catch (error) {
    next(error)
  }
}

async function getProductById(req, res, next) {
  const { id } = req.params
  if (!ensureValidId(res, id)) return

  try {
    const product = await Product.findById(id)
    if (!product){
      return res.status(404).json({error: 'Producto no encontrado'})
    }

    return res.json(product)
  } catch (error) {
    next(error)
  }
}

async function updateProduct(req, res, next) {
  const { id } = req.params
  if (!ensureValidId(res, id)) return

  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    })

    if (!product) {
      return res.status(404).json({error: 'Producto no encontrado'})
    }

    return res.json(product)
  } catch (error) {
    next(error)
  }
}

async function deleteProduct(req, res, next) {
  const { id } = req.params
  if (!ensureValidId(res, id)) return

  try {
    const product = await Product.findByIdAndDelete(id)

    if (!product) {
      return res.status(404).json({error: 'Producto no encontrado'})
    }

    return res.status(204).send()
  } catch (error) {
    next(error)
  }
}

export { createProduct, getProducts, getProductById, updateProduct, deleteProduct }