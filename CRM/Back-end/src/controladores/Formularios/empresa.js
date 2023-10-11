import { pool } from "../../db.js";

export const createEmpresa = async (req, res) =>{
    try {
        const {nombreEmpresa, url, descripcion, segmento} = req.body;
        const [rows] = await pool.query(
            "INSERT INTO empresa (nombreEmpresa, segmento, url, descripcion ) VALUES (?,?,?,?)",
            [nombreEmpresa, segmento, url, descripcion])

            res.send({
                id:rows.insertId,
                nombreEmpresa,
                segmento,
                url,
                descripcion 
            });

    } catch (error) {
    
        return res.status(500).json({messege: "algo va mal"})
        
    }
};

export const getEmpresas = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM empresa WHERE estado ="activo" ')

        res.json(rows)
    } catch (error) {
        return res.status(500).json({message: 'Algo va mal'})
    }
};

export const getEmpresaId = async (req, res) => {
    const idEmpresa = req.params.id;
    try {
        const [row] = await pool.query('SELECT * FROM empresa WHERE idEmpresa = ?', [idEmpresa]);

        res.json(row);
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo segmento por ID' });
    }
};

export const updateEmpresas = async (req, res) => {
    try {
        const { nombreEmpresa, segmento, url, descripcion } = req.body;

        const updateData = await pool.query(
            'UPDATE empresa SET nombreEmpresa=?, segmento=?, url=?, descripcion=? WHERE idEmpresa = ?',
            [nombreEmpresa, segmento, url, descripcion, req.params.id]
        );

        res.status(200).json({ message: 'A company has been updated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error was detected' });
    }
};



export const deleteEmpresas = async (req, res) => {
    try {
        const deletedata = await pool.query('DELETE FROM empresa WHERE idEmpresa = ?',
        [req.params.id]);
        res.status(200).json({ message: 'Empresa eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la empresa' });
    }
};

// Actualizar un empresa por su ID







