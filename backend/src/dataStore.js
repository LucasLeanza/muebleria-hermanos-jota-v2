const fs = require('fs/promises')
const path = require('path')

// Crea una ruta absoluta al archivo productos.json (sube un nivel y entra a /data) sin importar el sistema operativo
const DATA_PATH = path.join(__dirname, '../data/productos.json')

let productos = []

// Función asíncrona para leer el archivo productos.json y cargarlo en la variable productos
async function load () {
  const raw = await fs.readFile(DATA_PATH, 'utf-8')
  productos = JSON.parse(raw)
}

// Función asíncrona para guardar los cambios hechos en productos.json
async function save () {
  const json = JSON.stringify(productos, null, 2)
  await fs.writeFile(DATA_PATH, json, 'utf-8')
}

function getAll () { return productos }
function getById (id) { return productos.find(p => String(p.id) === String(id)) || null }

// Agrega un nuevo producto al array y lo guarda en el archivo
async function create (obj) {
  productos.push(obj)
  await save()
  return obj
}

// Actualiza parcialmente un producto existente (por id)
async function updatePartial (id, patch) {
  const i = productos.findIndex(p => String(p.id) === String(id))
  if (i === -1) return null
  productos[i] = { ...productos[i], ...patch }
  await save()
  return productos[i]
}


// Elimina un producto por id y guarda los cambios en el archivo
async function remove (id) {
  const i = productos.findIndex(p => String(p.id) === String(id))
  if (i === -1) return false
  productos.splice(i, 1)
  await save()
  return true
}

module.exports = { load, getAll, getById, create, updatePartial, remove }