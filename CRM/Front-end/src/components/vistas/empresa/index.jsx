import React , { useState , useEffect } from "react";
import {  Container , Parrafo , Boton } from "./styled";
import imagen from "../../img/imgenempresa.jpg"
import TablaEmpresa from "../../tablas/tablaEmpresa";
import Axios from "axios";
import Retorno8 from "../../formularios/crearEmpresa";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";


function Retorno7() {
    const [active, setActive] = useState(false); // Estado para controlar la visualización del componente Retorno8
    const [empresa, setEmpresa]= useState([])

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


    const Getempresa = async() =>{
        const token = localStorage.getItem('user')
        const tokensincomillas = token.replace(/"/g,"")
        const empresas = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/companytabla`
            ,{      
                headers:{
                  Authorization: tokensincomillas
                }
            }
        );
        setEmpresa (empresas.data)
    }

    useEffect(() => {
        Getempresa();
        }, [setEmpresa])


    return (
        <>
        {loading ? (
            <>
            <h1>cargando.....</h1>
            </>
        ):(
        <>
        {empresa.length <= 0 ? (
            <>
                <Container>
                      {/* Muestra una imagen */}
                    <img src={imagen} alt="img" style={{width:'400px',height:'355px', marginTop: "30px"}} />
                    <h3>Crea empresas</h3>
                    <Parrafo>Mantén el historial de todos los negocios con tu base de empresas.</Parrafo>
                    <Boton onClick={() => setActive(!active)}>Crear empresa</Boton>
                      {/* Muestra el componente Retorno8 si 'active' es true */}
                    {active && <Retorno8></Retorno8>}
                </Container>
            </>
        ) : (
            <>
                <TablaEmpresa/>
            </>
        )}
            
        </>
        )}
        </>
)};
export default Retorno7;   