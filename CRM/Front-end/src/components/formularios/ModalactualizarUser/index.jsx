import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  ContenedorModal,
  Encabezado,
  Contenido,
  Input1,
  Boton,
  ContainerFoto,
  Foto,
  ContainerInput,
  Texto,
} from "./styled";
import { GrClose } from "react-icons/gr";
import IPerfil from "../../img/perfil.jpg";
import Axios from "axios";

const UserEditar = ({ status, changeStatus, userData, onUserUpdate }) => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const emailInputRef = useRef(null);
  // const [token, setToken] = useState("");


  useEffect(() => {
    if (userData) {
      setNombreUsuario(userData.username);
      setNombreEmpresa(userData.nombreEmpresa);
      setCorreo(userData.email);
      setContraseña(userData.password);
    }
  }, [userData]);



  const updateUser = async () => {
    // Verificar si el correo es válido antes de guardar los datos
    if (!emailInputRef.current.validity.valid) {
      alert("El correo ingresado no es válido.");

    } else{
      const updatedUserData = {
        ...userData,
        nombreUsuario,
        nombreEmpresa,
        correo,
        contraseña
      };
      localStorage.setItem("user", JSON.stringify(updatedUserData));
    }
    try {
    
       await Axios.patch(
        `${process.env.REACT_APP_URL_BACKEND}/users/${userData.idRegistro}`,
        {
          nombreUsuario: nombreUsuario,
          nombreEmpresa: nombreEmpresa,
          correo: correo,
          contraseña: contraseña,
        },
        
      );

      // Actualiza los datos en el localStorage después de una actualización exitosa
      // setToken(res.data.token)
      
      if(onUserUpdate){
        onUserUpdate();
      }
    } catch (error) {
      console.error(error, "no actualiza");
    }
    // setTimeout(()=>{
    //   window.location.href = "/perfilusuario";
    // },1000)

  };

  return (
    <>
      {status && (
        <Container>
          <ContenedorModal>
            <Encabezado>
              <h1>Change personal data</h1>
              <GrClose
                style={{ marginRight: "30px", color: "red", fontSize: "20px" }}
                onClick={() => changeStatus(false)}
              />
            </Encabezado>
            <Contenido>
              <ContainerFoto>
                <Foto src={IPerfil}></Foto>
              </ContainerFoto>
              <ContainerInput>
                <Texto>name</Texto>
                <Input1
                  value={nombreUsuario}
                  onKeyPress={(event) => {
                    const inputValue = event.key;
                    const regex = /[a-zA-Z ]/;
                    if (!regex.test(inputValue)) {
                      event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
                    }
                  }}
                  onChange={(e) =>
                    setNombreUsuario(
                      e.target.value.replace(/[^a-zA-Z0-9]/g, "")
                    )
                  }
                />

                <Texto>Empresa</Texto>
                <Input1
                  value={nombreEmpresa}
                  onKeyPress={(event) => {
                    const inputValue = event.key;
                    const regex = /[a-zA-Z0-9& ]/;
                    if (!regex.test(inputValue)) {
                      event.preventDefault(); 
                    }
                  }}
                  onChange={(e) => setNombreEmpresa(e.target.value)}
                />

                <Texto>Correo</Texto>
                <Input1
                  type="email"
                  ref={emailInputRef}
                  value={correo}
                  onKeyPress={(event) => {
                    const inputValue = event.key;
                    const regex = /[_.@a-zA-Z0-9]/;
                    if (!regex.test(inputValue)) {
                      event.preventDefault(); 
                    }
                  }}
                  onChange={(e) => setCorreo(e.target.value)}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <Texto>password</Texto>
                <Input1
                  type="password"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                />
              </ContainerInput>
            </Contenido>
            <Boton onClick={updateUser}>Edit</Boton>
          </ContenedorModal>
        </Container>
      )}
    </>
  );
};

export default UserEditar;