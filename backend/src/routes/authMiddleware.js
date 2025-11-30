import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import Pedidos from "../models/Pedidos.js";
import Usuario from "../models/Usuario.js";

const router = express.Router();

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
