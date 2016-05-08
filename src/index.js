import React, { Component } from 'react';
import random from 'lodash/random';
import sampleSize from 'lodash/sampleSize';
import FlipMove from 'react-flip-move';

import './styles.scss';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function getSubsetOfAlphabet() {
  const numToPick = random(1, 26);
  return sampleSize(alphabet, numToPick).sort();
}

class LetterDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: getSubsetOfAlphabet(),
    };
  }

  componentWillMount() {
    this.interval = window.setInterval(() => {
      this.setState({
        letters: getSubsetOfAlphabet(),
      });
    }, 1500);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  renderLetters() {
    return this.state.letters.map(letter => (
      <span key={letter}>{letter}</span>
    ))
  }

  render() {
    return (
      <div className="letter-demo">
        <FlipMove>
          {this.renderLetters()}
        </FlipMove>
      </div>
    );
  }
}

export default LetterDemo;
