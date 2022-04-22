import React from "react";
import { useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link } from "react-router-dom";
import StarWars from "../../../img/star-wars-logo-0.png";
import "./navbar.css"

const Navbar = () => {
	const { store , actions }= useContext(Context);
	return (
		<nav className="navbar bg-white mb-5" >
			<Link to="/">
				<img src={StarWars} alt="Logo Star Wars" id="imageStar"/>
			</Link>
			<div id="button-favourites" className="ml-auto">
				<button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Favorites</button>
				<ul id="mar" className="dropdown-menu">
					{store.Favorites.map((fav, index )=>{return <div key={index}><li className="dropdown-item" href="#">{fav}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-scissors" viewBox="0 0 16 16"><path onClick={()=>actions.deleteFavorites(fav)} d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/></svg></li></div>})}
				</ul>
			</div>
		</nav>
	);
};
export default Navbar;