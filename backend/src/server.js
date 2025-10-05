import app from './app.js'
import { load } from './dataStore.js'  // usa la export nombrada

const PORT = process.env.PORT || 3000

load()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`API lista en http://localhost:${PORT}`)
    })
  })
  .catch(err => {
    console.error('No se puede cargar data/productos.json', err)
    process.exit(1)
  })