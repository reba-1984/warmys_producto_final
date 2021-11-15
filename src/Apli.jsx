
import React from "react";
import Principal from "./pages/Principal";
import App from "./pages/App";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Administrador from "./pages/Administrador";

function Apli() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="productos/*" element={<App />} />
        <Route path="login/*" element={<Login />} />
        <Route path="registro/*" element={<Registro />} />
        <Route path="administrador/*" element={<Administrador />} />
        
      </Routes>
    </BrowserRouter>
  );
}



export default Apli;
