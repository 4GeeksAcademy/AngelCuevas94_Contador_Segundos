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

setInterval(() => {
    ReactDOM.createRoot(document.getElementById('app')).render(<Home decimasdesegundo={decimasdesegundo} segundos={segundos} minutos={minutos} horas={horas}/>);

    
    decimasdesegundo ++

    (decimasdesegundo == 100 ? segundos++ : segundos);
    (decimasdesegundo == 100 ? decimasdesegundo =0 : decimasdesegundo);
    (segundos == 60 ? minutos ++ :segundos);
    (segundos == 60 ? segundos = 0 : segundos);
    (minutos == 60 ? horas ++ : minutos);
    (horas == 2 ? horas = 0 : horas);
    
    

}, 10);

