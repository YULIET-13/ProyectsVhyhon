import React from "react";
import { ContainerPrincipal, Heder, ContainerInput, Input, HederTabla , Caja1 , Parrafo, BodyTabla,  ContainerSecundario ,FooterTabla,Boton } from "../tablaEmpresa/styled";
import Axios from "axios";
import { AiOutlineClose , AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"
import { useState, useEffect } from "react";
import Audiollamada from "../../vistas/markenting/llamadaAudioModal/index"

function Tablallamada(){
  const [llamadaAbierta, setLlamadaAbierta] = useState(false);
    const[llamada, setLlamada] = useState([])
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
  const [buscar, setBuscar] = useState("")

    //Inicio, Función de busqueda
    const BarraDeBusqueda = (e) => {
      setBuscar(e.target.value);
     
    };

  let resBusqueda = [];

  if (!buscar) {
  resBusqueda = llamada|| [];
} else {
  resBusqueda = llamada.filter(
      (dato) =>
      (dato.cedula && dato.cedula.toString().toLowerCase().includes(buscar.toLowerCase()))||
      (dato.nombreNegocio&& dato.nombreNegocio.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.nombre&& dato.nombre.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.apellido && dato.apellido.toLowerCase().includes(buscar.toLowerCase()))||
      (dato.telefono && dato.telefono.toString().toLowerCase().includes(buscar.toLowerCase()))||
      (dato.telefonoFijo && dato.telefonoFijo.toString().toLowerCase().includes(buscar.toLowerCase()))||
      (dato.direccion && dato.direccion.toLowerCase().includes(buscar.toLowerCase()))||
      (dato.correo && dato.correo.toLowerCase().includes(buscar.toLowerCase()))||
      (dato.llamadaInicio && dato.llamadaInicio.toLowerCase().includes(buscar.toLowerCase()))||
      (dato.llamadaFinal && dato.llamadaFinal.toLowerCase().includes(buscar.toLowerCase()))||
      (dato.duracionLlamada&& dato.duracionLlamada.toLowerCase().includes(buscar.toLowerCase()))
);
}

const llamadas = async () =>{

    try {
      const token = localStorage.getItem('user')
      const tokensincomillas = token.replace(/"/g,"")
        const registrollamada = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/llamadatabla`,{
          headers:{ Authorization: `${tokensincomillas}`}
        })
        setLlamada(registrollamada.data);
    }
    catch{
        console.log("error de axio en la query");
    }

}
useEffect(() => {
    llamadas();
  }, []);


  //Metodo de filtrado tabla empresa



const Borrar = () =>{
    setBuscar("")
}

return(
    <>
    {loading ? (
        <>
        <h1>cargando.....</h1>
        </>
    ):(
    <>
      <ContainerPrincipal>
        <Heder>
          <h1>call log</h1>
          <ContainerInput>
            <AiOutlineSearch style={{ fontSize: "25px", color: "#4b4848" }} />
            <Input placeholder="Buscar ..."  value={buscar} onChange={BarraDeBusqueda}></Input>
            <AiOutlineClose onClick={Borrar} style={{ fontSize: "20px", color: "gray", cursor:"pointer" }} />
          </ContainerInput>
        </Heder>
        <HederTabla>
          <Caja1>
            <Parrafo>Identification</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>Business</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>Name</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>Last name</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>Phone</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>Landline</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>Address</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>Email</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>Call start</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>Call ending</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>Call duration</Parrafo>
          </Caja1>
        </HederTabla>
        <ContainerSecundario>
        {resBusqueda.map((item, i) => (
          <BodyTabla key={i}>
            <Caja1>
              <Parrafo>{item.cedula}</Parrafo>
            </Caja1>
            <Caja1>
              <Parrafo>{item.nombreNegocio}</Parrafo>
            </Caja1>
            <Caja1>
              <Parrafo>{item.nombre}</Parrafo>
            </Caja1>
            <Caja1>
              <Parrafo>{item.apellido}</Parrafo>
            </Caja1>
            <Caja1>
              <Parrafo>{item.telefono}</Parrafo>
            </Caja1>
            <Caja1>
              <Parrafo>{item.telefonoFijo}</Parrafo>
            </Caja1>
            <Caja1>
              <Parrafo>{item.direccion}</Parrafo>
            </Caja1> 
            <Caja1>
              <Parrafo>{item.correo}</Parrafo>
            </Caja1> 
            <Caja1>
              <Parrafo>{item.llamadaInicio}</Parrafo>
            </Caja1>
            <Caja1>
              <Parrafo>{item.llamadaFinal}</Parrafo>
            </Caja1>
            <Caja1>
              <Parrafo>{item.duracionLlamada}</Parrafo>
            </Caja1>
          </BodyTabla>
        ))}
        </ContainerSecundario>
        <FooterTabla>
          <Boton onClick={() => {setLlamadaAbierta(!llamadaAbierta)}}>Call register</Boton>
        </FooterTabla>
        
          </ContainerPrincipal>
          <Audiollamada 
                estado={llamadaAbierta}
                cambiarEstado={setLlamadaAbierta}
                ></Audiollamada>
        </>
      )}
    </>
  )
}

export default Tablallamada