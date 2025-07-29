// src/api/v1/fichas/ficha.model.js
import dbconn from "../../config/dbconexion.js"; 

export async function getFichasDB() {
    const [rows] = await dbconn.query("SELECT * FROM ficha");
    return rows;
}

export async function getFichaporIdDB(id) {
    const [rows] = await dbconn.query("SELECT * FROM ficha WHERE id_ficha = ?", [
        id,
    ]);
    return rows[0];
}

export async function createFichaDB(fichaData) {
  const [result] = await dbconn.query("INSERT INTO ficha SET ?", [
    fichaData,
  ]);
  return result;
}

export async function updateFichaDB(id, fichaData) {
  const [result] = await dbconn.query("UPDATE ficha SET ? WHERE id_ficha = ?", [
    fichaData,
    id,
  ]);
  return result;
}

export async function deleteFichaDB(id) {
  const [result] = await dbconn.query("DELETE FROM ficha WHERE id_ficha = ?", [
    id,
  ]);
  return result;
}