import React, { useState,useEffect } from 'react';
import { Container, Parrafo, Boton } from "./styled";
import imagen from "../../img/contacto.jpg"
import TablaContacto from '../../tablas/tablaContacto';
import Axios from 'axios';
import Retorno4 from "../../formularios/crearContacto"
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";


function Retorno3() {
    const [active, setActive] = useState(false) // Estado para controlar la visibilidad del componente Retorno4
    const [contacto, setContacto] = useState([])

    const [loading, setLoading] = useState(true)

    let navigate = useNavigate();

    useEffect(() => {

        const userToken = localStorage.getItem("user");
        if(userToken){
            try {
            jwt_decode(userToken);
        setLoading(false);
            } catch (error) {
                console.error("Error al decodificar el token:", error);
                navigate('/'); 
            }
        }else{
            navigate('/');
        }
    },[navigate])

    const TablagetContacto = async () => {
        const token = localStorage.getItem('user')
        const tokensincomillas = token.replace(/"/g,"")
        const contactos = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/contactotabla`,{      
            headers:{
              Authorization: tokensincomillas
            }
        });
        setContacto(contactos.data)
    }

    useEffect(() => {
        TablagetContacto();
    }, [setContacto]);

    return (
        <>
        {loading ? (
            <>
            <h1>Cargando......</h1>
            </>
        ):(
        <>
        {contacto.length <= 0 ? (
            <>
            {/* Componente de menú */}
        
                <Container>
                    <img src={imagen} alt="img" style={{ width: '450px', height: '240px', marginTop: "110px"}} />
                    <h2>No hemos encontrado contactos en tu cuenta ni con los filtros <br /> que seleccionaste</h2>
                    <Parrafo> Crear contactos para llevar el registro y los datos de todas las personas <br />con las que negocias. o prueba a cambiar los filtros seleccionados para encontrar <br /> nuevos resultados  </Parrafo>
                    {/* Botón para crear contactos */}
                    <Boton onClick={() => setActive(!active)}>Crear contactos</Boton>                    
                    {/* Renderiza el componente Retorno4 si active es true */}
                    {active && <Retorno4></Retorno4>}
                </Container>
            </>
        ) : (
            <>
                <TablaContacto/>
            </>
        )}
            
    </>
    )}
    </>
    );
}
export default Retorno3;
