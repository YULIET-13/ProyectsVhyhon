import { pool } from "../../db.js";
export const crearNegocio = async (req, res) => {
    try {
        const {nombreNegocio, etapas, fuente, empresa, contacto} = req.body;
        const [rows] = await pool.query(
            "INSERT INTO negocio (nombreNegocio, etapas, fuente, empresa, contacto) VALUES (?,?,?,?,?)",
            [nombreNegocio, etapas, fuente, empresa, contacto]
        );
        res.send({
            id: rows.insertId,
            nombreNegocio, 
            etapas, 
            fuente, 
            empresa, 
            contacto
        });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Algo anda mal" });
    }
};



export const getNegocio = async (req, res) => {
    try {
        
        const [rows] = await pool.query('SELECT * FROM Negocio WHERE estado ="activo"')

        res.json(rows)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Algo anda mal" });
    }
};




export const getNegocioId = async (req, res) => {
    const idNegocio = req.params.id;
    try {
        const [row] = await pool.query('SELECT * FROM negocio WHERE idNegocio = ?', [idNegocio]);

        res.json(row);
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo segmento por ID' });
    }
};


export const updateNegocio = async (req, res) => {
    try {
        const {nombreNegocio, etapas, fuente, empresa, contacto} = req.body;

        const updateData = await pool.query(
            'UPDATE empresa SET nombreNegocio = ?, etapas = ?, fuentes = ?, empresa = ?, contacto = ?, WHERE idNegocio = ?',
            [nombreNegocio, etapas, fuente, empresa, contacto, req.params.id]
        );
            res.json(updateData)
        res.status(200).json({ message: 'A company has been updated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error was detected' });
    }
};


export const deleteNegocio = async (req, res) => {
    try {
        const deletedata = await pool.query('DELETE FROM negocio WHERE idNegocio = ?',
        [req.params.id]);
        res.status(200).json({ message: 'Empresa eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la empresa' });
    }
};
