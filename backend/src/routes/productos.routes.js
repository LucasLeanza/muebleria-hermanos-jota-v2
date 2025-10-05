import { Router } from 'express'
import * as ctrl from '../controllers/productos.controller.js'

const router = Router()

router.get('/', ctrl.list)
router.get('/:id', ctrl.detail)
router.post('/', ctrl.create)
router.patch('/:id', ctrl.update)
router.delete('/:id', ctrl.destroy)

export default router