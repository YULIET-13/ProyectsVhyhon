import { pool } from "../../db.js";


export const crearContacto = async (req, res) => {
    try {
        const {nombreContacto, cargo, telefono, correo, contactoEmpresa} = req.body;
        const [rows] = await pool.query(
            "INSERT INTO contacto (nombreContacto, cargo, telefono, correo, contactoEmpresa) VALUES (?,?,?,?,?)",
            [nombreContacto, cargo, telefono, correo, contactoEmpresa]
        );
        res.send({
            id: rows.insertId,
            nombreContacto,
            cargo,
            telefono,
            correo,
            contactoEmpresa
        });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Algo anda mal" });
    }
};



export const getContacto = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM contacto WHERE estado ="activo"')

        res.json(rows)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Algo anda mal" });
    }
};



export const getContactoId = async (req, res) => {
    const idContacto = req.params.id;
    try {
        const [row] = await pool.query('SELECT * FROM contacto WHERE idContacto = ?', [idContacto]);

        res.json(row);
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo segmento por ID' });
    }
};




export const updateContacto = async (req, res) => {
    try {
        const {nombreContacto, cargo, telefono, correo, contactoEmpresa} = req.body;

        const updateData = await pool.query(
            'UPDATE contacto SET nombreContacto = ?, cargo = ?, telefono = ?, correo = ?, contactoEmpresa = ?, WHERE idContacto = ?',
            [nombreContacto, cargo, telefono, correo, contactoEmpresa, req.params.id]
        );
            res.json(updateData)
        res.status(200).json({ message: 'A company has been updated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error was detected' });
    }
};


export const deleteContacto = async (req, res) => {
    try {
        const deletedata = await pool.query('DELETE FROM empresa WHERE idContacto = ?',
        [req.params.id]);
        res.status(200).json({ message: 'Empresa eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la empresa' });
    }
};



