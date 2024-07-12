import React from "react";

//include images into your bundle


//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
			
			<h1 className="text-center mt-5">{props.contador}</h1>
			<h1 className="text-center mt-5">{props.contadormili}</h1>
			

		</div>
	);
};

export default Home;
