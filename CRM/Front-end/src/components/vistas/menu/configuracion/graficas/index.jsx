import React, { useEffect } from "react";
import Chart from "chart.js/auto"; // Importar Chart.js
import { Boxgrafica, ChartContainer, Container } from "./styled";
import { getEnero,getFebrero,getMarzo,getAbril,getMayo,getJunio,getJulio,getAgosto,getSeptiembre,getOctumbre,getNoviembre,getDiciembre } from "../peticion_Axios/registrollamada";

import { useState } from "react";

function Grafica() {
  const[Enero,setEnero]= useState([])
  const[Febrero,setFebrero]= useState([])
  const[Marzo,setMarzo]= useState([])
  const[Abril,setAbril]= useState([])
  const[Mayo,setMayo]= useState([])
  const[Junio,setJunio]= useState([])
  const[Julio,setJulio]= useState([])
  const[Agosto,setAgosto]= useState([])
  const[Septiembre,setSeptiembre]= useState([])
  const[Octumbre,setOctumbre]= useState([])
  const[Noviembre,setNoviembre]= useState([])
  const[Diciembre,setDiciembre]= useState([])
  
  useEffect(() => {
    getEnero(setEnero);
    getFebrero(setFebrero);
    getMarzo(setMarzo);
    getAbril(setAbril);
    getMayo(setMayo);
    getJunio(setJunio);
    getJulio(setJulio);
    getAgosto(setAgosto);
    getSeptiembre(setSeptiembre)
    getOctumbre(setOctumbre);
    getNoviembre(setNoviembre); 
    getDiciembre(setDiciembre);
    // Datos para el gráfico de barras
    
    const dataBar = {
      labels: ["Cotizados", "Cancelados", "En proceso", "Vendidos"],
      datasets: [
        {
          label: "Pedidos",
          data: [20, 63, 30, 80],
          backgroundColor: "#18eb05",
          borderColor: "#f9f9f9",
          borderWidth: 1,
          fill: true,
        },
      ],
    };

    // Datos para el gráfico de tarta
    const dataPie = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "junio", "julio","agosto", "septiembre", "octubre", "noviembre" ," diciembre"],
      datasets: [
        {
          data: [Enero,Febrero,Marzo,Abril, Mayo,Junio,Julio,Agosto,Septiembre,Octumbre,Noviembre,Diciembre],
          backgroundColor: ["#f00", "#04f61c", "#000", "#0546f9","#D2691E","#ED5565","#C4EA70","#7945BF","#FBD1D1","#1199B7","#F4D451","#F19195"],
          fill: true,
        },
      ],
    };

    // Datos para el gráfico de línea
    
    const dataLine = {
      
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "junio", "julio","agosto", "septiembre", "octubre", "noviembre" ," diciembre"],
      datasets: [
        {
          label: "Registro de llamadas por mes",
          data: [Enero,Febrero,Marzo,Abril, Mayo,Junio,Julio,Agosto,Septiembre,Octumbre,Noviembre,Diciembre],
          borderColor: "#2b4df2",
          fill: true,
          
        },
      ],
    };
    
    // Datos para el gráfico de área
    const dataArea = {
      labels: ["Cotizados", "Cancelados", "En proceso", "Vendidos"],
      datasets: [
        {
          label: "Pedidos",
          data: [50, 65, 70, 80, 95],
          backgroundColor: "rgba(43, 77, 242, 0.2)",
          borderColor: "#2b4df2",
          borderWidth: 1,
          fill: true,
        },
      ],
    };

    // Configuración común para todos los gráficos
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Crear el gráfico de barras
    const barChart = new Chart(document.getElementById("barChart"), {
      type: "bar",
      data: dataBar,
      options: chartOptions,
    });

    // Crear el gráfico de tarta
    const pieChart = new Chart(document.getElementById("pieChart"), {
      type: "pie",
      data: dataPie,
      options: chartOptions,
    });

    // Crear el gráfico de línea
    const lineChart = new Chart(document.getElementById("lineChart"), {
      type: "line",
      data: dataLine,
      options: chartOptions,
    });

    // Crear el gráfico de área
    const areaChart = new Chart(document.getElementById("areaChart"), {
      type: "line",
      data: dataArea,
      options: chartOptions,
    });
  
   
    // Limpia los gráficos al desmontar el componente
    return () => {
      barChart.destroy();
      pieChart.destroy();
      lineChart.destroy();
      areaChart.destroy();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Enero,Febrero,Marzo,Abril, Mayo,Junio,Julio,Agosto,Septiembre,Octumbre,Noviembre,Diciembre]);

  return (
    <Container>

      <Boxgrafica>
        <ChartContainer>
          {/* Gráfico de Barras */}
          <canvas id="barChart" width="400" height="250"></canvas>
        </ChartContainer>
        
        <ChartContainer>
          {/* Gráfico de Área */}
          <canvas id="areaChart" width="400" height="250"></canvas>
        </ChartContainer>

      </Boxgrafica>

      <Boxgrafica>
        <ChartContainer>
          {/* Gráfico de Línea */}
          <canvas id="lineChart" width="400" height="250"></canvas>
        </ChartContainer>

        <ChartContainer>
          {/* Gráfico de Tarta */}
          <canvas id="pieChart" width="400" height="250"></canvas>
        </ChartContainer>
      </Boxgrafica>
    </Container>
  );
}

export default Grafica;
