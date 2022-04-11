import { URL } from "../Service/URL.js";

export const getVehicles = () => {
	const url = URL + "/starships"
	return fetch(url);
};

export const getVehicle = (id) => {
	const url = URL + "/starships"
	return fetch(`${url}/${3}`);
}