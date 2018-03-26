import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

import Board from './Board'
import Snake from './Snake'

import '../styles/game.css'

class Game extends Component {

    componentDidMount() {
        this.setDirection();
    }

    setDirection () {
        document.addEventListener('keydown', e => {
            return this.props.directionMotion(e, this.props.snakeDirection[0]);
        })
    }

    render() {
    return (
      <div className="game-wrapper" >
          <Board />
          <Snake/>
      </div>
    );
    }
}

export default connect (
    state =>  ({
        snakeDirection: state.snakeDirection
    }),
    actions
)(Game);