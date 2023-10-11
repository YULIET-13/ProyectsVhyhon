import React, { useState, useEffect } from "react";
import { Carrusel, Contenedor, ContenedorTarjeta, Tarjeta1 } from "./styled";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import carrusel from "../../img/imagenCarrusel.jpg";

const Vistaprincipal = () => {
  // Declara un componente funcional llamado Vistaprincipal.
  const [tarjetaActual, setTarjetaActual] = useState(0); // Declara el estado 'tarjetaActual' con valor inicial 0 y una función para actualizarlo.
  const [loading, setLoading] = useState(true);

  const tarjetas = [
    {title: "CUSTOMER CONTACT DATA",description: "name",description2: "Email address."},
    {title: "INTERRACTION HISTORY",description: "Call logs", description2: "emails sent and received."},
    {title: "INFORMATION ON SALES OPPORTUNITIES ",description2: "Details about business opportunities with the client, including status, estimated value, and important dates."},
    {title: "PENDING ACTIVITIES",descripcion:"Client-related tasks and reminders, such as scheduled follow-ups, follow-up calls, pending presentations.",},
    {title: "PURCHASE HISTORY",descripcion: "information about previous purchases made by the customer, products or services purchased and purchase dates.",
    },
  ];
  // Función para asignar animaciones a las tarjetas.
  const asignarAnimacion = (claseActual, claseSiguiente) => {
    const tarjetas = document.querySelectorAll(".tarjeta"); // Selecciona todos los elementos con la clase CSS "tarjeta".

    tarjetas.forEach((tarjeta) => {
      // Itera sobre cada tarjeta seleccionada.
      if (tarjeta.classList.contains(claseActual)) {
        // Comprueba si la tarjeta tiene la clase 'claseActual'.
        tarjeta.classList.remove(claseActual); // Si es así, elimina la clase 'claseActual'.
        tarjeta.classList.add(claseSiguiente); // Agrega la clase 'claseSiguiente'.
      }
    });
  };
  // Función para manejar el clic en el botón "Next". este boton next esta oculto
  const handleClickNext = () => {
    const nuevaTarjeta = (tarjetaActual + 1) % tarjetas.length; // Calcula el índice de la próxima tarjeta.
    asignarAnimacion(tarjetas[tarjetaActual], tarjetas[nuevaTarjeta]); // Aplica animaciones a las tarjetas.
    setTarjetaActual(nuevaTarjeta); // Actualiza el estado 'tarjetaActual' con el nuevo índice.
  };
  // Establece un temporizador para avanzar automáticamente a la siguiente tarjeta cada 2 segundos.
  setTimeout(() => {
    handleClickNext(); // Llama a la función 'handleClickNext' para avanzar.
  }, 5000);

  setTimeout(() => {
    handleClickNext();
  }, 5000);

  let navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("user");
    if (userToken) {
      try {
        jwt_decode(userToken);
        setLoading(false);
      } catch (error) {
        console.error("Error decoding token:", error);
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      {loading ? (
        <>
          <h1>cargando.....</h1>
        </>
      ) : (
        <>
          <div
            style={{
              backgroundImage: `url(${carrusel})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100% 140%",
              height: "100%",
            }}
          >
            <h1 style={{ textAlign: "center", margin: "0", color: "white" }}>
              INFORMATION CARDS
            </h1>

            <Contenedor className="container">
              {" "}
              {/*Renderiza un componente con la clase CSS "container".*/}
              {/* <button onClick={handleClickPrev}>Prev</button> */}
              <br />
              <br />
              <ContenedorTarjeta>
                {/*// Renderiza un componente llamado ContenedorTarjeta.*/}
                <Carrusel className="carousel">
                  {/*Mapea los objetos 'tarjeta' en el arreglo 'tarjetas'.*/}
                  {tarjetas.map((tarjeta, index) => (
                    <Tarjeta1
                      key={index}
                      className={`tarjeta ${
                        tarjeta === tarjetas[tarjetaActual] ? "active" : ""
                      }`}
                    >
                      <h2 style={{ textAlign: "center", color: "white" }}>
                        {tarjeta.title}
                      </h2>
                      <p style={{ textAlign: "center", color: "white" }}>
                        {tarjeta.descripcion}
                      </p>
                      <p style={{ textAlign: "center", color: "white" }}>
                        {tarjeta.description2}
                      </p>
                    </Tarjeta1>
                  ))}
                </Carrusel>
              </ContenedorTarjeta>
            </Contenedor>
          </div>
        </>
      )}
    </>
  );
};

export default Vistaprincipal;
