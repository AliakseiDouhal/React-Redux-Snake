import React, { Component } from 'react';
// import { createSelector } from 'reselect'
import { connect } from 'react-redux';
import actions from '../actions';

import Board from './Board';
import Snake from './Snake';
import Apple from './Apple';
import Modal from './Modal';

import '../styles/game.css'

class Game extends Component {

    componentDidMount() {
        this.setDirection();
    }

    componentDidUpdate() {
        this.checkEatenApple();
        if (this.props.gameStatus.isGame){
            this.checkGameOver();
        }
    }

    setDirection () {
        document.addEventListener('keydown', e => {
            return this.props.directionMotion(e, this.props.snakeDirection, this.props.snakeCoords[0]);
        })
    }

    checkEatenApple () {
        let head = this.props.snakeCoords[0];
        if (this.props.appleCoords.x === head.x && this.props.appleCoords.y === head.y) {
            this.generateNewApplePosition();
            this.addNewPartSnake();
            this.props.incrementScore();
        }
    }

    addNewPartSnake () {
        let snake = this.props.snakeCoords;
        /*передаю последний блок змейки с ее координатами*/
        return this.props.addSnakeCoords(snake[snake.length - 1].x, snake[snake.length - 1].y)
    }

    generateNewApplePosition () {
        return this.props.changeAppleCoords(this.props.appleCoords);
    }

    checkGameOver () {
        if (!this.checkSnakeOutside()) {
            return this.props.gameLose();
        }
    }

    checkSnakeOutside () {
        let head = this.props.snakeCoords[0];
        return (head.y >= 0 && head.y < 20 && head.x >= 0 && head.x < 20)

    }

    render() {
    return (
        <div className="game-wrapper" >
            <Board />
                <Snake snakeDirection = {this.props.snakeDirection}
                        addSnakePart = {this.props.addSnakeCoords}
                        snakeCoords = {this.props.snakeCoords}
                        motionCoords = {this.props.changeSnakeCoords}
                        gameStatus = {this.props.gameStatus}
                        incrementScore = {this.props.incrementScore}
                />
            <Apple appleCoords = {this.props.appleCoords}/>
            {
              this.props.gameStatus.game_over &&
              <Modal resetGame={this.props.resetGame}/>
            }
        </div>
    );
    }
}

// const snakeCoords = state => state.snakeCoords.snakeCoords;
//
// const snakeCoordsSelector = createSelector(snakeCoords, snakeCoords =>{
//         return snakeCoords
//     }
// );
export default connect (
    state =>  ({
        snakeDirection: state.snakeDirection,
        snakeCoords: state.snakeCoords,
        appleCoords: state.appleCoords,
        gameStatus: state.gameStatus
    }),
    actions
)(Game);