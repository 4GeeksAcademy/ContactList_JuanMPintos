const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
    {
      name: "Juan",
      phone: "123-456-789",
      email: "juan@example.com",
      address: "Mitre 2129",
      id: 0
    },
	{
		name: "Sole",
		phone: "234-456-322",
		email: "sole@gmail.com",
		address: "flakner 4130",
		id: 1
	}
  ]
		},
		actions: {
			//CREAR AGENDA//
			crearAgenda = () => {

			}
			




		}
	}
};


export default getState;
