import React, { Component } from "react";
import Search from "./Search";
import axios from "axios";
import Result from "./Result";
import Recent from "./Recent";

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: "",
      lon: "",
      weatherData: null,
      city: "",
      isSearched: false,
      recent: [],
    };
  }

  removeRecent = (index) => {
    let recent = [...this.state.recent];
    recent.splice(index, 1);
    this.setState({ recent }, () => {
      window.localStorage.setItem("recent", JSON.stringify(this.state.recent));
    });
  };

  searchHandler = async () => {
    try {
      const { lat, lon, city } = this.state;

      if (lat !== "" && lon !== "" && isNaN(city)) {
        alert("Please clear latitude and longitude fields to search by city.");
        return;
      }

      if (city) {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bdebad92abb2bdb8dc467b4a6fefa86f`
        );

        this.setState(
          {
            weatherData: response.data,
            isSearched: true,
          },
          () => {
            this.addDataToRecent();
          }
        );
      } else {
        console.log("Please enter a city name.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    const data = window.localStorage.getItem("recent");
    let recent = data === null ? [] : JSON.parse(data);
    this.setState({ recent });
  }

  addDataToRecent = () => {
    let recent = this.state.recent;
    recent.push({
      lat: this.state.lat,
      lon: this.state.lon,
      city: this.state.city,
    });

    this.setState(
      {
        recent,
      },
      () => {
        window.localStorage.setItem(
          "recent",
          JSON.stringify(this.state.recent)
        );
      }
    );
  };

  changeHandler = (event) => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  };

  researchHandler = async (lat, lon) => {
    this.setState({ lat, lon, weatherData: null });

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bdebad92abb2bdb8dc467b4a6fefa86f`
      );

      this.setState({
        weatherData: response.data,
        city: response.data.name,
        isSearched: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  locationHandler = () => {
    this.setState({
      lat: "",
      lon: "",
      city: "",
      weatherData: null,
      isSearched: false,
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (res) => {
          try {
            const lat = res.coords.latitude;
            const lon = res.coords.longitude;

            if (isNaN(lat) || isNaN(lon)) {
              console.error("Invalid latitude or longitude values.");
              return;
            }

            this.setState({
              lat,
              lon,
            });

            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bdebad92abb2bdb8dc467b4a6fefa86f`
            );

            this.setState(
              {
                weatherData: response.data,
                city: response.data.name,
                isSearched: true,
              },
              () => {
                this.addDataToRecent();
              }
            );
          } catch (error) {
            console.error(error);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Location is not supported by the browser");
    }
  };

  render() {
    return (
      <div className="container pt-4" style={{ height: "500px" }}>
        <Recent
          recent={this.state.recent}
          research={this.researchHandler}
          removeRecent={this.removeRecent}
        />
        <Search
          lat={this.state.lat}
          lon={this.state.lon}
          city={this.state.city}
          weatherData={this.state.weatherData}
          change={this.changeHandler}
          getLocation={this.locationHandler}
          searchHandler={this.searchHandler}
        />
        <Result
          isSearched={this.state.isSearched}
          weatherData={this.state.weatherData}
        />
      </div>
    );
  }
}

export default Weather;
