import React, { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
// import Navbar from "./components/Navbar";

function App() {
  const [vista, setVista] = useState("contacto"); 

  return (
  <div>
    <h1>Mueblería Hermanos Jota</h1>

    {vista === "contacto" && <ContactForm />}

    {/* Dejo el navbar comentado por si se necesita usarlo */}
    {/* <Navbar onCambiarVista={setVista} /> */}
  </div>
);
}

export default App;