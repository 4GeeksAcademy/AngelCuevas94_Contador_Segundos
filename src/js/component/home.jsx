import React from "react";

//include images into your bundle


//create your first component
const Home = (props) => {
	return (
		<div className="container mt-5 ">
			<div className="row ">
				<div className=" col-lg-3"></div>
				<div className="col-2 col-lg-1 d-flex justify-content-center  border border-1 border border-light rounded " style={{backgroundColor:"#D6DBDF"}}>
					<h1 className="mt-5 text-center"style={{marginBottom:"40px", marginLeft:"10px", marginRight:"10px"}}><i className="fa-solid fa-clock"></i></h1>
				</div>
				<div className="col-2 col-lg-1 d-flex justify-content-center  border border-1 border border-light rounded " style={{backgroundColor:"#82E0AA"}}>
					<h1 className="mt-5 text-center">{props.decimasdesegundo}</h1>
				</div>	
				<div className="col-2 col-lg-1 d-flex justify-content-center border border-1 border-light rounded" style={{backgroundColor:"#ABEBC6 "}}>
					<h1 className=" mt-5">{props.segundos}</h1>
				</div>	
				<div className="col-2 col-lg-1 d-flex justify-content-center border border-1 border-light rounded" style={{backgroundColor:"#D5F5E3"}}>
					<h1 className="mt-5">{props.minutos}</h1>
				</div>	
				<div className="col-2 col-lg-1 d-flex justify-content-center border border-1 border-light rounded " style={{backgroundColor:"#EAFAF1"}}>
					<h1 className=" mt-5">{props.horas}</h1>
				</div>	
				<div className="col-2 col-lg-1 d-flex justify-content-center  border border-1 border border-light rounded " style={{backgroundColor:"#D6DBDF"}}>
					<h1 className="mt-5 text-center"style={{marginBottom:"40px", marginLeft:"10px", marginRight:"10px"}}><i className="fa-solid fa-clock"></i></h1>
				</div>
			</div>
				<div className="col-lg-3"></div>
			</div>
	);
};

export default Home;
