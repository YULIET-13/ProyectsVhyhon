import { pool } from "../../db.js";

export const getTablaTarea = async (req, res) => {
    try {

        const [rows] = await pool.query('SELECT tarea.idTarea, negocio.nombreNegocio , tarea.asunto , tarea.responsable , tarea.tipoTarea , tarea.fecha , tarea.hora FROM tarea INNER JOIN negocio ON tarea.negocio = negocio.idNegocio WHERE tarea.estado= "activo"')

        res.json(rows)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Algo anda mal" });
    }
}

export const updatetablaTareas = async (req, res) => {
    const { idTareas } = req.params;
    try {
        const { negocio, asunto, responsable, tipoTarea, fecha, hora } = req.body;
        const updateData = await pool.query(
            'UPDATE tarea SET negocio = IFNULL(?, negocio), asunto = IFNULL(?,asunto), responsable = IFNULL(?,responsable), tipoTarea = IFNULL(?,tipoTarea), fecha = IFNULL(?,fecha), hora = IFNULL(?,hora) WHERE idTarea = ?',
            [negocio, asunto, responsable, tipoTarea, fecha, hora, idTareas]
        );
        res.status(200).json({ message: 'Actualizada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'error al actualizar' });
    }
};

// export const deleteTablaTareas = async (req, res) => {
//     try {
//         const [row] = await pool.query('DELETE FROM tarea where idTarea = ?', [req.params.idTareas]);
//         res.status(200).json({ message: ' registro eliminado' })
//     } catch (error) {
//         res.status(500).json({ message: 'No se pudo eliminar el registro' })
//     }
// }

export const desactivarTablaTarea = async (req, res) => {
    try {
      const [row] = await pool.query('UPDATE tarea SET estado = ? WHERE idTarea = ?', ['desactivado', req.params.idTareas]);
      res.status(200).json({ message: 'Registro desactivado' });
    } catch (error) {
      res.status(500).json({ message: 'No se pudo desactivar el registro' });
    }
  }