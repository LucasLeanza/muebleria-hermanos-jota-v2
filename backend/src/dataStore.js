import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

// En ESM no existe __dirname por defecto, lo recreamos
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Crea una ruta absoluta al archivo productos.json
const DATA_PATH = path.join(__dirname, '../data/productos.json')

let productos = []

// Función asíncrona para leer el archivo productos.json y cargarlo en la variable productos
export async function load () {
  const raw = await fs.readFile(DATA_PATH, 'utf-8')
  productos = JSON.parse(raw)
}

// Función asíncrona para guardar los cambios hechos en productos.json
export async function save () {
  const json = JSON.stringify(productos, null, 2)
  await fs.writeFile(DATA_PATH, json, 'utf-8')
}

export function getAll () { return productos }
export function getById (id) { return productos.find(p => String(p.id) === String(id)) || null }

// Agrega un nuevo producto al array y lo guarda en el archivo
export async function create (obj) {
  productos.push(obj)
  await save()
  return obj
}

// Actualiza parcialmente un producto existente (por id)
export async function updatePartial (id, patch) {
  const i = productos.findIndex(p => String(p.id) === String(id))
  if (i === -1) return null
  productos[i] = { ...productos[i], ...patch }
  await save()
  return productos[i]
}

// Elimina un producto por id y guarda los cambios en el archivo
export async function remove (id) {
  const i = productos.findIndex(p => String(p.id) === String(id))
  if (i === -1) return false
  productos.splice(i, 1)
  await save()
  return true
}
