import React, { useState } from "react";
import {Fondo,Contenedor,Titulo,Parrafo,Input,Button,Olvidar,ContainerUltimo,Message} from "./styled";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../../../App.css"

function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [errorCorreo,setErrorCorreo ] = useState(null);
  const [errorContraseña,setErrorContraseña ] = useState(null);
  const Login = (ev) => {
    ev.preventDefault();
    setError(null);
    setErrorContraseña(null);
    setErrorCorreo(null);
    if (email && password) {
    
      Axios.post(`${process.env.REACT_APP_URL_BACKEND}/login`, {
        correo: email,
        contraseña: password,
      })
        .then((response) => {
          const result = response.data
          if (response.data === "") {
            alert("Bienvenido VYHON");
          } else {
            localStorage.setItem("user", JSON?.stringify(result));
            setTimeout(() => {
              window.location.href = "/vistaprincipal";
            
            }, 1000)
          }
        })
        .catch((error) => {
          console.error(error);
          // alert("Error en la solicitud");
          alert("el usuario no existe");
        });
    } else
      if (!email && !password) {
      setError(`ingrese tanto el usuario como la contraseña`);
    }else
    if(!email) {
      setErrorCorreo(`ingresar correo`);
    } else 
    if (!password){
      setErrorContraseña(`ingresar contraseña`);
    }
  };

  return (
        <Fondo>
          <Contenedor>
            <Titulo>!Welcome to VYHON!</Titulo>
            <Message>{error}</Message>

            <Parrafo>
              <h4 style={{ margin: "0" }}>Email</h4>
            </Parrafo>

            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            ></Input>
            <Message>{errorCorreo}</Message>

            <Parrafo>
              <h4 style={{ margin: "0" }}>password</h4>
            </Parrafo>

            <Input
              type="Password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            ></Input>
            <Message>{errorContraseña}</Message>

            <ContainerUltimo>
              <Button type="submit" onClick={Login}>
                Log in 
              </Button>
              <Link to={"/recuperar"} style={{ color: "white" }}>
                <Olvidar >
                  <h4 style={{ margin: "0" }}>Did you forget your password?</h4>
                </Olvidar>
              </Link>
              <Link to={"/registrarse"} style={{ color: "white" }}>
                <Olvidar>
                  <h4 style={{ color: "white", margin: "0" }}>
                  Sign up
                  </h4>                  
                </Olvidar>
              </Link>
            </ContainerUltimo>
          </Contenedor>
        </Fondo>

)
}
      export default Login;
