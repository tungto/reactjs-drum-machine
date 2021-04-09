import React, { Component } from 'react';
import './DrumPad.css';

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  playSound = (e) => {
    // console.log(this.props.powerON);
    if (this.props.powerON) {
      const sound = document.querySelector(`#${this.props.name}`);
      sound.play();
    }
  };

  handleKeyDown = (e) => {
    // console.log(e.keyCode);
    if (this.props.powerON) {
      if (e.keyCode === this.props.keyCode) {
        this.playSound();
        console.log(this.props.url);
      }
    }
  };

  clicked = () => {
    console.log('iafd');
    console.log(this.props.id);
    this.playSound();
    this.props.displayHandler(this.props.id);
  };

  render() {
    return (
      <button onClick={this.clicked} className='drum-pad' id={this.props.id}>
        <audio
          src={this.props.url}
          id={this.props.name}
          className='audio clip'
        />
        {this.props.name}
      </button>
    );
  }
}

export default DrumPad;
