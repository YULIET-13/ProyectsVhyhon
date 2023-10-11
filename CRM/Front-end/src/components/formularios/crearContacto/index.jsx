import React, { useState, useEffect} from 'react';
import { Div1, Container1, Caja, Parrafo, Img, Parrafo1, Caja1, Input, Caja2, Boton1, Boton2, Select } from './styled';
import imagen from "../../img/img_x.webp";
import Axios from 'axios';
import swal from "sweetalert";

function Retorno4({setContactoCreado}) {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [empresaContacto, setEmpresaContacto] = useState('');
  const [empresa, setEmpresa] = useState([]);

 
  const fetchEmpresa = async () => {
  const token = localStorage.getItem('user')
  const tokensincomillas = token.replace(/"/g,"")
    try {
      const response = await Axios.get(`${process.env.REACT_APP_URL_BACKEND }/company`,{
        headers: {Authorization: `${tokensincomillas}`}
      });
      setEmpresa(response.data);

    } catch (error) {
      console.error('Error al obtener segmentos:', error);
    }
  };

  useEffect(() => {
    fetchEmpresa();
  }, []);

  const createContacto = (e) => {
    e.preventDefault();

    if (nombreUsuario&&cargo&&telefono&&email) { 
      const elegir = empresa.find((n) => n.idEmpresa === parseInt(empresaContacto))
      if (!elegir) {
        swal({
          title: "La empresa selecionada no es valida",
          text: "Porfavor seleccionar empresa",
          icon: "warning",
        });
        return
      }} else {
        swal({
          text: "Porfavor llenar todo",
          icon: "error",
        });
      }
      const token = localStorage.getItem('user')
      const tokensincomillas = token.replace(/"/g,"")
      Axios.post(`${process.env.REACT_APP_URL_BACKEND}/contacto`, {
        nombreContacto: nombreUsuario,
        cargo: cargo,
        telefono: telefono,
        correo:email,
        contactoEmpresa: empresaContacto,
      },{
        headers:{
          Authorization:`${tokensincomillas}`
        }
      })
        .then((response) => {
  
          const contactoCreado = {
            nombreContacto: nombreUsuario,
            cargo: cargo,
            telefono: telefono,
            correo: email,
          };
          setTimeout(() => {
            window.location.href = "/contactos"  
          },0)
          setContactoCreado(contactoCreado);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  // Estado para controlar si el componente está cerrado o abierto
  const [cerrar, setCerrar] = useState(true);

  // Función para cerrar el componente
  const cerrarcomponente = () => {
    setCerrar(false);
  };

  // Si el estado 'cerrar' es falso, devuelve null para ocultar el componente
  if (!cerrar) {
    return null;
  }

  return (
    <Div1>
      {/* Contenedor principal */}
      <Container1>
        {/* Primera sección */}
        <Caja>
          <Parrafo>
            <h3>Create contact</h3>
          </Parrafo>
          {/* Imagen para cerrar el componente */}
          <Img src={imagen} alt="img" onClick={cerrarcomponente} />
        </Caja>
        <hr />
        {/* Segunda sección */}
        <Caja1>
          <Parrafo1>
            <h3>Name</h3>
          </Parrafo1>
          <Input placeholder="Enter the contact name" 
          maxLength={50}
          onKeyPress={(event) => {
            const inputValue = event.key;
            const regex = /[a-zA-Z ]/; // Expresión regular que permite letras y números
            if (!regex.test(inputValue)) {
              event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
            }
          }}
          onChange={(e) => setNombreUsuario(e.target.value)}></Input>
          <Parrafo1>
            <h3> Position</h3>
          </Parrafo1>
          <Input placeholder="Enter the contact's contact"
          maxLength={50}
          onKeyPress={(event) => {
            const inputValue = event.key;
            const regex = /[a-zA-Z ]/; 
            if (!regex.test(inputValue)) {
              event.preventDefault(); 
            }
          }}
          onChange={(e) => setCargo(e.target.value)}></Input>
          <Parrafo1>
            <h3>Phone</h3>
          </Parrafo1>
          <Input placeholder="Enter the contact phone number"
          maxLength={10} 
          onKeyPress={(event) => {
            const inputValue = event.key;
            const regex = /[0-9]/; 
            if (!regex.test(inputValue)) {
              event.preventDefault();
            }
          }}
          onChange={(e) => setTelefono(e.target.value)}></Input>
          <Parrafo1>
            <h3>Email</h3>
          </Parrafo1>
          <Input placeholder="Enter the contact email" 
          maxLength={30}
          type='email'
          required
          onKeyPress={(event) => {
            const inputValue = event.key;
            const regex = /[_.@a-zA-Z0-9]/;  
            if (!regex.test(inputValue)) {
              event.preventDefault(); 
            }
          }}
          onChange={(e) => setEmail(e.target.value)}></Input>
          <Parrafo1>
            <h3>Contact company </h3>
          </Parrafo1>
          <Select value={empresaContacto} onChange={(e) => setEmpresaContacto(e.target.value)}>
            <option value="option"></option>
            {empresa.map((empresa) => (
              <option key={empresa.idEmpresa} value={empresa.idEmpresa}>
                {empresa.nombreEmpresa}
              </option>
            ))}
          </Select>
        </Caja1>
        <hr />
        {/* Tercera sección */}
        <Caja2>
          {/* Botones para cancelar o crear el contacto */}
          <Boton2 onClick={cerrarcomponente}>Cancel</Boton2>
          <Boton1 onClick={createContacto}>Create contact</Boton1>
        </Caja2>
      </Container1>
    </Div1>
  );
}

export default Retorno4;
