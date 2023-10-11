import React from "react";
import { Fondo,Contenedor,Titulo, Parrafo , ConteinerBonton , Boton1, Boton2 , Input,  } from "./styled";
import { Link } from "react-router-dom";
import VentanaModal2 from "../../modales/mensajeRecuperarContraseña"
import VentanaModal3 from "../../modales/mensajeContraseñaCorreo";
import { useState } from "react";   
import Axios from "axios";
import "../../../App.css"

function Recuperar  () {

    const [email,setEmail]=useState("")

    const[estadoModal2, cambiarEstadoModal2] = useState(false)

    const VentanaModal = () =>{
        cambiarEstadoModal2(!estadoModal2)
    }

    const[estadoModal3, cambiarEstadoModal3] = useState(false)

    const VentanaModalNoencontrado = () =>{
        cambiarEstadoModal3(!estadoModal3)
    }



    const cuentaRecuperada = () => {
        if (email) {
            Axios.post(`${process.env.REACT_APP_URL_BACKEND}/user`, {
                correo: email
            })
            .then((response) => {
                if (response.data.message === "correo_existe") {
                    VentanaModal();
                } else {
                    VentanaModalNoencontrado();
                }
            })
            .catch((error) => {
                console.log(error);
            });
        } else {
            alert('Por favor, ingrese su correo para poder encontrar su cuenta');
        }
    }


    return(
        <Fondo>
            <Contenedor>
            <Titulo>recover account</Titulo>
            <Parrafo>We kindly request that you provide your email address in order to conduct your account search.</Parrafo>

            <Input  type="email" placeholder ="enter email "  onChange={(e)=> setEmail(e.target.value)} ></Input>
            <ConteinerBonton>
                <Boton1 onClick={cuentaRecuperada}>Look for</Boton1>
                <Link to={"/"} style={{width:"35%", height:"30%"}}><Boton2>Cancel</Boton2></Link>
            </ConteinerBonton>
            </Contenedor>
            <VentanaModal2
            estado1={estadoModal2}
            cambiarEstado1 = {cambiarEstadoModal2}
            >

            </VentanaModal2>

            <VentanaModal3
            estado3={estadoModal3}
            cambiarEstado3 = {cambiarEstadoModal3}
            >
            </VentanaModal3>
        </Fondo>
    )
}
export default Recuperar;