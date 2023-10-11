import { pool } from "../../db.js";

export const Enerollamada = async(req,res) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-01-01'AND '2023-01-31'")

        const cantidadLlamadas = row[0].cantidad_llamadas;
        res.json(cantidadLlamadas)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
};
export const Febrerollamada = async(req,res) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-02-01'AND '2023-02-28'")
        const cantidadLlamadas = row[0].cantidad_llamadas;
        res.json(cantidadLlamadas)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
};
export const Marzollamada = async(req,res) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-03-01'AND '2023-03-31'")
        const cantidadLlamadas = row[0].cantidad_llamadas;
        res.json(cantidadLlamadas)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Abrilllamada = async(req,res) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-04-01'AND '2023-04-30'")
        const cantidadLlamadas = row[0].cantidad_llamadas;
        res.json(cantidadLlamadas)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Mayollamada = async(req,res) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-05-01'AND '2023-05-31'")
        const cantidadLlamadas = row[0].cantidad_llamadas;
        res.json(cantidadLlamadas)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Juniollamada = async(req,res) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-06-01'AND '2023-06-30'")
        const cantidadLlamadas = row[0].cantidad_llamadas;
        res.json(cantidadLlamadas)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Juliollamada = async(req,res) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-07-01'AND '2023-07-31'")
        const cantidadLlamadas = row[0].cantidad_llamadas;
        res.json(cantidadLlamadas)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Agostollamada = async(req,res) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-08-01'AND '2023-08-31'")
        const cantidadLlamadas = row[0].cantidad_llamadas;
        res.json(cantidadLlamadas)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Septiembrellamada = async(req,res) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-09-01'AND '2023-09-30'")
        const cantidadLlamadas = row[0].cantidad_llamadas;
        res.json(cantidadLlamadas)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Octumbrellamada = async(req,res) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-10-01'AND '2023-10-31'")
        const cantidadLlamadas = row[0].cantidad_llamadas;
        res.json(cantidadLlamadas)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error octumbre"})
    }
}
export const Noviembrellamada = async(req,res) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-11-01'AND '2023-11-30'")
        const cantidadLlamadas = row[0].cantidad_llamadas;
        res.json(cantidadLlamadas)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Diciembrellamada = async(req,res) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-12-01'AND '2023-12-31'")
        const cantidadLlamadas = row[0].cantidad_llamadas;
        res.json(cantidadLlamadas)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}