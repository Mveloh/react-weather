import React from "react";
import "./weather.css";

export default function Weather(props) {
  let temperatureData = {
    city: "Durban",
    temperature: 19,
    date: "Wednesday 20:04",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 70,
    wind: 20,
  };

  return (
    <div className="Weather-app">
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{temperatureData.city}</h1>
          <ul>
            <li>Last updated: {temperatureData.date}</li>
            <li>{temperatureData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={temperatureData.imgUrl}
                alt={temperatureData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{temperatureData.temperature}</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {temperatureData.humidity}%</li>
              <li>Wind: {temperatureData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <small>
        <a
          href="https://github.com/Mveloh/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          open-source code
        </a>
        by
        <a
          href="https://linkedin.com/in/nomvelozulup"
          target="_blank"
          rel="noreferrer"
        >
          Nomvelo Zulu
        </a>
      </small>
    </div>
  );
}
