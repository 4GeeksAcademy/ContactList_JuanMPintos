import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Vistadeagregarcontactos } from "./views/vistadeagregarcontactos";
import { VistaDeContactos } from "./views/vistadecontactos";
import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Routes>
						<Route path="/" element={<VistaDeContactos />} />
						<Route path="/" element={<Vistadeagregarcontactos />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
