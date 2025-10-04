const express = require('express')
const ctrl = require('../controllers/productos.controller')

const router = express.Router()

router.get('/', ctrl.list)
router.get('/:id', ctrl.detail)
router.post('/', ctrl.create)
router.patch('/:id', ctrl.update)
router.delete('/:id', ctrl.destroy)

module.exports = router