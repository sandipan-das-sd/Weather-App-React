// Recent.js
import React from 'react';

export default function Recent(props) {
  let data;

  if (props.recent == null) {
    data = "";
  } else {
    // Mapping through the recent data and rendering each city
    data = props.recent.map((recentData, index) => (
      <li key={index} style={styles.listItem}>
        {/* Check if the recent item is a city */}
        {isNaN(recentData.lat) && isNaN(recentData.lon) ? (
          // If it's a city, prevent clicking on "Get Direction"
          <span style={styles.cityName}>{recentData.city}</span>
        ) : (
          // If it's coordinates, allow clicking on "Get Direction"
          <span style={styles.coordinates} onClick={() => props.research(recentData.lat, recentData.lon)}>
            {recentData.city}
          </span>
        )}
        {/* Button to remove the recent search */}
        <button style={styles.removeButton} onClick={() => props.removeRecent(index)}>Remove</button>
      </li>
    ));
  }

  return (
    <div>
      <h2 style={styles.heading}>Recent Searches</h2>
      <ul style={styles.list}>{data}</ul>
    </div>
  );
}

// Inline styles
const styles = {
  heading: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  list: {
    padding: 0,
    listStyle: 'none',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f8f9fa',
  },
  cityName: {
    marginRight: '10px',
    cursor: 'default',
    color: '#007bff',
    textDecoration: 'underline',
  },
  coordinates: {
    marginRight: '10px',
    cursor: 'pointer',
    color: '#007bff',
    textDecoration: 'underline',
  },
  removeButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
