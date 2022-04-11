import React from "react";
import { Link } from "react-router-dom";
import StarWars from "../../../img/star-wars-logo-0.png";
import "./navbar.css"

const Navbar = () => {
	return (
		<nav className="navbar bg-white mb-5" >
			<Link to="/">
				<img src={StarWars} alt="Logo Star Wars" id="imageStar"/>
			</Link>
			<div id="button-favourites" className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-warning">Favourites</button>
				</Link>
			</div>
		</nav>
	);
};
export default Navbar;