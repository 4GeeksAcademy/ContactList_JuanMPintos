import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const VistaDeEditarContacto = () => {
 
    const { store, actions } = useContext(Context);
    const [contacto, setContacto] = useState(store.contactAEditar)
    const navigate = useNavigate()
    const handleChange = (e) => {
      setContacto({...contacto, [e.target.name]: e.target.value})
 }
    const handleSubmit = (e) => {
      e.preventDefault()
    actions.editarContacto(contacto, navigate)
 }
  return(
        <div className="contenedor_editars_contacto">
      <h1>Edit contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Full Name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="full name" placeholder="Full Name" value={contacto.name} name="name" onChange={(e) => {handleChange(e)}} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail</label>
          <input type="email" className="form-control" id="email" placeholder="Enter e-mail" value={contacto.email} name="email" onChange={(e) => {handleChange(e)}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="Phone" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phone" placeholder="Enter phone" value={contacto.phone} name="phone" onChange={(e) => {handleChange(e)}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="Adress" className="form-label">Adress</label>
          <input type="text" className="form-control" id="adress" placeholder="Enter Adress" value={contacto.address} name="address" onChange={(e) => {handleChange(e)}}/>
        </div>
        <div className="mb-3 form-check">
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
        <Link to="/">
        <p>Or get back to conctact</p>
        </Link>
      </form>
    </div>
    )
}