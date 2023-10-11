import React from "react";
import { ContainerPrincipal, Heder, ContainerInput, Input, HederTabla, Registros, Campos , Parrafo, BodyTabla, CajaIcono, FooterTabla, Boton } from "./styled";
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { BiSolidEditAlt } from 'react-icons/bi'
import { useState, useEffect } from "react";
import CrearTarea from "../../formularios/crearTarea";
import Axios from "axios";
import UpdateTarea from "../../formularios/updateTarea";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"

function TablaTarea() {

    const [active, setActive] = useState(false);
    const [activeEditar, setActiveEditar] = useState(false);
    const [tarea, setTarea] = useState([]);
    const [tareaEditar, setTareaEditar] = useState([]);
    
    const [empresaUpdateAbierto, setEmpresaUpdateAbierto] = useState(true);
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
  resBusqueda = tarea|| [];
} else {
  resBusqueda = tarea.filter(
      (dato) =>
      (dato.nombreNegocio && dato.nombreNegocio.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.asunto && dato.asunto.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.responsable  && dato.responsable.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.tipoTarea  && dato.tipoTarea.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.fecha && dato.fecha.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.hora && dato.hora.toLowerCase().includes(buscar.toLowerCase()))
);
}

    const handleEditarClick = (item) => {
        setTareaEditar(item); // Cuando se hace clic en Editar, almacena la tarea a editar en el estado
        setActiveEditar(true); // Activa el componente de edición
      };


    const ReflejarDatos = async () => {
        // ev.preventDefault();
     
        const tareas = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/tareasTabla`);
        setTarea(tareas.data);
    };

    const TabladeleteTarea = async (item) => {
        const token = localStorage.getItem('user')
        const tokensincomillas = token.replace(/"/g,"")
        const res = await Axios.put(
        `${process.env.REACT_APP_URL_BACKEND}/tareastabla/desactivar/${item.idTarea}`,{      
          
        },{
          headers:{
            Authorization: tokensincomillas,
          }
        }
        );
        console.log("Contacto eliminado con éxito.", res.data);


        setTimeout(() => {
            window.location.href = "/tareas"
        }, 0);
    };
    useEffect(() => {
        ReflejarDatos();
    }, [setTarea]);

    const Borrar = () => {
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
                    <h1>Task Table</h1>
                    <ContainerInput>
                        <AiOutlineSearch style={{ fontSize: "25px", color: "#4b4848" }} />
                        <Input placeholder="Look for ..."  value={buscar} onChange={BarraDeBusqueda}></Input>
                        <AiOutlineClose style={{ fontSize: "20px", color: "gray", cursor:"pointer"}} onClick={Borrar}/>
                    </ContainerInput>
                </Heder>
                <HederTabla>
                    <Campos><Parrafo>Business</Parrafo></Campos>
                    <Campos><Parrafo>Asunto</Parrafo></Campos>
                    <Campos><Parrafo>Responsible</Parrafo></Campos>
                    <Campos><Parrafo>Task type</Parrafo></Campos>
                    <Campos><Parrafo>Date</Parrafo></Campos>
                    <Campos><Parrafo>Time</Parrafo></Campos>
                    <Campos><Parrafo>Action</Parrafo></Campos>
                </HederTabla>
                <div className="ContainerSecundario">
                {resBusqueda.map((item, i) => (
                    <BodyTabla key={i} >
                        <Registros>
                            <Parrafo>{item.nombreNegocio}</Parrafo>
                        </Registros>
                        <Registros>
                            <Parrafo>{item.asunto}</Parrafo>
                        </Registros>
                        <Registros>
                            <Parrafo>{item.responsable}</Parrafo>
                        </Registros>
                        <Registros>
                            <Parrafo>{item.tipoTarea}</Parrafo>
                        </Registros>
                        <Registros>
                            <Parrafo>{item.fecha}</Parrafo>
                        </Registros>
                        <Registros>
                            <Parrafo>{item.hora}</Parrafo>
                        </Registros>
                        <Registros>
                            <CajaIcono style={{ justifyContent: "end" }}>
                                <MdDelete style={{ fontSize: "30px" }} onClick={()=> TabladeleteTarea(item)}/>
                                </CajaIcono>
                                <CajaIcono> <BiSolidEditAlt style={{ fontSize: "30px" }} onClick={() => handleEditarClick(item)} /* llama a la funcion para actualizar */ /></CajaIcono>
                        </Registros>
                    </BodyTabla>
                ))}
            </div>
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
                        Crear Empresa
                    </Boton>
                </FooterTabla>
                {active && <CrearTarea></CrearTarea>}
                {activeEditar && (<UpdateTarea tarea={tareaEditar} setEmpresaUpdateAbierto={setEmpresaUpdateAbierto}></UpdateTarea>)}
            </ContainerPrincipal>
        </>
        )}
        </>
    );
}
export default TablaTarea;