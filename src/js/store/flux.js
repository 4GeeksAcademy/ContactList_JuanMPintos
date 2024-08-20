const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [
				{
					name: "",
					phone: "",
					email: "",
					address: "",
					id: ""
				},


			],
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
				const response = await fetch("https://playground.4geeks.com/contact/agendas/JuanMPintos", {
					method: "POST",
					header: {
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
			agregarContacto: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/JuanMPintos/contacts", {
					method: "POST",
					header: {
						"Conent-Type": "application/json"
					},
					body: JSON.stringify([])
				})
				if (response.ok) {
					console.log("Contacto creado exitosamente")
				}
			},
			editarContacto: async () => {
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/JuanMPintos/contacts/${contact.id}`, {
					method: "PUT",
					header: {
						"Conent-Type": "application/json"
					},
					body: JSON.stringify()
					})
					if (response.ok){
						console.log("Contacto editado satisfactoriamente")
					}
			},



		}//ACA CIERRA EL ACTION// 
	}//ACA CIERRA EL RETURN//
}//CIERRA EL GET STATE//
export default getState;
