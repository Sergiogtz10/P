const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Characters: [],
			Character_info: [],
			Planets: [],
			Planets_info: [],
			Vehicles: [],
			Vehicles_info: [],
		},
		actions: {
		
			setCharacter_Info: (data) => {
					const store = getStore();
					setStore({...store, Character_info: data})
			},
			setPlanet_Info: (data) => {
					const store = getStore();
					setStore({...store, Planets_info: data})
			},
			setVehicles_Info: (data) => {
					const store = getStore();
					setStore({...store, Vehicles_info: data})
			},
			
		}
	};
};

export default getState;
