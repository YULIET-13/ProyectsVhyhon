import React, { useState, useEffect } from "react";
import {
  Container,
  Principal,
  Caja1,
  Parrafo,
  Img,
  Caja2,
  Parrafo1,
  Input,
  Select,
  Caja3,
  Boton1,
  Boton2,
} from "./styled.jsx";
import imagen from "../../img/img_x.webp";
import Axios from "axios";

function NegocioUpdate({ negocio }) {
  const [nombreNegocio, setNombreNegocio] = useState("");
  const [etapas, setEtapas] = useState("");
  const [fuente, setFuente] = useState("");
  const [selectEmpresa, setSelectEmpresa] = useState("");
  const [selectContacto, setSelectContacto] = useState("");
  const [cerrar, setCerrar] = useState(true);
  const [empresa, setEmpresa] = useState([]); 
  const [contacto, setContacto] = useState([]); 


  useEffect(() => {
    // Función para obtener empresas desde la base de datos
    const fetchEmpresas = async () => {
      const token = localStorage.getItem('user')
      const tokensincomillas = token.replace(/"/g,"")
        try {
            const response = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/company`,{
              headers:{
                Authorization: `${tokensincomillas}`
              }
            });
            setEmpresa(response.data);
        } catch (error) {
            console.error("Error al obtener empresas:", error);
        }
    };

    // Función para obtener contactos desde la base de datos
    const fetchContactos = async () => {
      const token = localStorage.getItem('user')
      const tokensincomillas = token.replace(/"/g,"")
        try {
            const response = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/contacto`,{
              headers:{
                Authorization: `${tokensincomillas}`,
              }
            });
            setContacto(response.data);
        } catch (error) {
            console.error("Error al obtener contactos:", error);
        }
    };

    fetchEmpresas();
    fetchContactos();
}, []);


  useEffect(() => {
    if (negocio) {
      // Verifica si hay un negocio para editar
      setNombreNegocio(negocio.nombreNegocio);
      setEtapas(negocio.etapas);
      setFuente(negocio.fuente);
      setSelectEmpresa(setEmpresa.idEmpresa);
      setSelectContacto(setContacto.idContacto); 
    }
  }, [negocio]);

  const cerrarComponente = () => {
    setCerrar(false);
    setTimeout(() => {
      window.location.href = "/negocios";
    }, 1000)

  };

  if (!cerrar) {
    return null;
  }

  const actualizarNegocio = async () => {
    try {
      const token = localStorage.getItem('user')
      const tokensincomillas = token.replace(/"/g,"")
      const res = await Axios.patch(
        `${process.env.REACT_APP_URL_BACKEND}/negociotabla/${negocio.idNegocio}`,
        {
          nombreNegocio,
          etapas,
          fuente,
          empresa:selectEmpresa ,
          contacto:selectContacto,
        },{
          headers:{
            authorization:`${tokensincomillas}`
          }
        }
      );
      console.log("Negocio actualizado.", res.data);
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      window.location.href = "/negocios";
    }, 1000);
  };

  return (
    <div>
      <Container>
        <Principal>
          <Caja1>
            <Parrafo>
              <h3>Update Business</h3>
            </Parrafo>
            <Img src={imagen} alt="img" onClick={cerrarComponente} />
          </Caja1>
          <hr />
          <Caja2>
            <Parrafo1>
              <h3>Nombre del negocio</h3>
            </Parrafo1>
            <Input
              value={nombreNegocio}
              onChange={(e) => setNombreNegocio(e.target.value)}
            />
            <Parrafo1>
              <h3>Etapa del embudo</h3>
            </Parrafo1>
            <Input
              value={etapas}
              onChange={(e) => setEtapas(e.target.value)}
              placeholder="Ingresar la etapa del embudo"
            />
            <Parrafo1>
              <h3>Fuente</h3>
            </Parrafo1>
            <Input
              value={fuente}
              onChange={(e) => setFuente(e.target.value)}
              placeholder="Ingresar la fuente"
            />
            <Parrafo1>
              <h3>Campaña</h3>
            </Parrafo1>
            <Select
              value={selectEmpresa}
              onChange={(e) => setSelectEmpresa(e.target.value)}
            >
              <option value=''>Selecionar campaña</option>
              {empresa.map((empresa) => (
                <option key={empresa.idEmpresa} value={empresa.idEmpresa}>
                  {empresa.nombreEmpresa}
                </option>
              ))}
            </Select>
            <Parrafo1 style={{ color: "gray", marginTop: "8%" }}></Parrafo1>
            <Parrafo1>
              <h3>Contacto</h3>
            </Parrafo1>
            <Select
              value={selectContacto}
              onChange={(e) => setSelectContacto(e.target.value)}
            >
              <option value="">Seleccionar contacto...</option>
              {contacto.map((contacto) => (
                <option key={contacto.idContacto} value={contacto.idContacto}>
                  {contacto.nombreContacto}
                </option>
              ))}
            </Select>
          </Caja2>
          <hr />
          <Caja3>
            <Boton1 onClick={actualizarNegocio}>Actualizar</Boton1>
            <Boton2 onClick={cerrarComponente}>Cancelar</Boton2>
          </Caja3>
        </Principal>
      </Container>
    </div>
  );
}

export default NegocioUpdate;