import { URL } from "../Service/URL.js";

export const getPlanets = () => {
	const url = URL + "/planets"
	return fetch(url);
};

export const getPlanet = (id) => {
	const url = URL + "/planets"
	return fetch(`${url}/${1}`);
}