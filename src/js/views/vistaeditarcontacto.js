import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const VistaDeEditarContacto = () => {
    
    return(
        <div className="contenedor_editar_contacto">
      <h1>Edit contact</h1>
      <form>
        <div className="mb-3">
          <label for="Full Name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="full name" placeholder="Full Name" />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">E-mail</label>
          <input type="email" className="form-control" id="email" placeholder="Enter e-mail" />
        </div>
        <div className="mb-3">
          <label for="Phone" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phone" placeholder="Enter phone"/>
        </div>
        <div className="mb-3">
          <label for="Adress" className="form-label">Adress</label>
          <input type="text" className="form-control" id="adress" placeholder="Enter Adress"/>
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