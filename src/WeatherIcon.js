import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props){
    const codeMapping = {
        "o1d":"CLEAR_DAY",
        "o1n":"CLEAR_NIGHT",
        "o2d":"PARTLY_CLOUDY_DAY",
        "o2n":"PARTLY_CLOUDY_NIGHT",
        "o3d":"PARTLY_CLOUDY_DAY",
        "o3n":"Y_CLOUDY_NIGHT",
        "o4d":"CLOUDY",
        "o4n":"CLOUDY",
        "o9d":"RAIN",
        "o9n":"RAIN",
        "o10d":"RAIN",
        "o10n":"RAIN",
        "o11d":"RAIN",
        "o11n":"RAIN",
        "o13d":"SNOW",
        "o13n":"SNOW",
        "o50d":"FOG",
        "o50n":"FOG",
};
return(
    <ReactAnimatedWeather icon = {codeMapping[props.code]} color= "#1e1e1e" size={props.size} animate={true}/>
);
}