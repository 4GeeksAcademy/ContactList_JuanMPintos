const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [
				{
					name: "Juan",
					phone: "123456",
					email: "djjs@kaka",
					address: "dkdkdkd",
					id: "0"
				},
				


			],
			contactAEditar: {}
			
		},
		actions: {

			cargarAgenda: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/JuanMPintos");
				const data = await response.json();
				setStore({
					contact: data.contacts
				}
				)

			},
			crearAgenda: async () => {

				const checkResponse = await fetch("https://playground.4geeks.com/contact/agendas/JuanMPintos");
				if (checkResponse.ok ) {
					console.log("La agenda ya existe");
					return;
				}

				const response = await fetch("https://playground.4geeks.com/contact/agendas/JuanMPintos", {
					method: "POST",
					headers: {
						"Conent-Type": "application/json"
					},
					body: JSON.stringify()
				})

				if (response.ok) {
					console.log("Agenda creada exitosamente")
				}
			},
			borrarContacto: async (id) => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/JuanMPintos/contacts/"+id, {
					method: "DELETE",
									})
				if (response.ok) {
					console.log("Contacto borrado exitosamente")
				}
				getActions().cargarAgenda();
			},
			agregarContacto: async (dataToSend) => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/JuanMPintos/contacts", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(dataToSend)
				})
				if (response.ok) {
					alert("Contacto creado exitosamente");
				}
			},
			editarContacto: async (datosAEditar, navigate) => {
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/JuanMPintos/contacts/${datosAEditar.id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(datosAEditar)
					})
					if (response.ok){
						console.log("Contacto editado satisfactoriamente")
						getActions().cargarAgenda()
						navigate("/")
					}
				
			},
			contactoAEditar: (contacto) => {
				setStore({
					contactAEditar: contacto
				})
			}


		}//ACA CIERRA EL ACTION// 
	}//ACA CIERRA EL RETURN//
}//CIERRA EL GET STATE//
export default getState;
