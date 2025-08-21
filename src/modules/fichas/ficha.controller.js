// src/api/v1/fichas/ficha.controller.js
import {
  getFichasDB,
  getFichaporIdDB,
  createFichaDB,
  updateFichaDB,
  deleteFichaDB,
} from "./ficha.model.js";

// Obtener todas las fichas
export async function getAllFichas(req, res) {
  try {
    const fichas = await getFichasDB();
    res.status(200).send({
      status: "ok",
      data: fichas,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.code + " => " + error.message,
    });
  }
}

// Obtener ficha por ID
export async function getFichaById(req, res) {
  try {
    const { id } = req.params;
    const ficha = await getFichaporIdDB(id);

    if (!ficha || ficha.length === 0) {
      return res.status(404).send({
        status: "error",
        message: "Ficha no encontrada.",
      });
    }

    res.status(200).send({
      status: "ok",
      data: ficha,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.code + " => " + error.message,
    });
  }
}

// Crear ficha
export async function createFicha(req, res) {
  try {
    const data = req.body;

    // Validaciones básicas
    if (!data.nombre || !data.fecha_inicio || !data.fecha_fin || !data.jornada) {
      return res.status(400).send({
        status: "error",
        message: "Todos los campos son requeridos (nombre, fecha_inicio, fecha_fin, jornada)",
      });
    }

    const result = await createFichaDB(data);
    res.status(201).send({
      status: "ok",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.code + " => " + error.message,
    });
  }
}

// Actualizar ficha
export async function updateFicha(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    const result = await updateFichaDB(id, data);

    if (result.affectedRows === 0) {
      return res.status(404).send({
        status: "error",
        message: "Ficha no encontrada o sin cambios para actualizar.",
      });
    }

    res.status(200).send({
      status: "ok",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.code + " => " + error.message,
    });
  }
}

// Eliminar ficha
export async function deleteFicha(req, res) {
  try {
    const { id } = req.params;

    const result = await deleteFichaDB(id);

    if (result.affectedRows === 0) {
      return res.status(404).send({
        status: "error",
        message: "Ficha no encontrada para eliminar.",
      });
    }

    res.status(200).send({
      status: "ok",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.code + " => " + error.message,
    });
  }
}
