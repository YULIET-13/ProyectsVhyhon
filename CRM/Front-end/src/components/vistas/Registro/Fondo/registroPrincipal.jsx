import React from "react";
import { Fondo, Ladero, Ladero1, Img, Ladero2, Parrafo , Parrafo1, Ingresar } from "./styledRegistro";
import Registrarse from "../Input/Registro";
import Vyhon from "../../../img/logito.svg"
import { useState } from "react";
import VentanaModal1 from ".././../../modales/mensajeRegistro";
import { Link } from "react-router-dom";
import "../../../../App.css"


const Registro = () => {

const[estadoModal, cambiarEstadoModal] = useState(false)

    return (
        <>
        <Fondo>
            <Ladero>
                <Ladero1>
                </Ladero1>
                <Ladero2>
                    <Parrafo><h2 style={{margin:"0"}}>create your account in Vyhon CRM</h2></Parrafo>
                    <Parrafo1>Join us and create your account to enjoy a new and effective way to streamline your processes, improve the profitability of your business and, most importantly, maintain constant communication with your clients. At Vyhon, we are committed to you every step of the way, providing you with solutions that always have your back. Join our community and discover how we can help you achieve your goals!</Parrafo1>
                </Ladero2>
                <Ladero1>
                    <Img src={Vyhon} alt="" />
                    <Parrafo> Take your efficiency to a new level with Vyhon CRM! </Parrafo>
                </Ladero1>

            </Ladero>
                <Registrarse></Registrarse>
                <Registrarse></Registrarse>
                <Link to={"/login"} style={{textDecoration:"none", color:"black"}}><Ingresar>Log in to your account</Ingresar></Link>

            <VentanaModal1 
                estado={estadoModal}
                cambiarEstado = {cambiarEstadoModal}
            />

        </Fondo>
        </>
    )
}
export default Registro