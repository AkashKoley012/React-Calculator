import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const btnStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
    border: '1px solid gray',
    fontSize: '2rem',
    width: props.btnBg ? '12rem' : '6rem',
    paddingRight: props.btnBg ? '6rem' : '0rem',
    cursor: 'pointer',
    height: '6rem',
  };
  return (
    <button style={btnStyle} onClick={() => props.click(props.value)}>
      {props.value}
    </button>
  );
};

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;
