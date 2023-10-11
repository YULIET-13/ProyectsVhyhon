import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {
  Enlace,
  PanelControl,
  Modulo,
  Submodulo,
  ContenedorVisual,
  ContenedorComponents, // Asegúrate de importar ContenedorComponents
} from "./styled";
import EmailCampaignComponent from "./campañacorreo/campaña";
import SMSCampaignComponent from "./comunicacion/comunicacion";
import Audiollamada from "./llamadaAudioModal/index";
import Promocion from "./promocion/promocion";

const modulesData = [
  {
    id: "EmailCampaign",
    name: "Communicattio",
    submodules: [
      {
        name: "Email Campaign",
        component: EmailCampaignComponent,
      },
      {
        name: "Llama Audio",
        component: Audiollamada,
      },
    ],
  },
  {
    id: "Adminitrativo",
    name: "Administrativo",
    submodules: [
      {
        name: "Pedidos",
        component: Promocion,
      },
      {
        name: "Promotion",
        component: Promocion,
      },
      // Agrega más submódulos según sea necesario
    ],
  },
  {
    id: "SMSCampaign",
    name: "SMS Campaign",
    submodules: [
      {
        name: "SMS Campaign",
        component: SMSCampaignComponent,
      },
    ],
  },
  // Agrega más módulos según sea necesario
];

const Campaign = () => {
  const [loading, setLoading] = useState(true);
  const [componenteAbierto, setComponenteAbierto] = useState(null);
  const [submoduloAbierto, setSubmoduloAbierto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("user");
    if (userToken) {
      try {
        const token = jwt_decode(userToken);
        console.log(token, "❤️❤️💕💕💕❤️");
        setLoading(false);
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [navigate]);

  const toggleComponente = (componente) => {
    if (componenteAbierto === componente) {
      setComponenteAbierto(null);
      setSubmoduloAbierto(null);
    } else {
      setComponenteAbierto(componente);
      setSubmoduloAbierto(null);
    }
  };

  const toggleSubmodulo = (submodulo) => {
    setSubmoduloAbierto(submodulo);
  };

  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <ContenedorVisual>
          <PanelControl>
            <h2>Panel de Control</h2>
            {modulesData.map((module) => (
              <div key={module.id}>
                <Modulo
                  onClick={() => toggleComponente(module.id)}
                  className={componenteAbierto === module.id ? "abierto" : ""}
                >
                  {module.name}
                </Modulo>
                {componenteAbierto === module.id &&
                  module.submodules.map((submodule) => (
                    <Submodulo key={submodule.name}>
                      <Enlace onClick={() => toggleSubmodulo(submodule)}>
                        {submodule.name}
                      </Enlace>
                    </Submodulo>
                  ))}
              </div>
            ))}
          </PanelControl>
          <ContenedorComponents>
            {componenteAbierto &&
              submoduloAbierto &&
              modulesData
                .find((module) => module.id === componenteAbierto)
                .submodules.map((submodule) => (
                  <div className="Pruebna" key={submodule.name}>
                    {submoduloAbierto.name === submodule.name &&
                      submodule.component && <submodule.component />}
                  </div>
                ))}
          </ContenedorComponents>
        </ContenedorVisual>
      )}
    </>
  );
};

export default Campaign;
