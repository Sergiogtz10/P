import { URL } from "../Service/URL.js";

export const getCharacters = () => {
	const url = URL + "/people"
	return fetch(url);
};
export const getCharacter = (id) => {
	const url = URL + "/people"
	return fetch(`${url}/${id}`);
}