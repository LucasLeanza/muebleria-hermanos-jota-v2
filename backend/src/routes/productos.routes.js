import { Router } from 'express'
import * as ctrl from '../controllers/productos.controller.js'

const router = Router()

router.get('/', ctrl.getProducts)
router.get('/:id', ctrl.getProductById)
router.post('/', ctrl.createProduct)
router.patch('/:id', ctrl.updateProduct)
router.delete('/:id', ctrl.deleteProduct)

export default router