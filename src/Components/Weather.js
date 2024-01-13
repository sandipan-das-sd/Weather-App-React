// Weather.js
import React, { Component } from "react";
import Search from "./Search";
import axios from "axios";
import Result from "./Result";
import Recent from "./Recent";


class Weather extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      lat: "",
      lon: "",
      weatherData: null,
      city: "",
      isSearched: false,
      recent: [],
    };
  }

  // Handler for removing a recent search
  removeRecent = (index) => {
    let recent = [...this.state.recent];
    recent.splice(index, 1);
    this.setState({ recent }, () => {
      window.localStorage.setItem('recent', JSON.stringify(this.state.recent));
    });
  };

  // Handler for searching weather data
  searchHandler = async () => {
    try {
      const { lat, lon, city } = this.state;

      // Check if both latitude and longitude are provided
      if (lat !== "" && lon !== "" && isNaN(city)) {
        // Show alert and prevent further action
        alert("Please clear latitude and longitude fields to search by city.");
        return;
      }

      // Check if city is provided
      if (city) {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bdebad92abb2bdb8dc467b4a6fefa86f`
        );

        // Update the state with the weather data and city name
        this.setState(
          {
            weatherData: response.data,
            isSearched: true,
          },
          () => {
            // Add the current search to recent searches
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

  // Lifecycle method - runs after the component is mounted
  componentDidMount() {
    // Retrieve recent searches from local storage
    const data = window.localStorage.getItem('recent');
    let recent = data === null ? [] : JSON.parse(data);

    // Update the state with recent searches
    this.setState({ recent });
  }

  // Add current search data to recent searches
  addDataToRecent = () => {
    let recent = this.state.recent;
    recent.push({
      lat: this.state.lat,
      lon: this.state.lon,
      city: this.state.city,
    });

    // Update state and store recent searches in local storage
    this.setState({
      recent
    }, () => {
      window.localStorage.setItem('recent', JSON.stringify(this.state.recent));
    });
  };

  // Handler for input changes
  changeHandler = (event) => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  };

  // Handler for researching with new coordinates
  researchHandler = async (lat, lon) => {
    this.setState({ lat, lon, weatherData: null });

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bdebad92abb2bdb8dc467b4a6fefa86f`
      );

      // Update the state with the weather data and city name
      this.setState({
        weatherData: response.data,
        city: response.data.name,
        isSearched: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Handler for getting location
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

            // Update the state with the weather data and city name
            this.setState(
              {
                weatherData: response.data,
                city: response.data.name,
                isSearched: true,
              },
              () => {
                // Add the current search to recent searches
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
        {/* Recent component to display recent searches */}
        <Recent recent={this.state.recent} research={this.researchHandler} removeRecent={this.removeRecent} />
        {/* Search component */}
        <Search
          lat={this.state.lat}
          lon={this.state.lon}
          city={this.state.city}
          weatherData={this.state.weatherData}
          change={this.changeHandler}
          getLocation={this.locationHandler}
          searchHandler={this.searchHandler}
        />
        {/* Result component to display weather data */}
        <Result
          isSearched={this.state.isSearched}
          weatherData={this.state.weatherData}
        />
      </div>
    );
  }
}

export default Weather;
