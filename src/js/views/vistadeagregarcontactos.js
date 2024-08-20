import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const VistaDeAgregarContactos = () => {

  return (
    <div className="contenedor_agregar_contacto">
      <h1>Add new contact</h1>
      <form>
        <div class="mb-3">
          <label for="Full Name" class="form-label">Full Name</label>
          <input type="text" className="form-control" id="full name" placeholder="Full Name" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">E-mail</label>
          <input type="text" className="form-control" id="email" placeholder="Enter e-mail" />
        </div>
        <div class="mb-3">
          <label for="Phone" class="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phone" placeholder="Enter phone" />
        </div>
        <div class="mb-3">
          <label for="Adress" class="form-label">Adress</label>
          <input type="text" className="form-control" id="adress" placeholder="Enter Adress" />
        </div>
        <div class="mb-3 form-check">
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
        <Link to="/">
        <p>or get back to conctact</p>
        </Link>
      </form>
    </div>
  )
}