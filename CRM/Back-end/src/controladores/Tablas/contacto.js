import { pool } from "../../db.js";



export const getTablaContacto = async(req, res) => {
    try{
        const [rows]=await  pool.query('SELECT contacto.idContacto, contacto.nombreContacto, contacto.cargo,contacto.telefono, contacto.correo, contacto.nombreContacto, empresa.nombreEmpresa  FROM contacto INNER JOIN empresa ON contacto.contactoEmpresa = empresa.idEmpresa WHERE contacto.estado = "activo" ')

        res.json(rows)
}catch(error){
    console.error(error)
    return res.status(500).json({ message: "Algo anda mal" });
}
}

export const updatetablaContacto = async (req, res) => {
    try {
        const {nombreContacto, cargo, telefono, correo, contactoEmpresa} = req.body;
        const {idContacto}=req.params;
        const updateData = await pool.query(
            'UPDATE contacto SET nombreContacto = IFNULL(?, nombreContacto), cargo = IFNULL(?,cargo), telefono = IFNULL(?,telefono), correo = IFNULL(?,correo), contactoEmpresa = IFNULL(?,contactoEmpresa) WHERE idContacto = ?',
            [nombreContacto, cargo, telefono, correo, contactoEmpresa, idContacto]
            );
        
            res.status(200).json({ message: 'Actualizada' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'error al actualizar' });
        }
    };

// export const deleteTablaContacto = async (req, res) => {
//     try {
//         const [row] = await pool.query('DELETE FROM contacto where idContacto = ?', [req.params.idContacto]);
//         res.status(200).json({message:' registro eliminado'})
//     }catch (error){
//         res.status(500).json({message:'No se pudo eliminar el registro'})
//     }
// }
export const desactivarTablaContacto = async (req, res) => {
    try {
      const [row] = await pool.query('UPDATE contacto SET estado = ? WHERE idContacto = ?', ['desactivado', req.params.idContacto]);
      res.status(200).json({ message: 'Registro desactivado' });
    } catch (error) {
      res.status(500).json({ message: 'No se pudo desactivar el registro' });
    }
  }