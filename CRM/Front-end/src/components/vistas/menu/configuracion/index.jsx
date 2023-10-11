import React, { useEffect, useState } from "react";
import {DivContainer,Container,Caja1,Caja2,Caja4,Cajita,Button} from "./styled";
// import imagen from "../../../img/logito.png";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Retorno1() {
  const navigate = useNavigate();
  const [perfilVisible, setPerfilVisible] = useState(false);
  const [userData, setUserData] = useState({});
  const verPerfil = () => {
    setPerfilVisible(!perfilVisible);
  };

  const Logout = () => {
  localStorage.removeItem("user")
  navigate("/")
  };


  
  useEffect(() => {
    const userToken = localStorage.getItem("user");
    console.log(userToken,"❤️❤️");
    if(userToken){
        try {
        const token = jwt_decode(userToken);
  setUserData(token);
        } catch (error) {
            console.error("Error al decodificar el token:", error);
            navigate('/'); 
        }
    }else{
        navigate('/');
    }
},[navigate])


  return (
    <>
      <DivContainer>
        <Container>
          <Caja1>
            
            <p style={{fontStyle: "italic",fontSize: "13px",color: "#060a51",marginLeft: "7px"}}>{userData?.nombreEmpresa ? userData.nombreEmpresa.toUpperCase() : ''}</p>
            <p style={{fontStyle: "italic",fontSize: "15px",color: "#ffffff6f",marginLeft: "7px",}}>I sold this month</p>
            <Cajita>
              <h2 style={{ fontSize: "25px", color: "whitw", marginLeft: "7px" }}>capital 0,00</h2>
            </Cajita>
          </Caja1>
          <Caja2 style={{marginTop:"10px"}}>
            <Link to="/perfilusuario" onClick={verPerfil} style={{ textDecoration: "none", color: "white"}}>
              <h3 style={{fontStyle: "italic",fontSize: "16px",color: "white",marginLeft: "7px"}}>profile{" "}</h3>
            </Link>
          </Caja2>
          <Caja2>
          <Link to="/grafica" onClick={verPerfil} style={{ textDecoration: "none", color: "white"}}>
              <h3 style={{fontStyle: "italic",fontSize: "16px",color: "#ffffff",marginLeft: "7px"}}>Graphic history{" "}</h3>
            </Link>
          </Caja2>
          <Caja4>
              <Button onClick={Logout}>Go out</Button>
          </Caja4>
        </Container>
      </DivContainer>
    </>
  );
}
export default Retorno1;


// import React, { useEffect, useState,useRef } from "react";
// import {DivContainer,Container,Caja1,Caja2,Caja4,Cajita,Button} from "./styled";
// // import imagen from "../../../img/logito.png";
// import { Link, useNavigate } from "react-router-dom";
// import jwt_decode from "jwt-decode";

// function Retorno1() {
//   const navigate = useNavigate();
//   const [perfilVisible, setPerfilVisible] = useState(true);
//   const [userData, setUserData] = useState({});
 

//   const verPerfil = () => {
//     setPerfilVisible(!perfilVisible);
//   };

//   const Logout = () => {
//   localStorage.removeItem("user")
//   navigate("/")
//   };


//   useEffect(() => {
//     const userToken = localStorage.getItem("user");
//     if(userToken){
//         try {
//         const token = jwt_decode(userToken);
//   setUserData(token);
//         } catch (error) {
//             console.error("Error al decodificar el token:", error);
//             navigate('/'); 
//         }
//     }else{
//         navigate('/');
//     }
// },[navigate])

// const perfilRef = useRef(null);
// const [modalAbierto, setModalAbierto] = useState(true);
// useEffect(()=> {
//   const handleDocumentClick = (e) => {
//   if (perfilRef.current && !perfilRef.current.contains(e.target)) {
//     setModalAbierto(modalAbierto);
//   }
// };
// document.addEventListener("click", handleDocumentClick);
// return() => {
//   document.removeEventListener("click", handleDocumentClick);
// }
// },[])

//   return (
//     <>
//     <div ref={perfilRef}>
      
//       <DivContainer>

//         <Container>
//           <Caja1>
            
//             <p style={{fontStyle: "italic",fontSize: "13px",color: "#060a51",marginLeft: "7px"}}>{userData?.nombreEmpresa ? userData.nombreEmpresa.toUpperCase() : ''}</p>
//             <p style={{fontStyle: "italic",fontSize: "15px",color: "#ffffff6f",marginLeft: "7px",}}>I sold this month</p>
//             <Cajita>
//               <h2 style={{ fontSize: "25px", color: "whitw", marginLeft: "7px" }}>capital 0,00</h2>
//             </Cajita>
//           </Caja1>
//           <Caja2 style={{marginTop:"10px"}}>
//             <Link to="/perfilusuario" onClick={verPerfil} style={{ textDecoration: "none", color: "white"}}>
//               <h3 style={{fontStyle: "italic",fontSize: "16px",color: "white",marginLeft: "7px"}}>profile{" "}</h3>
//             </Link>
//           </Caja2>
//           <Caja2>
//           <Link to="/grafica" onClick={verPerfil} style={{ textDecoration: "none", color: "white"}}>
//               <h3 style={{fontStyle: "italic",fontSize: "16px",color: "#ffffff",marginLeft: "7px"}}>Graphic history{" "}</h3>
//             </Link>
//           </Caja2>
//           <Caja4 ref={perfilRef} style={{ display: perfilVisible ? "block" : "none" }}
//           >
//               <Button onClick={Logout}>Go out</Button>
//           </Caja4>
//         </Container>
//       </DivContainer>
//       </div>
//     </>
   
//   );
// }
// export default Retorno1;
