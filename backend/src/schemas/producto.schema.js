const { z } = require('zod')

const categorias = ['Almacenamiento', 'Asientos', 'Mesas', 'Dormitorio', 'Oficina']

const productoCreateSchema = z.object({
  nombre: z.string().min(2, 'Nombre muy corto'),
  descripcion: z.string().min(5).max(500),
  precio: z.number().int().nonnegative(),
  img: z.string(),
  categoria: z.enum(categorias, { errorMap: () => ({ message: `Categoría inválida. Use: ${categorias.join(', ')}` }) }),
  stock: z.number().int().nonnegative()
})

const productoUpdateSchema = productoCreateSchema.partial()

function validateProductoCreate (input) {
  return productoCreateSchema.safeParse(input)
}

function validateProductoUpdate (input) {
  return productoUpdateSchema.safeParse(input)
}

module.exports = {
  validateProductoCreate,
  validateProductoUpdate
}