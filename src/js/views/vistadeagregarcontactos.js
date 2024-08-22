import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const VistaDeAgregarContactos = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("")

  const {store, actions} = useContext(Context);

  const handleNameChange = (event) => {
    setName(event.target.value)
  };
//handle email//
const handleEmailChange = (event) => {
  setEmail(event.target.value)
};
//handle phone//
const handlePhoneChange = (event) => {
  setPhone(event.target.value)
};
//handle address//
const handleAddressChange = (event) => {
  setAddress(event.target.value)
};
  
const enviarDatos = () => {
  const dataToSend = {
    name, phone, email, address
  }
actions.agregarContacto(dataToSend)
}


  return (
    <div className="contenedor_agregar_contacto">
      <h1>Add new contact</h1>
      <form>
        <div class="mb-3">
          <label for="Full Name" class="form-label">Full Name</label>
          <input type="text" className="form-control" id="full name" placeholder="Full Name" onChange={handleNameChange}/>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">E-mail</label>
          <input type="email" className="form-control" id="email" placeholder="Enter e-mail" onChange={handleEmailChange}/>
        </div>
        <div class="mb-3">
          <label for="Phone" class="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phone" placeholder="Enter phone" onChange={handlePhoneChange}/>
        </div>
        <div class="mb-3">
          <label for="Adress" class="form-label">Adress</label>
          <input type="text" className="form-control" id="adress" placeholder="Enter Adress" onChange={handleAddressChange}/>
        </div>
        <div class="mb-3 form-check">
        </div>
        <button type="submit" className="btn btn-primary" onClick={() => enviarDatos()}>Save</button>
        <Link to="/">
        <p>Or get back to conctact</p>
        </Link>
      </form>
    </div>
  )
}