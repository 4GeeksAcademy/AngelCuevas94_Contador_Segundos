import React from "react";

//include images into your bundle


//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
			
			<h1 className="text-center mt-5">{props.decimasdesegundo}</h1>
			<h1 className="text-center mt-5">{props.segundos}</h1>
			<h1 className="text-center mt-5">{props.minutos}</h1>
			<h1 className="text-center mt-5">{props.horas}</h1>


		</div>
		
	);
};

export default Home;
