import { Pool } from "../../db";

export const obtainMontosMenor2000 = async (req, res) => {
    try {
        const pool = new Pool();
        const client = await pool.connect();
        const query = "SELECT * FROM pedidos WHERE monto < 2000";
        const result = await client.query(query);
        client.release();
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const obtainMontosMenor3000 = async (req, res) => {
    try {
        const pool = new Pool();
        const client = await pool.connect();
        const query = "SELECT * FROM pedidos WHERE monto < 3000";
        const result = await client.query(query);
        client.release();
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const obtainMontosMenor4000 = async (req, res) => {
    try {
        const pool = new Pool();
        const client = await pool.connect();
        const query = "SELECT * FROM pedidos WHERE monto < 4000";
        const result = await client.query(query);
        client.release();
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const obtainMontosMayor3000 = async (req, res) => {
    try {
        const pool = new Pool();
        const client = await pool.connect();
        const query = "SELECT * FROM pedidos WHERE monto > 3000";
        const result = await client.query(query);
        client.release();
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
