import React from "react";

//include images into your bundle


//create your first component
const Home = (props) => {
	return (
		<div className="container mt-5">
			<div className="row ">
				<div className="col-lg-4"></div>
				<div className="col-lg-1  border border-3" style={{backgroundColor:"#e9ecef"}}>
					<h1 className="text-center mt-5">{props.decimasdesegundo}</h1>
				</div>	
				<div className="col-lg-1 border border-3" style={{backgroundColor:"#e9ecef"}}>
					<h1 className="text-center mt-5">{props.segundos}</h1>
				</div>	
				<div className="col-lg-1  border border-3" style={{backgroundColor:"#e9ecef"}}>
					<h1 className="text-center mt-5">{props.minutos}</h1>
				</div>	
				<div className="col-lg-1  border border-3 " style={{backgroundColor:"#e9ecef"}}>
					<h1 className="text-center mt-5">{props.horas}</h1>
				</div>	
				</div>
				<div className="col-lg-4"></div>
			</div>
	);
};

export default Home;
