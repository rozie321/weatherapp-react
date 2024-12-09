import React from "react";
import axios from "axios";

export default function Weather(props){
    function showWeather(response){
        alert(`The weather is ${response.data.main.temp} °C`)
    }
    let apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather)

    return(
         <h2>Hello temperature</h2>
    )
}