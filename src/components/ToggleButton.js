import React from 'react';
import './ToggleButton.css';

const ToggleButton = (props) => {
  return (
    // IF set onClick={props.toggleBank} on label toggleBank will be call twice because of capture pharse
    // console.log(e.target) to check
    <label className='switch'>
      <input type='checkbox' onClick={props.clicked} />
      <span className='slider round'></span>
    </label>
  );
};

export default ToggleButton;
