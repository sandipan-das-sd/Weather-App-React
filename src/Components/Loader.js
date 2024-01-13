// Loader.js
import React from 'react';

export default function Loader() {
  return (
    <div style={loaderStyle}>
      <div style={spinnerStyle}></div>
    </div>
  );
}

const loaderStyle = {
  width: '48px',
  height: '48px',
  position: 'relative',
};

const spinnerStyle = {
  content: '',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '48em',
  height: '48em',
  backgroundImage: `
    radial-gradient(circle 10px, #FFF 100%, transparent 0),
    radial-gradient(circle 10px, #FFF 100%, transparent 0),
    radial-gradient(circle 10px, #FFF 100%, transparent 0),
    radial-gradient(circle 10px, #FFF 100%, transparent 0),
    radial-gradient(circle 10px, #FFF 100%, transparent 0),
    radial-gradient(circle 10px, #FFF 100%, transparent 0),
    radial-gradient(circle 10px, #FFF 100%, transparent 0),
    radial-gradient(circle 10px, #FFF 100%, transparent 0)
  `,
  backgroundPosition: '0em -18em, 0em 18em, 18em 0em, -18em 0em, 13em -13em, -13em -13em, 13em 13em, -13em 13em',
  backgroundRepeat: 'no-repeat',
  fontSize: '0.5px',
  borderRadius: '50%',
  animation: 'blast 1s ease-in infinite',
  '@keyframes blast': {
    '0%, 40%': {
      fontSize: '0.5px',
    },
    '70%': {
      opacity: 1,
      fontSize: '4px',
    },
    '100%': {
      fontSize: '6px',
      opacity: 0,
    },
  },
};
