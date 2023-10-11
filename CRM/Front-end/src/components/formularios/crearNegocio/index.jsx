import React, { useState, useEffect } from "react";
import { Container, Principal, Caja1, Parrafo, Img, Caja2, Parrafo1, Input, Select, Caja3, Boton1, Boton2 } from "./styled.jsx";
import imagen from "../../img/img_x.webp";
import Axios from "axios";
import swal from "sweetalert";

function CrearNegocios() {
    const [nombreNegocio, setNombreNegocio] = useState("");
    const [etapas, setEtapas] = useState("");
    const [fuente, setFuente] = useState("");
    const [selectEmpresa, setSelectEmpresa] = useState("");
    const [selectContacto, setSelectContacto] = useState("");
    const [empresa, setEmpresa] = useState([]);
    const [contacto, setContacto] = useState([]);
    const [cerrar, setCerrar] = useState(true);


    const cerrarcomponente = () => {
        setCerrar(false);
    };

    useEffect(() => {
        // Función para obtener empresas desde la base de datos
        const fetchEmpresas = async () => {
            const token = localStorage.getItem('user')
            const tokensincomillas = token.replace(/"/g,"")
            try {
                const response = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/company`,{
                    headers: {Authorization: `${tokensincomillas}`}
                });
                setEmpresa(response.data);
            } catch (error) {
                console.error("Error al obtener empresas:", error);
            }
        };

        // Función para obtener contactos desde la base de datos
        const fetchContactos = async () => {
            const token = localStorage.getItem('user')
            const tokensincomillas = token.replace(/"/g,"")
            try {
                const response = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/contacto`,{
                    headers:{Authorization:`${tokensincomillas}`}
                });
                setContacto(response.data);
            } catch (error) {
                console.error("Error al obtener contactos:", error);
            }
        };

        fetchEmpresas();
        fetchContactos();
    }, []);

    // Función para crear un negocio
    const createNegocio = async (e) => {
        e.preventDefault();

        if (nombreNegocio && etapas && fuente) {
            const elegirCampaña = empresa.find((n) => n.idEmpresa === parseInt(selectEmpresa));
            const elegirContacto = contacto.find((n) => n.idContacto === parseInt(selectContacto));
        
            if (!elegirCampaña) {
                swal({
                    title: "La campaña seleccionada no es válida",
                    text: "Por favor seleccionar campaña",
                    icon: "warning",
                });
                return;
            }

            if (!elegirContacto) {
                swal({
                    title: "El contacto seleccionado no es válido",
                    text: "Por favor seleccionar contacto",
                    icon: "warning",
                });
                return;
            }
        try {
            const token = localStorage.getItem('user')
            const tokensincomillas = token.replace(/"/g,"")
            const response = await Axios.post(`${process.env.REACT_APP_URL_BACKEND}/negocio`, {
                nombreNegocio,
                etapas,
                fuente,
                empresa: selectEmpresa,
                contacto: selectContacto,
            },{
                headers:{ Authorization:`${tokensincomillas}`}
            });
            setTimeout(() => {
                        
                window.location.href = "/negocios"  
        },0)
        return response.data
        }catch (error) {
            console.log("Error al crear negocio:", error);
        }
    }else {
        swal({
            text: "Porfavor llenar todo",
            icon: "error",
        });
    }
    };

    if (!cerrar) {
        return null;
    }

    return (
        <div>
            <Container>
                <Principal>
                    <Caja1>
                        <Parrafo><h3>Create business</h3></Parrafo>
                        <Img src={imagen} alt="img" onClick={cerrarcomponente} />
                    </Caja1>
                    <hr />
                    <Caja2>
                        <Parrafo1><h3>Business name</h3></Parrafo1>
                        <Input placeholder="Enter the name of the business" 
                        maxLength={50}
                        onKeyPress={(event) => {
                            const inputValue = event.key;
                            const regex = /[a-zA-Z0-9& ]/;
                            if (!regex.test(inputValue)) {
                              event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
                            }
                        }}
                        onChange={(e) => setNombreNegocio(e.target.value)} />
                        <Parrafo1><h3>Funnel stage</h3></Parrafo1>
                        <Input placeholder="Enter the funnel stage"
                        maxLength={50}
                        onKeyPress={(event) => {
                            const inputValue = event.key;
                            const regex = /[a-zA-Z0-9 ]/;
                            if (!regex.test(inputValue)) {
                            event.preventDefault();
                            }
                        }}
                        onChange={(e) => setEtapas(e.target.value)} />
                        <Parrafo1><h3>source</h3></Parrafo1>
                        <Input placeholder="Enter the source" 
                        maxLength={50}
                        onKeyPress={(event) => {
                            const inputValue = event.key;
                            const regex = /[a-zA-Z ]/;
                            if (!regex.test(inputValue)) {
                            event.preventDefault(); 
                            }
                        }}
                        onChange={(e) => setFuente(e.target.value)} />
                        <Parrafo1><h3>Campaign</h3></Parrafo1>
                        <Select value={selectEmpresa} onChange={(e) => setSelectEmpresa(e.target.value)}>
                            <option value="">Select campaign...</option>
                            {empresa.map((empresa) => (
                                <option key={empresa.idEmpresa} value={empresa.idEmpresa}>
                                    {empresa.nombreEmpresa}
                                </option>
                            ))}
                        </Select>
                        <Parrafo1 style={{ color: 'gray', marginTop: '8%' }}></Parrafo1>
                        <Parrafo1><h3>Contact</h3></Parrafo1>
                        <Select value={selectContacto} onChange={(e) => setSelectContacto(e.target.value)}>
                            <option value="">Select campaign...</option>
                            {contacto.map((contacto) => (
                                <option key={contacto.idContacto} value={contacto.idContacto}>
                                    {contacto.nombreContacto}
                                </option>
                            ))}
                        </Select>
                    </Caja2>
                    <hr />
                    <Caja3>
                        <Boton1 onClick={createNegocio}>Create business</Boton1>
                        <Boton2 onClick={cerrarcomponente}>Cancel</Boton2>
                    </Caja3>
                </Principal>
            </Container>
        </div>
    )
};

export default CrearNegocios;
