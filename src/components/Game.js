import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

import Board from './Board'
import Snake from './Snake'

import '../styles/game.css'
import snakeDirection from "../reducers/snakeDirection";

class Game extends Component {

    componentDidMount() {
        this.setDirection();
    }

    setDirection () {
        document.addEventListener('keydown', e => {
            return this.props.directionMotion(e, this.props.snakeDirection);
        })
    }

    render() {
    return (
      <div className="game-wrapper" >
          <Board />
          <Snake snakeDirection = {this.props.snakeDirection}
                 addSnakePart = {this.props.addSnakeCoords}
                 snakeCoords = {this.props.snakeCoords}
                 motionCoords = {this.props.changeSnakeCoords}
          />
      </div>
    );
    }
}

export default connect (
    state =>  ({
        snakeDirection: state.snakeDirection,
        snakeCoords: state.snakeCoords
    }),
    actions
)(Game);