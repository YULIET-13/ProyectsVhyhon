import React, { useState , useEffect } from "react";
import { InputInfor, Caja, Select1 } from "./styled";
import { Container, ContenedorModal, Header, Body, Boton } from "../../vistas/markenting/llamadaAudioModal/styled";
import { GrClose } from "react-icons/gr";
import axios from "axios";
import swal from "sweetalert";

function DatosPerfil({ estado, cambiarEstado,userData }) {

  const [tipoDocumentoSelect, setTipoDocumentoSelect] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [contacto, setContacto] = useState("");
  const [lugarResidencia, setLugarResidencia] = useState("");
  const [sexoSelect, setSexoSelect] = useState("");
  // Obten la fecha actual en formato "YYYY-MM-DD"
  const fechaActual = new Date().toISOString().split("T")[0];

  const [genero, setGenero] = useState([]);
  const [tipoDocumeto, setTipoDocumeto] = useState([]);

 
  const fetchGenero = async () => {
   
    const token = localStorage.getItem('user')
    const tokensincomillas = token.replace(/"/g,"")
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/genero`,{
        headers:{
          Authorization: `${tokensincomillas}`
        }
      })
      setGenero(response.data);
    } catch (error) {
      console.error("Error al obtener sexo:", error);
    }
  };

  useEffect(() => {
    fetchGenero();
  }, []);

  const fetchDocumeto = async () => {
    const token = localStorage.getItem('user')
    const tokensincomillas = token.replace(/"/g,"")
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/tipoDocumeto`,{
        headers:{
          Authorization:`${tokensincomillas}`
        }
      });
      setTipoDocumeto(response.data);
    } catch (error) {
      console.error("Error al obtener tipo de documento:", error);
    }
  };

  useEffect(() => {
    fetchDocumeto();
  }, []);


  const GuardarDatosPerfil = async () => {

    if (identificacion&&fechaNacimiento&&nacionalidad&&contacto&&lugarResidencia) {
      const elergirTipoDocumento = tipoDocumeto.find((n) => n.id_personal === parseInt(tipoDocumentoSelect));
      const elergirGenero = genero.find((n) => n.id_sexo === parseInt(sexoSelect));

      if (!elergirTipoDocumento) {
        swal({
          title: "El tipo de documneto no es valido",
          text: "Porfavor seleccionar tipo de documento",
          icon: "warning",
        });
      }
      if (!elergirGenero) {
        swal({
          title: "El genero no es valido",
          text: "Porfavor seleccionar gereno",
          icon: "warning",
        });
      }
    
    try {
      const token = localStorage.getItem('user')
      const tokensincomillas = token.replace(/"/g,"")
      await axios.post(
        `${process.env.REACT_APP_URL_BACKEND}/datosPerfil/${userData.idRegistro}`,
        {
          identificacion: identificacion,
          tipo_documento : tipoDocumentoSelect,
          fechaNacimiento : fechaNacimiento,
          nacionalidad : nacionalidad,
          Telefono: contacto,
          lugarResidencia : lugarResidencia,
          sexo : sexoSelect,
        },{
          headers:{
            Authorization:` ${tokensincomillas}`
          }
        }
      );
      setTimeout(() => {

        window.location.href = "/perfilusuario"
    }, 0);
   // Manejar la respuesta del servidor
    } catch (error) {
      console.error(error);
      console.error("Hubo un error al enviar los datos:", error);
    }
  }else {
    swal({
      text: "Porfavor llenar todo",
      icon: "error",
    });
  }
  };


  return (
    <>
      {estado && (
        <Container>
          <ContenedorModal>
            <Header>
              <h1>Agregar informacion personal</h1>
              <GrClose
                onClick={() => cambiarEstado(false)}
                style={{ marginRight: "30px", color: "red", fontSize: "20px" }}
              ></GrClose>
            </Header>
            <Body>
              <Caja>
              <fieldset className="Cajafieldset">
                  <legend>Fecha de nacimiento</legend>
                  <InputInfor className="InputFecha" type="date" max={fechaActual} onChange={(e) => setFechaNacimiento(e.target.value)}></InputInfor>
                </fieldset>
              <Select1 value={tipoDocumentoSelect} onChange={(e) => setTipoDocumentoSelect(e.target.value)}>
                <option value=''>tipo documento</option>
                {tipoDocumeto.map((documento) => (
                  <option key={documento.id_personal} value={documento.id_personal}>
                    {documento.tipo_documento}
                    </option>
                ))}
                </Select1>
                  <InputInfor placeholder="Ingresar Identificacion" onKeyPress={(event) => {
              const inputValue = event.key;
              const regex = /[0-9]/;
              if (!regex.test(inputValue)) {
                event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
              }
            }} onChange={(e) => setIdentificacion(e.target.value)}></InputInfor>
                  <InputInfor placeholder="Ingresar nacionalidad"onKeyPress={(event) => {
              const inputValue = event.key;
              const regex = /[a-zA-ZÑñ]/;
              if (!regex.test(inputValue)) {
                event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
              }
            }}  onChange={(e) => setNacionalidad(e.target.value)} ></InputInfor>
                  <InputInfor placeholder="Ingresar contacto" onKeyPress={(event) => {
              const inputValue = event.key;
              const regex = /[0-9]/;
              if (!regex.test(inputValue)) {
                event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
              }
            }} onChange={(e) => setContacto(e.target.value)}></InputInfor>
                  <InputInfor placeholder="Ingresar lugar de residencia"onKeyPress={(event) => {
              const inputValue = event.key;
              const regex = /[a-zA-ZÑñ ]/;
              if (!regex.test(inputValue)) {
                event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
              }
            }}  onChange={(e) => setLugarResidencia(e.target.value)}></InputInfor>
                <Select1 value={sexoSelect}
                onChange={(e) => setSexoSelect(e.target.value)}>
                  <option value=''>sexo</option>
                  {genero.map((genero) => (
                    <option key={genero.id_sexo} value={genero.id_sexo}>
                      {genero.sexo}
                    </option>
                  ))}
                </Select1>
              </Caja>
            </Body>
            <Boton onClick={GuardarDatosPerfil}>Agregar</Boton>
          </ContenedorModal>
        </Container>
      )}
    </>
  )
}
export default DatosPerfil;