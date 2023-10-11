  import React from "react";
import { ContainerPrincipal , Heder , ContainerInput, Input, HederTabla , Caja1 , Parrafo, BodyTabla, CajaIcono, Boton , FooterTabla , ContainerSecundario} from "./styled";
import { AiOutlineClose , AiOutlineSearch } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { BiSolidEditAlt } from 'react-icons/bi'
import { useState, useEffect } from "react";
import Retorno8 from "../../formularios/crearEmpresa";
import EmpresaUpdate from "../../formularios/updateEmpresa";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"


function TablaEmpresa() {
  const [active, setActive] = useState(false);
  const [activeEditar, setActiveEditar] = useState(false);
  const [empresa, setEmpresa] = useState([]);
  const [empresaEditar, setEmpresaEditar] = useState(null);

  const [loading, setLoading] = useState(true)

  const [empresaUpdateAbierto, setEmpresaUpdateAbierto] = useState(true);

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
  // barra de busqueda
const [buscar, setBuscar] = useState("")

//Funcion para traer los datos de la tabla, a buscar

//Inicio, Función de busqueda
  const BarraDeBusqueda = (e) => {
  setBuscar(e.target.value);
 
};

//Metodo de filtrado tabla empresa
  let resBusqueda = [];

  if (!buscar) {
  resBusqueda = empresa|| [];
} else {
  resBusqueda = empresa.filter(
      (dato) =>
      (dato.nombreEmpresa  && dato.nombreEmpresa.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.segmento && dato.segmento.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.url && dato.url.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.descripcion && dato.descripcion.toLowerCase().includes(buscar.toLowerCase()))
);
}


  const handleEditarClick = (item) => {
    setEmpresaEditar(item); // Cuando se hace clic en Editar, almacena el negocio a editar en el estado
    setActiveEditar(true); // Activa el componente de edición
  };


  const Getempresa = async () => {
    try {
      const token = localStorage.getItem('user')
      const tokensincomillas = token.replace(/"/g,"")
      const empresas = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/companytabla`
      ,{      
          headers:{
            Authorization: tokensincomillas
          }
      }
      )
    setEmpresa(empresas.data);
    } catch (error) {
      console.log("error de axio en la query");
    }
    
  };

  const TabladeleteEmpresa = async (item) => {
    const token = localStorage.getItem('user')
    const tokensincomillas = token.replace(/"/g,"")
    try {
      const res = await Axios.put(
        `${process.env.REACT_APP_URL_BACKEND}/companytabla/desactivar/${item.idEmpresa}`,{      
          
        },{
          headers:{
            Authorization: tokensincomillas,
          }
        });
      Getempresa()
      return res.data
    
    } catch (error) {
      console.log("Error al eliminar la empresa:", error);
    }
    setTimeout(() => {
      window.location.href = "/empresas"  
    },0)
  };

  useEffect(() => {
    Getempresa();
  }, []);

  const Borrar = () =>{
    setBuscar("")
}

  return (
    <>
    {loading ? (
        <>
        <h1>cargando.....</h1>
        </>
    ):(
    <>
      <ContainerPrincipal>
        <Heder>
          <h1>Company table</h1>
          <ContainerInput>
            <AiOutlineSearch style={{ fontSize: "25px", color: "#4b4848" }} />
            <Input placeholder="Look for ..."  value={buscar} onChange={BarraDeBusqueda}></Input>
            <AiOutlineClose onClick={Borrar} style={{ fontSize: "20px", color: "gray", cursor:"pointer" }} />
          </ContainerInput>
        </Heder>
        <HederTabla>
          <Caja1>
            <Parrafo>company name</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>segment</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>url</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>Description</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>action</Parrafo>
          </Caja1>
        </HederTabla>
        <ContainerSecundario>
        {resBusqueda.map((item, i) => (
          <BodyTabla key={i}>
            <Caja1>
              <Parrafo>{item.nombreEmpresa}</Parrafo>
            </Caja1>
            <Caja1>
              <Parrafo>{item.segmento}</Parrafo>
            </Caja1>
            <Caja1>
              <Parrafo>{item.url}</Parrafo>
            </Caja1>
            <Caja1>
              <Parrafo>{item.descripcion}</Parrafo>
            </Caja1>
            <Caja1>
              <CajaIcono style={{ justifyContent: "end" }}>
                <MdDelete
                  style={{ fontSize: "30px", cursor: "pointer"}}
                  onClick={() => TabladeleteEmpresa(item)}
                />
              </CajaIcono>
              <CajaIcono>
                <BiSolidEditAlt style={{ fontSize: "30px", cursor: "pointer"}} onClick={() => handleEditarClick(item)} />
              </CajaIcono>
            </Caja1>
          </BodyTabla>
        ))}
        </ContainerSecundario>
        <FooterTabla>
        <Boton onClick={() => {
                setActive(!active);
                // Cierra EmpresaUpdate si está abierto al hacer clic en "Crear Empresa"
                if (activeEditar) {
                  setActiveEditar(false);
                }
                if (empresaUpdateAbierto) {
                  setEmpresaUpdateAbierto();
                }
              }}>
                Company create
              </Boton>
              </FooterTabla>
            {active && <Retorno8 />}
            {activeEditar && (
              <EmpresaUpdate empresa={empresaEditar}  setEmpresaUpdateAbierto={setEmpresaUpdateAbierto} />
            )}
          </ContainerPrincipal>
        </>
      )}
    </>
  );
}

export default TablaEmpresa;