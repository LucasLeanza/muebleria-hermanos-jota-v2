import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { productos } from "./data/productos.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// 🔹 Esto sirve archivos estáticos desde la carpeta images
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "images")));

// 🔹 Rutas
app.get("/productos", (req, res) => {
  res.json(productos);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
