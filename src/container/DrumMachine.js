import React, { Component } from 'react';
import Display from '../components/Display';
import DrumPad from '../components/DrumPad';
import './DrumMachine.css';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBank: props.bankOne,
      display: this.props.currentPadBankID,
    };
  }

  render() {
    const currentBank = this.props.bank;
    const drumPads = currentBank.map((pad) => {
      return (
        <DrumPad
          name={pad.keyTrigger}
          id={pad.id}
          url={pad.url}
          keyCode={pad.keyCode}
          key={pad.id}
          powerON={this.props.powerON}
          displayHandler={this.props.displayHandler}
        />
      );
    });
    // console.log(this.props.soundInfo);

    return (
      <div id='drum-machine'>
        <div className='drum-pad-container'>{drumPads}</div>
        <Display
          display={this.props.currentPadBankID}
          toggleBank={this.props.toggleBank}
          sliderVal={this.props.sliderVal}
          controlVolume={this.props.controlVolume}
          powerControl={this.props.powerControl}
        />
      </div>
    );
  }
}
export default DrumMachine;
