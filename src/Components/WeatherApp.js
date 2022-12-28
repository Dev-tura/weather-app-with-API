import React, { useState } from "react";
import "../Components/WeatherApp.css";
import axios from "axios";
import sun from "../Images/sun.png";

const WeatherApp = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=7be49918741cf5918f3f758445a7e1fe

`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="myPage">
      <br></br>
      <br></br>
      <div className="form">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          type="text"
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          style={{
            background: "rgba (255, 255, 255, 0.1)",
            height: 35,
            borderRadius: 15,
            borderColor: "brown",
          }}
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div className="myPage-Info">
        <div>
          <p>{data.name}</p>
          {data.main ? <h1>{data.main.temp}°F</h1> : null}
        </div>
        <img src={sun} alt="" />
        <div className="clouds">{data.weather ? <p>{data.weather[0].main}</p> : null}</div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {data.name != undefined && (
        <div className="myPage-Info2">
          <div className="margin">
            {data.main ? <p>{data.main.feels_like}°F </p> : null}
            <p>Feels Like</p>
          </div>
          <div className="margin">
            {data.main ? <p>{data.main.humidity}% </p> : null}
            <p>Humidity</p>
          </div>
          <div className="margin">
            {data.main ? <p>{data.main.winds}MPH</p> : null}
            <p>Winds</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
