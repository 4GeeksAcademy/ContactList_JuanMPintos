import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const VistaDeAgregarContactos = () => {

//useStates//
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("")

//useContext//
  const {store, actions} = useContext(Context);

//handle name//
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

/*
Enviar datos para agregar contacto
1. crear funcion enviar datos
2. se guardan en una variable que tienen los elementos que la api pide
3. y se llama la funcion de agregarcontacto con la variable que contiene la informacion
*/

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
        <div className="mb-3">
          <label for="Full Name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="full name" placeholder="Full Name" onChange={handleNameChange}/>
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">E-mail</label>
          <input type="email" className="form-control" id="email" placeholder="Enter e-mail" onChange={handleEmailChange}/>
        </div>
        <div className="mb-3">
          <label for="Phone" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phone" placeholder="Enter phone" onChange={handlePhoneChange}/>
        </div>
        <div className="mb-3">
          <label for="Adress" className="form-label">Adress</label>
          <input type="text" className="form-control" id="adress" placeholder="Enter Adress" onChange={handleAddressChange}/>
        </div>
        <div className="mb-3 form-check">
        </div>
        <button type="submit" className="btn btn-primary" onClick={() => enviarDatos()}>Save</button>
        <Link to="/">
        <p>Or get back to conctact</p>
        </Link>
      </form>
    </div>
  )
}


/*
//AGREGAR CONTACTO//

1. Crear useState para cada variable
2. Crear funcion para manejar los valores del input con un onChange
3. event.target.value en el useState de cada variable
*/
