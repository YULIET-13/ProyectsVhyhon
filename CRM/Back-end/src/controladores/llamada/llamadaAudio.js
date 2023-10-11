import { pool } from "../../db.js";

export const crearLlamada = async (req, res) => {
    try {
        const {
            cedula,
            negocio,
            nombre,
            apellido,
            telefono,
            telefonoFijo,
            direccion,
            correo,
            llamadaInicio,
            llamadaFinal,
            duracionLlamada
        } = req.body;

        const [rows] = await pool.query(
            "INSERT INTO llamada (cedula, negocio, nombre, apellido, telefono, telefonoFijo, direccion, correo, llamadaInicio, llamadaFinal, duracionLlamada) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, TIMEDIFF(llamadaInicio,llamadaFinal))",
            [cedula, negocio, nombre, apellido, telefono, telefonoFijo, direccion, correo, llamadaInicio, llamadaFinal, duracionLlamada]
        );

    

        res.send({
            cedula,
            negocio,
            nombre,
            apellido,
            telefono,
            telefonoFijo,
            direccion,
            correo,
            llamadaInicio,
            llamadaFinal,
            duracionLlamada
        });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Algo anda mal" });
    }
};