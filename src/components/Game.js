import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

import Board from './Board'

class Game extends Component {
  render() {
    return (
      <div className="game-wrapper">
          <Board/>
      </div>
    );
  }
}

export default connect (
    state =>  ({
        state: state
    }),
    actions
)(Game);