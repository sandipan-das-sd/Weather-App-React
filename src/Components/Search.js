// Search.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
  return (
    <div className='row'>
      <div className='col-md-3 d-flex align-items-center'>
        <div className="mb-3">
          <label htmlFor="cityInput" className="form-label">
            Type City Name:-
          </label>
          <input
            type="text"
            className="form-control"
            id="cityInput"
            placeholder="Kolkata"
            name='city'
            value={props.city}
            onChange={props.change}
          />
        </div>
      </div>
      <div className='col-md-2 d-flex align-items-center justify-content-center'>
        <p> Or </p>
      </div>
      <div className='col-md-3 d-flex align-items-center'>
        <div className="mb-3">
          <label htmlFor="longitudeInput" className="form-label">
            Enter Longitude
          </label>
          <button className='btn fa fa-crosshairs' onClick={props.getLocation}></button>
          <input
            type="text"
            className="form-control"
            id="longitudeInput"
            placeholder="122.35875.65"
            name='lon'  // changed from 'longitude' to 'lon'
            value={props.lon}
            onChange={props.change}
          />
        </div>
      </div>
      <div className='col-md-3 d-flex align-items-center'>
        <div className="mb-3">
          <label htmlFor="latitudeInput" className="form-label">
            Enter Latitude
          </label>
          <input
            type="text"
            className="form-control"
            id="latitudeInput"
            placeholder="122.35875.65"
            name='lat'  // changed from 'latitude' to 'lat'
            value={props.lat}
            onChange={props.change}
          />
        </div>
      </div>
      <div className='col-md-1 d-flex align-items-center'>
      <div className="mb-3">
      <label htmlFor="searchButton" className="form-label">
        Search
      </label>
      <br />
      <button onClick={props.searchHandler} id="searchButton" className="btn btn-primary ">
        <FontAwesomeIcon icon={faSearch} style={{ fontSize: '24px', color: 'white', marginRight: '5px' }} />
        
      </button>
    </div>
      </div>
      
    </div>
  );
}

export default Search;
