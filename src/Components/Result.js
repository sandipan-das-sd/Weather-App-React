// Result.js
import React from "react";
import Loader from "./Loader";

export default function Result(props) {
  const { weatherData, isSearched } = props;

  function KToC(k) {
    return (k - 273.15).toFixed(2) + "°C";
  }

  function getTheDate(stamp) {
    const date = new Date(stamp * 1000);
    return date.toLocaleTimeString();
  }

  let showOnPage;

  if (weatherData === null) {
    if (!isSearched) {
      showOnPage = (
        <div>
          <p>Please Search a City</p>
        </div>
      );
    } else {
      showOnPage = (
        <div className="container-fluid">
          <h1 className="text-center">No Data to Show</h1>
        </div>
      );
    }
  } else {
    showOnPage = (
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt=""
                />
                {weatherData.name} ({KToC(weatherData.main.temp)})
                <span className="pl-2">
                  {weatherData.weather[0].description}
                </span>
              </h4>
              <h4 className="row">
                <div className="col">
                  <div className="row">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Feel Like</th>
                          <td>{KToC(weatherData.main.feels_like)}</td>
                        </tr>
                        <tr>
                          <th>Min Temp</th>
                          <td>{KToC(weatherData.main.temp_min)}</td>
                        </tr>
                        <tr>
                          <th>Max Temp</th>
                          <td>{KToC(weatherData.main.temp_max)}</td>
                        </tr>
                        <tr>
                          <th>Sun Rise</th>
                          <td>{getTheDate(weatherData.sys.sunrise)}</td>
                        </tr>
                        <tr>
                          <th>Sun Set</th>
                          <td>{getTheDate(weatherData.sys.sunset)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{showOnPage}</>;
}
