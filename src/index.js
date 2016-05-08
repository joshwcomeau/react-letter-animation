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
      letters: alphabet,
    };
  }

  componentWillMount() {
    this.interval = window.setInterval(() => {
      this.setState({
        letters: getSubsetOfAlphabet(),
      });
    }, 2000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  onStart({ entering, leaving }, node) {
    if (entering) {
      node.classList.add('enter');
    } else if (leaving) {
      node.classList.add('leave');
    } else {
      node.classList.remove('enter', 'leave');
    }
  }

  renderLetters() {
    return this.state.letters.map(letter => (
      <span key={letter}>{letter}</span>
    ));
  }

  render() {
    const animations = {
      enterAnimation: {
        from: {
          transform: 'translateY(-30px)',
          opacity: 0,
        },
        to: {
          transform: 'translateY(0)',
          opacity: 1,
        },
      },
      leaveAnimation: {
        from: {
          transform: 'translateY(0)',
          opacity: 1,
        },
        to: {
          transform: 'translateY(30px)',
          opacity: 0,
        },
      },
    };

    return (
      <div className="letter-demo">
        <FlipMove
          duration={750}
          easing='ease'
          onStart={this.onStart}
          {...animations}
          {...this.props}
        >
          {this.renderLetters()}
        </FlipMove>
      </div>
    );
  }
}

export default LetterDemo;
