import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Search() {
  return (
    <div className='row'>
      <div className='col-md-3 d-flex align-items-center'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Type City Name:-
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Kolkata"
            name='city'
            itemID='cityid'
          />
        </div>
      </div>
      <div className='col-md-2 d-flex align-items-center justify-content-center'>
        <p> Or </p>
      </div>
      <div className='col-md-3 d-flex align-items-center'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Enter Longitude
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="122.35875.65"
            name='longitude'
            itemID='longitudeid'
          />
        </div>
      </div>
      <div className='col-md-3 d-flex align-items-center'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Enter Latitude
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="122.35875.65"
            name='latitude'
            itemID='latitudeid'
          />
        </div>
      </div>
      <div className='col-md-1 d-flex align-items-center'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Search
          </label>
          <br/>
          <FontAwesomeIcon icon={faSearch} style={{ fontSize: '24px', color: 'gray', marginLeft: '5px' }} />
        </div>
      </div>
    </div>
  );
}
