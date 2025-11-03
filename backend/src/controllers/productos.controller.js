import { Product } from '../models/producto.model.js'
import mongoose from 'mongoose'
import { handleMongooseError } from '../middlewares/mongoose-error-handler.js'
import { ensureValidId } from '../middlewares/mongoose-valid-id-handler.js'

async function createProduct(req, res){
  try {
    const product = await Product.create(req.body)
    return res.status(201).json(product)
  } catch(error) {
    return handleMongooseError(res, error)
  }
}

async function getProducts(req, res) {
  try {
    const products = await Product.find()
    return res.json(products)
  } catch (error) {
    next(error)
  }
}

async function getProductById(req, res) {
  const { id } = req.params
  if (!ensureValidId(res, id)) return

  try {
    const product = await Product.findById(id)
    if (!product){
      return res.status(404).json({error: 'Producto no encontrado'})
    }

    return res.json(product)
  } catch (error) {
    return handleMongooseError(res, error)
  }
}

async function updateProduct(req, res) {
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
    return handleMongooseError(res, error)
  }
}

async function deleteProduct(req, res) {
  const { id } = req.params
  if (!ensureValidId(res, id)) return

  try {
    const product = await Product.findByIdAndDelete(id)

    if (!product) {
      return res.status(404).json({error: 'Producto no encontrado'})
    }

    return res.status(204).send()
  } catch (error) {
    return handleMongooseError(res, error)
  }
}

export { createProduct, getProducts, getProductById, updateProduct, deleteProduct }