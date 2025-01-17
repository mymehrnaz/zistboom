import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./App.css";

export default function Weather(props){
    const[weatherData,setWeatherData] = useState({ready:false});
    const[city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
        setWeatherData({
           ready:true,
           coordinates:response.data.coord,
           temperature:response.data.main.temp,
           humidity:response.data.main.humidity,
           date: new Date(response.data.dt*1000),
           description:response.data.weather[0].description,
           icon:response.data.weather[0].icon,
           wind:response.data.wind.speed, 
        });
        function handleSubmit(event){
            event.preventDefault();
            search();
        }
        function handleCityChange(event){
            setCity(event.target.value);
        }
        function search(){
            const apiKey = "7d478f69e1b2f5d563653f13f5f91d76";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
        }
        if (weatherData.ready){
            return(
                <div className="Weather">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-9">
                                <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/>

                            </div>
                            <div className="col-3">
                                <input type="submit" value="search" className="btn btn-primary w-100"/> 
                            </div>
                        </div>
                    </form>
                    <weatherInfo data={weatherData}/>
                    <WeatherForecast coordinates={weatherData.coordinates} city={weatherData.city}/>
                </div>
            );
        } 
        }
    }
  
