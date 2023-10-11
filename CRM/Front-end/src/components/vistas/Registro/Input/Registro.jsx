import React, { useState } from "react";
import {
  Contenedor,
  Contenedor2,
  Titulo,
  Contenedor1,
  Input,
  Boton,
  Checkbox,
  TextoCheckbox,
  Seleccionar,
  TextoImput,
  ContaienrBoton,
} from "./styled"; // Importa tus estilos desde el archivo "styled"
import Axios from "axios";
import validator from "validator";
import VentanaModal1 from "../../../modales/mensajeRegistro";
import UserExiste from "../../../modales/mensajeRegistroYaExiste";
import swal from "sweetalert";
import "../../../../App.css";

const Registrarse = () => {
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [correoExistente, setCorreoExistente] = useState(false);
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estadoModal4, cambiarEstadoModal4] = useState(false);
  const [emailValid, setEmailValid] = useState(true); // Estado para rastrear la validez del correo
  const [buttonClicked, setButtonClicked] = useState(false); // Estado para rastrear si se hizo clic en el botón
  const [mostrarAlertaCorreo, setMostrarAlertaCorreo] = useState(false); // Estado para mostrar el mensaje de alerta en el correo

  const VentanaModal = () => {
    cambiarEstadoModal1(!estadoModal1);
  };

  const VentanaModal4 = () => {
    cambiarEstadoModal4(!estadoModal4);
  };

  const Validacion = (e) => {
    let emai = e.target.value;

    if (validator.isEmail(emai)) {
      setEmailValid(true); // El correo es válido
      setEmail(emai);
      setMostrarAlertaCorreo(false); // Ocultar el mensaje de alerta
    } else {
      setEmailValid(false); // El correo no es válido
      setMostrarAlertaCorreo(true); // Mostrar el mensaje de alerta
    }
  };

  const Registro = (ev) => {
    ev.preventDefault();
    setButtonClicked(true); // Se hizo clic en el botón
    if (emailValid && password && nombre && empresa) {
      Axios.post(`${process.env.REACT_APP_URL_BACKEND}/users`, {
        correo: email,
        contraseña: password,
        nombreUsuario: nombre,
        nombreEmpresa: empresa,
      })
        .then((response) => {
            // VentanaModal4()
            VentanaModal()
        })
        .catch((error) => {
          console.clear() //quita en la consola el error por el status 400
          if (error.response.status === 400) {
            // VentanaModal()
            VentanaModal4()
            setCorreoExistente(true);
          }else{
            swal({
              title: "Error",
              text: "Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.",
              icon: "error",
            });
          }
          
        });
    } else {
      swal({
        title: "Ingresa información en los campos",
        text: "Por favor, revisa que todos los datos estén bien",
        icon: "error",
      });
    }
  };

  return (
    <>
      <Contenedor>
        <Contenedor2>
          <Titulo>
            <h2 style={{ fontWeight: "500", fontStyle: "italic" }}>
              Sign up for Vyhon
            </h2>
          </Titulo>

          <Contenedor1 style={{ marginTop: "20px" }}>
            <TextoImput>
              <h3 style={{ margin: "0", fontWeight: "500" }}>
                ¿What's your name?
              </h3>
            </TextoImput>
            <Input
              onKeyPress={(event) => {
                const inputValue = event.key;
                const regex = /[a-zA-Z]/;
                if (!regex.test(inputValue)) {
                  event.preventDefault();
                }
              }}
              onChange={(event) => {
                setNombre(event.target.value);
              }}
              type="text"
           
            ></Input>
          </Contenedor1>

          <Contenedor1>
            <TextoImput>
              <h3 style={{ margin: "0", fontWeight: "500" }}>
                ¿What company you work for?
              </h3>
            </TextoImput>
            <Input
              onKeyPress={(event) => {
                const inputValue = event.key;
                const regex = /[a-zA-Z0-9&]/;
                if (!regex.test(inputValue)) {
                  event.preventDefault();
                }
              }}
              onChange={(event) => {
                setEmpresa(event.target.value);
              }}
              type="text"
              required
            ></Input>
          </Contenedor1>

          <Contenedor1>
            <TextoImput>
              <h3 style={{ margin: "0", fontWeight: "500" }}>
                ¿What is your email?
              </h3>
            </TextoImput>
            <Input
              onKeyPress={(event) => {
                const inputValue = event.key;
                const regex = /[_.@a-zA-Z0-9&]/;
                if (!regex.test(inputValue)) {
                  event.preventDefault();
                }
              }}
              onChange={(e) => Validacion(e)}
              type="email"
              required
              className={!emailValid && buttonClicked ? "invalid-email" : ""}
            ></Input>
            {mostrarAlertaCorreo && (
              <div style={{color:"red"}} className="alert alert-danger" role="alert">
                ingrese todos los carracteres 
              </div>
            )}
            {correoExistente && (
              <span
                style={{
                  fontWeight: "bold",
                  color: "green",
                }}
              >
                {email}
              </span>
            )}
          </Contenedor1>

          <Contenedor1>
            <TextoImput>
              <h3 style={{ margin: "0", fontWeight: "500" }}>
                Create a password for your account
              </h3>
            </TextoImput>
            <Input
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
              required
            ></Input>
          </Contenedor1>

          <Checkbox>
            <Seleccionar type="checkbox" required></Seleccionar>
            <TextoCheckbox>
              I agree with the terms of use of the software and know
              <br />
              the privacy policy
            </TextoCheckbox>
          </Checkbox>

          <ContaienrBoton>
            <Boton type="submit" onClick={Registro}>
              Create Account
            </Boton>
          </ContaienrBoton>
        </Contenedor2>
      </Contenedor>
      <VentanaModal1
        estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
      ></VentanaModal1>
      <UserExiste
        estado={estadoModal4}
        cambiarEstado={cambiarEstadoModal4}
      ></UserExiste>
    </>
  );
};

export default Registrarse;
