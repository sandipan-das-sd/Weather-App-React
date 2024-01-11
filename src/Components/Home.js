import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div>
      <div
        className='d-flex justify-content-center bg-white content-container'
        style={{
          height: "500px",
        }}
      >
        <div
          className='align-self-center'
          style={{
            color: "black",
          }}
        >
          <h1 className='brand-font d-inline pr-3'>
            Weather App <FontAwesomeIcon icon={faCloud} />
          </h1>
          <p>Free Weather App</p>
        </div>
      </div>
    </div>
  );
}
