const crypto = require('node:crypto')
const store = require('../dataStore')
const { validateProductoCreate, validateProductoUpdate } = require('../schemas/producto.schema')

// GET /api/productos
async function list (req, res, next) {
  try {
    const data = store.getAll()
    return res.json(data)
  } catch (err) { next(err) }
}

// GET /api/productos/:id
async function detail(req, res, next) {
  try {
    const { id } = req.params
    const item = store.getById(id)
    if (!item) {
      return res.status(404).json({ error: { message: 'Producto no encontrado' } })
    }
    return res.json(item)
  } catch (err) { next(err) }
}

// POST /api/productos
async function create (req, res, next) {
  try {
    const parsed = validateProductoCreate(req.body)
    if (!parsed.success) {
      return res.status(400).json({ error: { message: 'Datos inválidos', details: parsed.error.flatten() } })
    }

    const nuevo = {
      id: crypto.randomUUID(),
      ...parsed.data
    }

    const saved = await store.create(nuevo)
    return res.status(201).json(saved)
  } catch (err) { next(err) }
}

// PATCH /api/productos/:id
async function update (req, res, next) {
  try {
    const parsed = validateProductoUpdate(req.body)
    if (!parsed.success) {
      return res.status(400).json({ error: { message: 'Datos inválidos' } })
    }

    if(Object.keys(parsed.data).length === 0) {
      return res.status(400).json({error: { message: 'No se enviaron cambios' }})
    }

    const { id } = req.params
    const updated = await store.updatePartial(id, parsed.data)
    if (!updated) {
      return res.status(404).json({ error: { message: 'Producto no encontrado' } })
    }

    return res.json(updated)
  } catch (err) { next(err) }
}

// DELETE /api/productos/:id
async function destroy (req, res, next) {
  try {
    const { id } = req.params
    const ok = await store.remove(id)
    if (!ok) {
      return res.status(404).json({ error: { message: 'Producto no encontrado' } })
    }
    return res.status(204).end()
  } catch (err) { next(err) }
}

module.exports = { list, detail, create, update, destroy }