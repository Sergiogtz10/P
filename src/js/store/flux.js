const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Characters: [],
			Character_info: [],
			Planets: [],
			Planets_info: [],
			Vehicles: [],
			Vehicles_info: [],
			Favorites: []
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
			setCharacters : (data) => {
				const store = getStore();
				setStore({...store, Characters: data})
			},
			setPlanets : (data) => {
				const store = getStore();
				setStore({...store, Planets : data})
			},
			setVehicles : (data) => {
				const store = getStore();
				setStore({...store, Vehicles : data})
			},
			appendFavorites(thing){
				const store = getStore();
				setStore({...store, Favorites:[...store.Favorites, thing]});
			},
	
			deleteFavorites(thing){
				const store = getStore();
				const favs = store.favorites.filter((fav)=>fav!=thing)
				store.Favorites=[];
				favs.map((favourite)=>{
					setStore({...store,Favorites:[...store.Favorites,favourite]});
				})
				
			},
		
		}
	};
};

export default getState;
