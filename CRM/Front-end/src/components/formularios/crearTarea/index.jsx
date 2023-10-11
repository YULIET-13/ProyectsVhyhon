import React, { useState, useEffect } from "react";
import { Container, Principal, Caja1, Parrafo, Img, Caja2, Parrafo1, Input, Caja3, Boton1, Boton2, ContainerInput, Select } from "./styled.jsx";
import imagen from "../../img/img_x.webp"
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Axios from "axios";
import swal from "sweetalert";

const CrearTarea = () => {
    const [selectNegocio, setSelectNegocio] = useState("");
    const [asunto, seAsunto] = useState("")
    const [responsable, setResponsable] = useState("");
    const [tipotarea, setTipotarea] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("");
    const [negocio, setNegocio] = useState([])


    const fetchNegocio = async () => {
        const token = localStorage.getItem('user')
        const tokensincomillas = token.replace(/"/g,"")
        try {
            const response = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/negocio`,{
                headers: {
                    Authorization : ` ${tokensincomillas}`
                }
            });
            setNegocio(response.data);

        } catch (error) {
            console.error("Error al obtener segmentos:", error);
        }
    };

    useEffect(() => {
        fetchNegocio();
    }, []);

    const Compromiso = (ev) => {
        ev.preventDefault();


        if (asunto && responsable && tipotarea && fecha && hora) {
            // Buscar si el valor seleccionado en selectNegocio existe en el estado negocio
        const selectedNegocio = negocio.find((n) => n.idNegocio === parseInt(selectNegocio));
        if (!selectedNegocio) {
            swal({
                title: "El negocio seleccionado no es válido",
                text: "Porfavor seleccionar negocio",
                icon: "warning",
            });
            return
        }
        const token = localStorage.getItem('user')
        const tokensincomillas = token.replace(/"/g,"")
            Axios.post(`${process.env.REACT_APP_URL_BACKEND}/tareas`, {
                negocio: selectedNegocio.idNegocio,
                asunto: asunto,
                responsable: responsable,
                tipoTarea: tipotarea,
                fecha: fecha,
                hora: hora,
            },{
                headers:{Authorization:`${tokensincomillas}`}
            })
                .then((response) => {
                    setTimeout(() => {

                        window.location.href = "/tareas"
                    }, 0);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            swal({
                text: "Porfavor llenar todo",
                icon: "error",
            });
        }
    };


    const [cerrar, setCerrar] = useState(true);
    const cerrarcomponente = () => {
        setCerrar(false);
    }
    if (!cerrar) {
        return null
    }
    return (
        <div>
            <Container>
                <Principal>
                    <Caja1>
                        <Parrafo><h3>Create task</h3></Parrafo>
                        <Img src={imagen} alt="img" onClick={cerrarcomponente}></Img>
                    </Caja1>
                    <hr />
                    <Caja2>
                        <Parrafo1><h3>Business</h3></Parrafo1>
                        <Select value={selectNegocio} onChange={(event) => {
                            setSelectNegocio(event.target.value);
                        }}>

                            <option value="option">option</option>
                            {negocio.map(negocio => (
                                <option key={negocio.idNegocio} value={negocio.idNegocio}>
                                    {negocio.nombreNegocio}
                                </option>
                            ))};
                        </Select>

                        <Parrafo1><h3>Task subject</h3></Parrafo1>
                        <Input
                            onKeyPress={(event) => {
                                const inputValue = event.key;
                                const regex = /[a-zA-Z0-9 ]/;
                                if (!regex.test(inputValue)) {
                                    event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
                                }
                            }}
                            onChange={(event) => {
                                seAsunto(event.target.value)
                            }} placeholder="enter task subject"
                            maxLength={50}
                            >
                                
                            </Input>
                        <Parrafo1><h3>Responsible</h3></Parrafo1>
                        <ContainerInput>
                            <Input
                                onKeyPress={(event) => {
                                    const inputValue = event.key;
                                    const regex = /[a-zA-Z ]/;
                                    if (!regex.test(inputValue)) {
                                        event.preventDefault();
                                    }
                                }}
                                onChange={(event) => {
                                    setResponsable(event.target.value)
                                }} placeholder="Enter name of person responsible" 
                                maxLength={50}
                                style={{ color: 'gray', height: "90%", width: "90%", border: "none", outline: "none" }} ></Input>
                            <FaUser style={{ marginRight: "5px" }} />
                        </ContainerInput>
                        <Parrafo1><h3>Task type</h3></Parrafo1>
                        <ContainerInput>
                            <Input
                                onKeyPress={(event) => {
                                    const inputValue = event.key;
                                    const regex = /[a-zA-Z0-9 ]/;
                                    if (!regex.test(inputValue)) {
                                        event.preventDefault();
                                    }
                                }}
                                onChange={(event) => {
                                    setTipotarea(event.target.value)
                                }} placeholder="Ingresar tipo de tarea" maxLength={50} style={{ color: 'gray', height: "90%", width: "90%", border: "none", outline: "none" }} ></Input>
                            <BsFillCalendar2CheckFill style={{ marginRight: "5px"}} />
                        </ContainerInput>
                        <Parrafo1><h3>date</h3></Parrafo1>
                        <Input type="date" style={{ color: 'gray' }} onChange={(event) => {
                            setFecha(event.target.value)
                        }}></Input>
                        <Parrafo1><h3>Horario de la tarea</h3></Parrafo1>
                        <Input type="time" style={{ color: 'gray' }} onChange={(event) => {
                            setHora(event.target.value)
                        }} ></Input>
                    </Caja2>
                    <hr />
                    <Caja3>
                        <Boton1 onClick={Compromiso}>Create task</Boton1>
                        <Boton2 onClick={cerrarcomponente}>Cancel</Boton2>
                    </Caja3>
                </Principal>
            </Container>
        </div>
    );
}

export default CrearTarea;