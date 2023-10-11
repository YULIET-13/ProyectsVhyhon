import React, { useState, useEffect } from "react";
import {Fondo,Header,Parrafo1,Main,Container,Cajaheader,ContainPerfil,BoxImgPerfil,ImgPerfil,InforPerfil,Boxperfil,HeaderInfor,EditButton,BodyInfor,BoxInfo,InforperfilLetra,Cajas,Cajitas,ContainerIcono,ContainerLetra,

} from "./styled";
import { HiCake } from 'react-icons/hi';
import { BiSolidUser,BiSolidMessageEdit } from 'react-icons/bi';
import { BsTelephoneFill,BsGeoAltFill,BsFillClipboard2CheckFill } from 'react-icons/bs';
import { FaFlag } from 'react-icons/fa';
import { PiGenderIntersex } from 'react-icons/pi';
import UserEditar from "../../../formularios/ModalactualizarUser";
import { useLocation, useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import Notificacion from "../notificaciones/notificaciones";
import DatosPerfil from "../../../formularios/crearDatosPerfil";
import Axios from "axios";

function PerfilUsuario() {
  const [modalDatos, setModalDatos] = useState(false);
  const [modalAbierta, setModalAbierta] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const [userToken, setUserToken] = useState(localStorage.getItem("user"));
  const guardarId =  userData.idRegistro
    // console.log(guardarId, "guardarId")
  const [registro, setRegistro] = useState(false) 
  const [reflejarDatos,setReflejarDatos] = useState([]) 
  // console.log(reflejarDatos,"aqui yuli");
  const [mostrarnotifcacion, setMostrarnotificacion] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname;

  const notificacionClick = () => {
    setMostrarnotificacion(!mostrarnotifcacion);
  };


  let navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      try {
        const token = jwt_decode(userToken);
        // console.log(token);
        setUserData(token);
        setLoading(false);
        console.log(userToken,"❤️❤️❤️");
      } catch (error) {
        console.error("Error al decodificar el token yuli:", error);
        // navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [navigate, userToken]);

  const actualizarUsuario = () => {
    const updateUserToken = localStorage.getItem("user");
    if (updateUserToken) {
      try {
        const token = jwt_decode(updateUserToken);
        setUserData(token);
        setUserToken(updateUserToken);
      } catch (error) {
        console.error("Error al decodificar el token devia:", error);
      }
    }
  };

  const fetchDatosPerfil = async () => {
    try {
      const response = await Axios.get(`${process.env.REACT_APP_URL_BACKEND }/buscarDatos/${guardarId}`);
      if(response.data.length > 0){
        setRegistro(true)

      }
    } catch (error) {
      // console.error('Error al obtener los datos del perfil:', error);
    }
  }
  fetchDatosPerfil()
;


useEffect(() => {
const DatosPerfilReflejar = async () => {
  try {
    const response = await Axios.get(`${process.env.REACT_APP_URL_BACKEND }/reflejarDatos/${guardarId}`);
    
      setReflejarDatos(response.data)
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}

DatosPerfilReflejar()
}, [guardarId])


  return (
    <>
      {loading ? (
        <>
          <h1>Cargando......</h1>
        </>
      ) : (
        <>
          {mostrarnotifcacion ? (
            <>
              <Fondo>
                <UserEditar
                  status={modalAbierta}
                  changeStatus={setModalAbierta}
                  userData={userData}
                  onUserUpdate={actualizarUsuario}
                />
                {/* header */}
                <Header>
                  <DatosPerfil 
                  userData={userData}
                  estado = {modalDatos}
                  cambiarEstado = {setModalDatos}
                  ></DatosPerfil>
                  <Cajaheader>
                    <Parrafo1
                      style={{
                        background:
                          currentPath === "/perfilusuario"
                            ? "#6AB7BD"
                            : "#ffffff",
                        textDecoration: "none",
                      }}
                    >
                      Mi perfil
                    </Parrafo1>
                    <Parrafo1 onClick={notificacionClick}>
                      Notificaciones
                    </Parrafo1>
                  </Cajaheader>
                </Header>
                {/* body */}
                <Main>
                  {/* informacion */}
                  <Container>
                    <ContainPerfil>
                      <BoxImgPerfil>
                        <ImgPerfil></ImgPerfil>
                      </BoxImgPerfil>
                      <Boxperfil>
                        <InforPerfil>
                          <InforperfilLetra>
                            <h4>name:</h4>
                          </InforperfilLetra>
                          <p>{userData.username}</p>
                        </InforPerfil>
                        <InforPerfil>
                          <InforperfilLetra>
                            <h4>Email:</h4>
                          </InforperfilLetra>
                          <p>{userData.email}</p>
                        </InforPerfil>
                        <InforPerfil>
                          <InforperfilLetra>
                            <h4>Password:</h4>
                          </InforperfilLetra >
                          <input style={{outline:"none",border:"0", backgroundColor:"#eee9e6"}}
                          type="password"
                          value={userData.password}
                          readOnly // no se puede quitar esto porque da error en la consola del navegador y evita ediciones no deeadas
                        />
                          {/* <Password type="password" value={userData.password}/> */}
                        </InforPerfil>
                        <InforPerfil>
                          <InforperfilLetra>
                            <h4>Empresa:</h4>
                          </InforperfilLetra>
                          <p>{userData.nombreEmpresa}</p>
                        </InforPerfil>
                      </Boxperfil>
                    </ContainPerfil>
                      {registro ? (
                        reflejarDatos.length > 0 ? (
                          <BoxInfo>
                        <HeaderInfor>
                          <h3>Informacion Personal</h3>
                          <EditButton onClick={() => {setModalAbierta(!modalAbierta)}}>Editar</EditButton>
                        </HeaderInfor>
                        <BodyInfor>
                          <Cajas>
                            <Cajitas>
                              <ContainerIcono>
                                <BiSolidUser className="Iconos"></BiSolidUser>
                              </ContainerIcono>
                              <ContainerLetra>
                                <h4>Identificacion</h4>
                                <p>{reflejarDatos[0].identificacion}</p>
                              </ContainerLetra>
                            </Cajitas>
                            <Cajitas>
                              <ContainerIcono>
                                <BsFillClipboard2CheckFill className="Iconos"></BsFillClipboard2CheckFill>
                              </ContainerIcono>
                              <ContainerLetra>
                                <h4>Tipo de documento</h4>
                                <p>{reflejarDatos[0].tipo_documento}</p>
                              </ContainerLetra>
                            </Cajitas>
                            <Cajitas>
                              <ContainerIcono>
                              <HiCake className="Iconos"></HiCake>
                              </ContainerIcono>
                              <ContainerLetra>
                                <h4>Fecha de nacimiento</h4>
                                <p>{reflejarDatos[0].fechaNacimiento}</p>
                              </ContainerLetra>
                            </Cajitas>
                          </Cajas>

                          <Cajas>
                          <Cajitas>
                              <ContainerIcono>
                                <PiGenderIntersex className="Iconos"></PiGenderIntersex>
                              </ContainerIcono>
                              <ContainerLetra>
                                <h4>Sexo</h4>
                                <p>{reflejarDatos[0].sexo}</p>
                              </ContainerLetra>
                            </Cajitas>
                            <Cajitas>
                              <ContainerIcono>
                                <BiSolidMessageEdit className="Iconos"></BiSolidMessageEdit>
                              </ContainerIcono>
                              <ContainerLetra>
                                <h4>Edad</h4>
                                <p>{reflejarDatos[0].edad}</p>
                              </ContainerLetra>
                            </Cajitas>
                            <Cajitas>
                              <ContainerIcono>
                                <BsTelephoneFill className="Iconos"></BsTelephoneFill>
                              </ContainerIcono>
                              <ContainerLetra>
                                <h4>Contacto</h4>
                                <p>{reflejarDatos[0].Telefono}</p>
                              </ContainerLetra>
                            </Cajitas>
                          </Cajas>

                          <Cajas>
                          <Cajitas>
                              <ContainerIcono>
                                <FaFlag className="Iconos"></FaFlag>
                              </ContainerIcono>
                              <ContainerLetra>
                                <h4>Nacionalidad</h4>
                                <p>{reflejarDatos[0].nacionalidad}</p>
                              </ContainerLetra>
                            </Cajitas>
                            <Cajitas>
                              <ContainerIcono>
                                <BsGeoAltFill className="Iconos"></BsGeoAltFill>
                              </ContainerIcono>
                              <ContainerLetra>
                                <h4>Lugar de residencia</h4>
                                <p>{reflejarDatos[0].lugarResidencia}</p>
                              </ContainerLetra>
                            </Cajitas>
                          </Cajas>
                        </BodyInfor>
                    </BoxInfo>
                        ):(
                          <BoxInfo>
                        <HeaderInfor>
                          <h3>Información adicional</h3>
                          <EditButton onClick={() => {setModalAbierta(!modalAbierta)}}>Editar</EditButton>
                        </HeaderInfor>
                        <BodyInfor>
                        <h1>Cargando...</h1>
                        </BodyInfor>
                    </BoxInfo>
                        )
                      ) : (
                        <BoxInfo>
                        <HeaderInfor>
                          <h3>Información adicional</h3>
                          <EditButton onClick={() => {setModalAbierta(!modalAbierta)}}>Editar</EditButton>
                        </HeaderInfor>
                        <BodyInfor>
                        <h3>NO HAY DATOS ADICIONALES</h3>
                        <button onClick={() => {setModalDatos(!modalDatos)}}>Agregar</button>
                        </BodyInfor>
                    </BoxInfo>
                      )}
                  </Container>
                </Main>
              </Fondo>
            </>
          ) : (
            <>
              <Notificacion cambiarAperfil={notificacionClick} />
            </>
          )}
        </>
      )}
    </>
  );
}

export default PerfilUsuario;