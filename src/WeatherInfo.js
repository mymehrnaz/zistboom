import React from "react";
import FormatedDate from "./FormatedDate.js";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return(
        <div className="weatherInfo">
            <div className="row">
                <div className="col-6">
                    <h1>{props.data.city}</h1>
                    <ul>
                        <li>
                            <FormatedDate date={props.data.date}/>, {props.data.description}
                        </li>
                        <li>
                            Humidity:<strong>{props.data.humidity}%</strong>, Wind:{""}<strong>{props.data.wind}km/h</strong>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-8">
                    <div className="temperature-container d-flex justify-content-end">
                        <WeatherIcon code={props.data.icon} size={52}/>
                    </div>
                    <span className="temperature">{Math.round(props.data.temperature)}</span>
                    <span className="unit">°C</span>
                </div>
            </div>
        </div>
    );

}