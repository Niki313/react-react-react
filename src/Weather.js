import React  from "react";
import axios from "axios";
import { Audio } from 'react-loader-spinner';


export default function Weather(props) {

    function handleResponse (response){
        alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}°C`);
    }
   

        let apiKey = "3c3046eb3665ca592e70fff5ccda526b";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return (
            <div>
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="violet"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                />   
            </div>
                );
}

