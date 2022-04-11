import { URL } from "../Service/URL.js";

export const getCharacters = () => {
	const url = URL + "/people"
	return fetch(url);
};
export const getCharacter = () => {
	const url = URL + "/people"
	return fetch(`${url}/${1}`);
}