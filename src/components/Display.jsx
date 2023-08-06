import React from 'react';

const Display = (props) => {
  const displayStyle = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '4rem',
    padding: '0rem 1rem',
    maxWidth: '22rem',
    minHeight: '6rem',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    borderRadius: '1rem 1rem 0rem 0rem',
  };

  const dotContainer = {
    display: 'flex',
  };

  const dot = {
    width: '1rem',
    height: '1rem',
    borderRadius: '50%',
    marginTop: '0.5rem',
  };

  const red = {
    backgroundColor: 'red',
  };

  const yellow = {
    backgroundColor: 'yellow',
    margin: '0rem 1rem',
  };

  const green = {
    backgroundColor: 'green',
  };

  const value = {
    textAlign: 'end',
    position: 'absolute',
    margin: '1rem',
    right: '40%',
  };
  return (
    <div className="display" style={displayStyle}>
      <div className="three-dot-container" style={dotContainer}>
        <div className="dot" style={{ ...dot, ...red }}></div>
        <div className="dot" style={{ ...yellow, ...dot }}></div>
        <div className="dot" style={{ ...dot, ...green }}></div>
      </div>
      <div className="value" style={value}>
        {props.value}
      </div>
    </div>
  );
};

export default Display;
