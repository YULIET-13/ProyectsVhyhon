import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Div,
  FormGroup,
  FormularioContainer,
  Input,
  Label,
} from "./style.jsx";

const FormularioPedido = ({ onTaskCreated }) => {
  const [cliente, setCliente] = useState("");
  const [monto, setMonto] = useState("");

  const handleClienteChange = (event) => {
    // Validar que el valor del cliente solo contenga letras
    const regex = /^[A-Za-z]+$/;
    const inputValue = event.target.value;

    if (inputValue === "" || regex.test(inputValue)) {
      setCliente(inputValue);
    }
  };

  const handleMontoChange = (event) => {
    setMonto(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const fecha = new Date().toISOString().slice(0, 10);
      const nuevaTarea = {
        cliente: cliente,
        monto: monto,
        fecha: fecha,
      };

      // Enviar la nueva tarea a la base de datos mediante una solicitud POST
      const response = await axios.post(
        `${process.env.REACT_APP_URL_BACKEND}/pedidos`,
        nuevaTarea
      );
      const createdTask = response.data;
      onTaskCreated(createdTask);
      setCliente("");
      setMonto("");
      console.log("Tarea creada correctamente.");
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  return (
    <FormularioContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Div>
          <Label>Cliente:</Label>
          <Input
            value={cliente}
            onChange={handleClienteChange}
            type="text"
            placeholder="Nombre del cliente"
            required
          />
        </Div>
      </FormGroup>
      <FormGroup>
        <Div>
          <Label>Monto:</Label>
          <Input
            type="number"
            value={monto}
            onChange={handleMontoChange}
            required
            placeholder="Precio del pedido"
          />
        </Div>
      </FormGroup>
      <Button type="submit">Enviar</Button>
    </FormularioContainer>
  );
};

export default FormularioPedido;
