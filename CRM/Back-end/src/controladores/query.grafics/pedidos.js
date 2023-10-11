import { pool } from "../../db";

export const getPedidos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM pedidos where fecha = "2023-09-21"   ')

        res.json(rows)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Algo anda mal" });
    }
};
