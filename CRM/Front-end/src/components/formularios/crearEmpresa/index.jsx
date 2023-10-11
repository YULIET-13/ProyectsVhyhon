import React, { useState, useEffect } from "react";
import {
  Div1,
  Container1,
  Caja,
  Parrafo,
  Img,
  Parrafo1,
  Caja1,
  Input,
  Caja2,
  Boton1,
  Boton2,
  Area,
  SelectEmpresa,
} from "./styled.jsx";
import imagen from "../../img/img_x.webp";
import axios from "axios";
import swal from "sweetalert";


function Retorno8() {
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [selectedSegmento, setSelectedSegmento] = useState(""); // Estado para el segmento seleccionado
  const [url, setUrl] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [segmento, setSegmento] = useState([]);
 
  const fetchSegmentos = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/segmento`);
      setSegmento(response.data);
    } catch (error) {
      console.error("Error al obtener segmentos:", error);
    }
  };

  useEffect(() => {
    fetchSegmentos();
  }, []);

  const [cerrar, setCerrar] = useState(true); // Estado para controlar la visibilidad del componente Retorno8

  // Función para cerrar el componente al hacer clic en la imagen
  const cerrarcomponente = () => {
    setCerrar(false);
  };

  // Si cerrar es falso, no se renderiza el componente
  if (!cerrar) {
    return null;
  }

  // Función para crear una empresa
  const createEmpresa = async () => {
    /* e.preventDefault(); */

    if (nombreEmpresa && url && descripcion) {
      const elegirSegmento = segmento.find((n) => n.idSegmento === parseInt(selectedSegmento)
      );
      if (!elegirSegmento) {
        swal({
          title: "El segmento selecionado no es valido",
          text: "Porfavor seleccionar segmento",
          icon: "warning",
        });
        return;
      }
      const token = localStorage.getItem('user')
      const tokensincomillas = token.replace(/"/g,"")
      console.log(tokensincomillas,"❤️❤️❤️");
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_URL_BACKEND}/company`,
          {
            nombreEmpresa: nombreEmpresa,
            segmento: selectedSegmento, // Usando el valor seleccionado
            url: url,
            descripcion: descripcion,
          },{
            headers:{
              Authorization:`${tokensincomillas}`,
            }
           }
       
        );
        setTimeout(() => {

            window.location.href = "/empresas"
        }, 0);
        console.log("Empresa creada:", response.data);
      } catch (error) {
        console.log("Error al crear empresa:", error);
      }
    } else {
      swal({
        text: "Porfavor llenar todo",
        icon: "error",
      });
    }
  };

  return (
    <Div1>
      <Container1>
        {/* Sección de encabezado */}
        <Caja>
          <Parrafo>
            <h3>create company</h3>
          </Parrafo>
          <Img src={imagen} alt="img" onClick={cerrarcomponente} />
        </Caja>
        <hr />
        {/* Formulario para crear una empresa */}
        <Caja1>
          <Parrafo1>
            <h3>Company name</h3>
          </Parrafo1>
          <Input
            placeholder="Enter the company name"
            onKeyPress={(event) => {
              const inputValue = event.key;
              const regex = /[a-zA-ZñÑ0-9& ]/;
              if (!regex.test(inputValue)) {
                event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
              }
            }}
            onChange={(e) => setNombreEmpresa(e.target.value)}
          />

          <Parrafo1>
            <h3> Segment </h3>
          </Parrafo1>
          <SelectEmpresa
            value={selectedSegmento}
            onChange={(e) => setSelectedSegmento(e.target.value)}
          >
            <option value="">Seleccionar segmento...</option>
            {segmento.map((segmento) => (
              <option key={segmento.idSegmento} value={segmento.idSegmento}>
                {segmento.segmento}
              </option>
            ))}
          </SelectEmpresa>

          <Parrafo1>
            <h3>URL</h3>
          </Parrafo1>
          <Input
            placeholder="Enter the company web address"
            onChange={(e) => setUrl(e.target.value)}
          />

          <Parrafo1>
            <h3>Summary</h3>
          </Parrafo1>
          <Area
            placeholder="Describe the company"
            onKeyPress={(event) => {
              const inputValue = event.key;
              const regex = /[a-zA-ZñÑ0-9 ]/;
              if (!regex.test(inputValue)) {
                event.preventDefault();
              }
            }}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Caja1>
        <hr />
        <Caja2>
          <Boton2 onClick={cerrarcomponente}>Cancel</Boton2>
          <Boton1
          onClick={createEmpresa}
          >
            Create company
          </Boton1>
        </Caja2>
      </Container1>
    </Div1>
  );
}

export default Retorno8;
