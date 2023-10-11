import { pool } from "../../db.js";

export const getSegmento = async(req,res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM segmento');
        res.json(rows)

    } catch (error) {
        return res.status(500).json({message: 'Algo va mal'})
    }
};



// Obtener un segmento por su ID
export const segmentId = async (req, res) => {
    const segmentoId = req.params.id;

    try {
        const segmento = await pool.query('SELECT * FROM segmentos WHERE idsegmento = ?', [segmentoId]);

        res.json(segmento.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo segmento por ID' });
    }
};
