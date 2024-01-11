import React, { Component } from "react";
import Search from "./Search";

class Weather extends Component {
  render() {
    return (
      <div className="container pt-4" style={{ height: "500px" }}>
        <Search />
        <div className="card  mt-4 ">
          <div className="card-body">
            <h5 className="card-title">Country</h5>

            <h5 className="card-title">City</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
