import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions';

import Board from './Board';
import Snake from './Snake';
import Apple from './Apple';
import Modal from './Modal';
import Score from "./Score";

import {snakeCoordsSelector, appleCoordsSelector, snakeDirectionSelector, gameStatusSelector} from '../selectors/game'

import '../styles/game.css'

class Game extends Component {

    componentDidMount() {
        this.setDirection();
    }

    componentDidUpdate() {
        this.checkEatenApple();
        if (this.props.gameStatus.isGame) {
            this.checkGameOver();
        }
    }

    setDirection() {
        document.addEventListener('keydown', e => {
            return this.props.directionMotion(e, this.props.snakeDirection, this.props.snakeCoords[0], this.props.gameStatus);
        })
    }

    checkEatenApple() {
        let head = this.props.snakeCoords[0];
        if (this.props.appleCoords.x === head.x && this.props.appleCoords.y === head.y) {
            this.generateNewApplePosition();
            this.addNewPartSnake();
            this.props.incrementScore();
        }
    }

    addNewPartSnake() {
        let snake = this.props.snakeCoords;
        /*передаю последний блок змейки с ее координатами*/
        return this.props.addSnakeCoords(snake[snake.length - 1].x, snake[snake.length - 1].y)
    }

    generateNewApplePosition() {
        return this.props.changeAppleCoords(this.props.appleCoords);
    }

    checkGameOver() {
        console.log(this.checkSnakeOutside(), this.checkSnakeCollapse());
        if (!this.checkSnakeOutside() || this.checkSnakeCollapse()) {
            return this.props.gameLose();
        }
    }

    checkSnakeOutside() {
        let head = this.props.snakeCoords[0];
        return (head.y >= 0 && head.y < 20 && head.x >= 0 && head.x < 20)

    }

    checkSnakeCollapse() {
        let head = {x: this.props.snakeCoords[0].x, y: this.props.snakeCoords[0].y};
        let snake = this.props.snakeCoords.slice(1);
        return snake.some(snakeBody => JSON.stringify(snakeBody) === JSON.stringify(head));

    }

    render() {
        return (
            <div className="game-wrapper">
                <Board gameStatus={this.props.gameStatus}/>
                <Score gameStatus={this.props.gameStatus}/>
                <Snake snakeDirection={this.props.snakeDirection}
                       addSnakePart={this.props.addSnakeCoords}
                       snakeCoords={this.props.snakeCoords}
                       motionCoords={this.props.changeSnakeCoords}
                       gameStatus={this.props.gameStatus}
                       incrementScore={this.props.incrementScore}
                />
                <Apple appleCoords={this.props.appleCoords}/>
                {
                    this.props.gameStatus.game_over &&
                    <Modal resetGame={this.props.resetGame}
                           gameStatus={this.props.gameStatus}
                    />
                }
            </div>
        );
    }
}

export default connect(
    state => ({
        snakeDirection: snakeDirectionSelector(state),
        snakeCoords: snakeCoordsSelector(state),
        appleCoords: appleCoordsSelector(state),
        gameStatus: gameStatusSelector(state)
    }),
    actions
)(Game);
