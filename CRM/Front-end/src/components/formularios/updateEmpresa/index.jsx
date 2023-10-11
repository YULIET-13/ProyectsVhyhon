import React, { useState, useEffect} from "react";
import {Div1,Container1,Caja,Parrafo,Img,Parrafo1,Caja1,Input,Caja2,Boton1,Boton2,Area,SelectEmpresa} from "./styled.jsx";
import imagen from "../../img/img_x.webp";
import Axios from "axios";

function EmpresaUpdate({ empresa }) {
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [cerrar, setCerrar] = useState(true);
  const [selectSegmento, setSelectSegmento] = useState(""); // Estado para el segmento seleccionado
  const [url, setUrl] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [segmentos, setSegmentos] = useState([]); // Estado para almacenar todos los segmentos disponibles

    useEffect(() =>{
      // Función para obtener los segmentos desde la base de datos
    const fetchSegmentos = async () => {
      const token = localStorage.getItem('user')
      const tokensincomillas = token.replace(/"/g,"")
      try {
          const response = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/segmento`,{
              headers: {Authorization: `${tokensincomillas}`},
          });
          setSegmentos(response.data);
      } catch (error) {
      }
    };

    fetchSegmentos();
  }, []);


  useEffect(() => {
    
    if (empresa) {
      // Verifica si hay una empresa para editar
      setNombreEmpresa(empresa.nombreEmpresa);
      setSelectSegmento(setSegmentos.segmento); // Establece el segmento seleccionado de la empresa
      setUrl(empresa.url);
      setDescripcion(empresa.descripcion);
    }
  }, [empresa]);


  // Función para cerrar el componente al hacer clic en la imagen
  const cerrarComponente = () => {
    setCerrar(false);
    setTimeout(() => {
      window.location.href = "/empresas";
    }, 1000)
  };

  // Si cerrar es falso, no se renderiza el componente
  if (!cerrar) {
    return true;
  }

  const actualizarEmpresa = async () => {
    try {
      const token = localStorage.getItem('user')
      const tokensincomillas = token.replace(/"/g,"")
      const res = await Axios.patch(
        `${process.env.REACT_APP_URL_BACKEND}/companytabla/${empresa.idEmpresa}`,
        {
          nombreEmpresa,
          segmento: selectSegmento, // Utiliza el segmento seleccionado
          url,
          descripcion,
        },{
          headers:{ Authorization:`${tokensincomillas}`}
        }
      );
      console.log("Empresa actualizada.", res.data);
      setTimeout(() => {
        window.location.href = "/empresas";
      }, 1000);
    } catch (error) {
    }
    
  };

  return (
    <Div1>
      <Container1>
        {/* Sección de encabezado */}
        <Caja>
          <Parrafo>
            <h3>Update company</h3>
          </Parrafo>
          <Img src={imagen} alt="img" onClick={cerrarComponente} />
        </Caja>
        <hr />
        {/* Formulario para crear una empresa */}
        <Caja1>
          <Parrafo1>
            <h3>Company name</h3>
          </Parrafo1>
          <Input
            placeholder="Enter the company name"
            onChange={(e) => setNombreEmpresa(e.target.value)}
            value={nombreEmpresa}
          />

          <Parrafo1>
            <h3>Segment</h3>
          </Parrafo1>
          <SelectEmpresa
            value={selectSegmento}
            onChange={(e) => setSelectSegmento(e.target.value)}
          >
            <option value="">Seleccionar segmento...</option>
            {segmentos.map((segmento) => (
              <option
                key={segmento.idSegmento}
                value={segmento.idSegmento}
              >
                {segmento.segmento}
              </option>
            ))}
          </SelectEmpresa>

          <Parrafo1>
            <h3>URL</h3>
          </Parrafo1>
          <Input
            value={url}
            placeholder="Enter the company's web address."
            onChange={(e) => setUrl(e.target.value)}
          />

          <Parrafo1>
            <h3>Summary</h3>
          </Parrafo1>
          <Area
            value={descripcion}
            placeholder="Describe the company"
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Caja1>
        <hr />
        <Caja2>
          <Boton2 onClick={cerrarComponente}>Cancel</Boton2>
          <Boton1 onClick={actualizarEmpresa}>Update</Boton1>
        </Caja2>
      </Container1>
    </Div1>
  );
}

export default EmpresaUpdate;