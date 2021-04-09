import React from 'react';
import ToggleButton from './ToggleButton';
import './Display.css';

const Display = (props) => {
  return (
    <div className='display-container drum-part' id='display'>
      <ToggleButton clicked={props.powerControl} />
      <div className='display'>
        <span>{props.display}</span>
      </div>
      <div className='slidecontainer'>
        <input
          type='range'
          max='1'
          min='0'
          step='0.01'
          className='slider--volume'
          id='myRange'
          onChange={props.controlVolume}
          value={props.sliderVal}
        />
      </div>
      <ToggleButton clicked={props.toggleBank} />
    </div>
  );
};

export default Display;
