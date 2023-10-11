import { pool } from "../../db.js";

export const crearPedidos = async (req, res) => {
  try {
    const { cliente, monto, fecha } = req.body;
    const estado = 'cotizado';
    const [rows] = await pool.query(
      "INSERT INTO pedidos (cliente, monto, fecha, estado) VALUES (?, ?, ?, ?)",
      [cliente, monto, fecha, estado]
    );

    console.log(rows);
    res.send({
      id: rows.insertId,
      cliente: cliente,
      monto: monto,
      fecha: fecha,
      estado: estado,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Algo anda mal" });
  }
};



  export const getPedidos = async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM pedidos');
      res.json(rows);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Algo anda mal" });
    }
  };

export const getPedidosId = async (req, res) => {
    const idPedido = req.params.id;
    try {
        const [row] = await pool.query('SELECT * FROM pedidos WHERE idPedido = ?', [idPedido]);

        res.json(row);
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo segmento por ID' });
    }
};

export const updatePedidos = async (req, res) => {
  try {
      const { estado } = req.body;
      const { id } = req.params;
      const allowedStates = ['cotizado', 'en progreso', 'cancelar', 'realizado'];
      if (!allowedStates.includes(estado)) {
          return res.status(400).json({ message: 'Estado no válido' });
      }

      const updateData = await pool.query(
          'UPDATE pedidos SET estado = ? WHERE idPedido = ?',
          [estado, id]
      );

      res.status(200).json({ message: 'Estado de la tarea actualizado correctamente' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Se detectó un error al actualizar el estado de la tarea' });
  }
};


export const deletePedidos = async (req, res) => {
    try {
        const deletedata = await pool.query('DELETE FROM pedidos WHERE idPedido = ?',
        [req.params.id]);
        res.status(200).json({ message: 'Empresa eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la empresa' });
    }
};