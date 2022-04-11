import React from "react";
import AllCharacters from "../component/AllCharacters.jsx"
import AllPlanets from "../component/AllPlanets.jsx";
import AllVehicles from "../component/AllVehicles.jsx";


export const Home = () => {
	return (
	<div>
		<AllCharacters />
		<AllPlanets />
	    <AllVehicles />
	</div>
);
}
export default Home;