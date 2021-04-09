import { Component } from 'react';
import './App.css';
import DrumMachine from './container/DrumMachine';
import ReactFCCtest from 'react-fcctest';

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
  },
];

class App extends Component {
  state = {
    powerON: true,
    currentBank: bankOne,
    currentPadBankID: 'Heater Kit',
    sliderVal: 0.3,
  };
  // componentDidMount() {
  //   console.log(document.querySelectorAll('.drum-pad'));
  // }

  toggleBank = (e) => {
    if (this.state.powerON) {
      if (this.state.currentPadBankID === 'Heater Kit') {
        this.setState({
          currentBank: bankTwo,
          currentPadBankID: 'Smooth Piano',
        });
      } else {
        this.setState({
          currentBank: bankOne,
          currentPadBankID: 'Heater Kit',
        });
      }
    } else {
      e.preventDefault();
    }
  };
  displayHandler = (text) => {
    console.log(text);
    this.setState({ currentPadBankID: text });
  };

  controlVolume = (e) => {
    if (this.state.powerON) {
      this.setState({ sliderVal: e.target.value });
    }
  };
  powerControl = () => {
    console.log(this.state.powerON);
    this.setState({ powerON: !this.state.powerON });
  };
  render() {
    {
      // Turn nodelist to array
      //https://attacomsian.com/blog/javascript-convert-nodelist-to-array#:~:text=In%20modern%20JavaScript%2C%20the%20simplest,an%20array%20const%20divsArr%20%3D%20Array.
      const audios = [].slice.call(document.getElementsByClassName('clip'));

      audios.forEach((sound) => (sound.volume = this.state.sliderVal));
      // console.log(document.getElementsByClassName('audio'));
      // can't select cause queryselector only works on mounted components
      // console.log(document.querySelectorAll('.drum-pad'));
    }
    return (
      <div className='App'>
        <ReactFCCtest />
        <DrumMachine
          bank={this.state.currentBank}
          toggleBank={this.toggleBank}
          currentPadBankID={this.state.currentPadBankID}
          controlVolume={this.controlVolume}
          sliderVal={this.state.sliderVal}
          powerControl={this.powerControl}
          powerON={this.state.powerON}
          displayHandler={this.displayHandler}
        />
      </div>
    );
  }
}

export default App;
