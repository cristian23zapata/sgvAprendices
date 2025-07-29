// src/api/v1/fichas/ficha.routes.js
import express from "express";
import {
  getAllFichas,
  getFichaById,
  createFicha,
  updateFicha,
  deleteFicha,
} from "./ficha.controller.js";

const router = express.Router();

// Rutas para Fichas
router.get("/listartodos", getAllFichas);
router.get("/listarporid/:id", getFichaById);
router.post("/crear", createFicha);
router.put("/actualizar/:id", updateFicha);
router.delete("/borrar/:id", deleteFicha);

export default router;