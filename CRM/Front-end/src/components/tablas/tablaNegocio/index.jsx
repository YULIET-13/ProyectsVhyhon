import React, { useEffect, useState } from "react";
import {
  ContainerPrincipal,
  Heder,
  ContainerInput,
  Input,
  HederTabla,
  Caja1,
  Parrafo,
  BodyTabla,
  CajaIcono,
  FooterTabla,
  Boton,
  ContainerSecundario,
} from "./styled";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import CrearNegocios from "../../formularios/crearNegocio";
import Axios from "axios";
import NegocioUpdate from "../../formularios/updateNegocio";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function TablaNegocio() {
  const [active, setActive] = useState(false);
  const [activeEditar, setActiveEditar] = useState(false);
  const [negocios, setNegocios] = useState([]);
  const [negocioAEditar, setNegocioAEditar] = useState(null);

  const [empresaUpdateAbierto, setEmpresaUpdateAbierto] = useState(true);

  const [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("user");
    if (userToken) {
      try {
        jwt_decode(userToken);
        setLoading(false);
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [navigate]);

  // barra de busqueda
  const [buscar, setBuscar] = useState("");

  //Funcion para traer los datos de la tabla, a buscar

  //Inicio, Función de busqueda
  const BarraDeBusqueda = (e) => {
    setBuscar(e.target.value);
  };

  //Metodo de filtrado tabla negocio
  let resBusqueda = [];

  if (!buscar) {
    resBusqueda = negocios || [];
  } else {
    resBusqueda = negocios.filter(
      (dato) =>
        (dato.nombreNegocio &&
          dato.nombreNegocio.toLowerCase().includes(buscar.toLowerCase())) ||
        (dato.etapas &&
          dato.etapas.toLowerCase().includes(buscar.toLowerCase())) ||
        (dato.fuente &&
          dato.fuente.toLowerCase().includes(buscar.toLowerCase())) ||
        (dato.nombreEmpresa &&
          dato.nombreEmpresa.toLowerCase().includes(buscar.toLowerCase())) ||
        (dato.nombreContacto &&
          dato.nombreContacto.toLowerCase().includes(buscar.toLowerCase()))
    );
  }

  const handleEditarClick = (item) => {
    setNegocioAEditar(item); // Cuando se hace clic en Editar, almacena el negocio a editar en el estado
    setActiveEditar(true); // Activa el componente de edición
  };

  const ReflejarDatos = async () => {
    const token = localStorage.getItem('user')
      const tokensincomillas = token.replace(/"/g,"")
    try {
      const response = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/negociotabla`,{      
      },{
        headers:{
          Authorization: tokensincomillas,
        }
      });
      setNegocios(response.data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  const TabladeleteNegocio = async (item) => {
    const token = localStorage.getItem('user')
    const tokensincomillas = token.replace(/"/g,"")
    try {
      const res = await Axios.put(
        `${process.env.REACT_APP_URL_BACKEND}/negociotabla/desactivar/${item.idNegocio}`,{      
          
        },{
          headers:{
            Authorization: tokensincomillas,
          }
        }
      );
      console.log("Negocio eliminado con éxito.", res.data);
      ReflejarDatos(); // Refresca la lista de negocios después de eliminar uno
    } catch (error) {
      console.error("Error al eliminar el negocio:", error);
    }
    setTimeout(() => {
      window.location.href = "/negocios";
    }, 0);
  };

  useEffect(() => {
    ReflejarDatos();
  }, []);

  const Borrar = () => {
    setBuscar("");
  };

  return (
    <>
      {loading ? (
        <>
          <h1>cargando.....</h1>
        </>
      ) : (
        <>
          <ContainerPrincipal>
            <Heder>
              <h1>Business Table</h1>
              <ContainerInput>
                <AiOutlineSearch
                  style={{ fontSize: "25px", color: "#4b4848" }}
                />
                <Input
                  placeholder="Look for ..."
                  value={buscar}
                  onChange={BarraDeBusqueda}
                ></Input>
                <AiOutlineClose
                  style={{ fontSize: "20px", color: "gray" ,cursor:"pointer"}}
                  onClick={Borrar}
                />
              </ContainerInput>
            </Heder>
            <HederTabla>
              <Caja1>
                <Parrafo>Business name</Parrafo>
              </Caja1>
              <Caja1>
                <Parrafo>Stages</Parrafo>
              </Caja1>
              <Caja1>
                <Parrafo>source</Parrafo>
              </Caja1>
              <Caja1>
                <Parrafo>company</Parrafo>
              </Caja1>
              <Caja1>
                <Parrafo>Business</Parrafo>
              </Caja1>
              <Caja1>
                <Parrafo>Action</Parrafo>
              </Caja1>
            </HederTabla>
            <ContainerSecundario>
              {resBusqueda.map((item, i) => (
                <BodyTabla key={i}>
                  <Caja1>
                    <Parrafo>{item.nombreNegocio}</Parrafo>
                  </Caja1>
                  <Caja1>
                    <Parrafo>{item.etapas}</Parrafo>
                  </Caja1>
                  <Caja1>
                    <Parrafo>{item.fuente}</Parrafo>
                  </Caja1>
                  <Caja1>
                    <Parrafo>{item.nombreEmpresa}</Parrafo>
                  </Caja1>
                  <Caja1>
                    <Parrafo>{item.nombreContacto}</Parrafo>
                  </Caja1>
                  <Caja1>
                    <CajaIcono style={{ justifyContent: "end" }}>
                      <MdDelete
                        style={{ fontSize: "30px" }}
                        onClick={() => TabladeleteNegocio(item)}
                      />
                    </CajaIcono>
                    <CajaIcono>
                      <BiSolidEditAlt
                        style={{ fontSize: "30px" }}
                        onClick={() => handleEditarClick(item)} // Llama a la función para editar
                      />
                    </CajaIcono>
                  </Caja1>
                </BodyTabla>
              ))}
            </ContainerSecundario>
            <FooterTabla>
              <Boton
                onClick={() => {
                  setActive(!active);
                  // Cierra EmpresaUpdate si está abierto al hacer clic en "Crear Empresa"
                  if (activeEditar) {
                    setActiveEditar(false);
                  }
                  if (empresaUpdateAbierto) {
                    setEmpresaUpdateAbierto();
                  }
                }}
              >
                company create
              </Boton>
            </FooterTabla>
            {active && <CrearNegocios />}
            {activeEditar && (
              <NegocioUpdate
                negocio={negocioAEditar}
                setEmpresaUpdateAbierto={setEmpresaUpdateAbierto}
              />
            )}
          </ContainerPrincipal>
        </>
      )}
      ;
    </>
  );
}

export default TablaNegocio;
