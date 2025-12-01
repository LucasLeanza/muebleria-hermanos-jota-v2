import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import Pedidos from "../models/Pedidos.js";
import Usuario from "../models/Usuario.js";

const router = express.Router();

// --- RUTA PARA CREAR PEDIDO (POST) ---
router.post("/pedido", authMiddleware, async (req, res) => {
  try {
    const { items, total } = req.body;

    // Validación básica
    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No hay items en el pedido" });
    }

    // Mapeamos los items del frontend al esquema del modelo Pedidos.js
    const productosPedido = items.map(item => ({
      producto: item.id || item._id, // Aseguramos el ID del producto
      cantidad: item.quantity || item.cantidad,
      precioUnitario: item.precio
    }));

    // Creamos el pedido usando el ID del usuario del token (req.usuario.id)
    const nuevoPedido = new Pedidos({
      usuario: req.usuario.id,
      productos: productosPedido,
      total: total,
      estado: "pendiente"
    });

    const pedidoGuardado = await nuevoPedido.save();
    
    res.status(201).json(pedidoGuardado);
  } catch (error) {
    console.error("Error al crear pedido:", error);
    res.status(500).json({ message: "Error en el servidor al procesar el pedido" });
  }
});

// RUTA PROTEGIDA: Perfil del usuario
router.get("/perfil", authMiddleware, async (req, res) => {
  const usuario = await Usuario.findById(req.usuario.id).select("-password");
  res.json(usuario);
});

// RUTA PROTEGIDA: Mis pedidos
router.get("/mis-pedidos", authMiddleware, async (req, res) => {
  const pedidos = await Pedidos.find({ usuario: req.usuario.id });
  res.json(pedidos);
});

export default router;
