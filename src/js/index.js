//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let decimasdesegundo = 0
let segundos = 0
let minutos = 0
let horas = 0
//decimas de segundo
setInterval(()=>{

    ReactDOM.createRoot(document.getElementById('app')).render(<Home decimasdesegundo={decimasdesegundo} segundos={segundos} minutos={minutos} horas={horas}/>);
    
    decimasdesegundo ++

    (decimasdesegundo == 60? decimasdesegundo=0 : decimasdesegundo );
   
},10)
//segundos
setInterval(() => {

    (decimasdesegundo == 99 ? segundos = 1: decimasdesegundo);
    segundos ++
    (segundos == 60 ? segundos =0 : segundos);
    
}, 1000);
//minutos
setInterval(() => {
    (segundos == 59 ? minutos = 1 : segundos);
    minutos ++
    (minutos == 60 ? minutos = 0 : minutos)
},60000 );