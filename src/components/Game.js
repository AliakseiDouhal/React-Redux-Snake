import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions';

import Board from './Board';
import Snake from './Snake';
import Apple from './Apple';
import Modal from './Modal';
import Score from './Score';

import {snakeCoordsSelector, appleCoordsSelector, snakeDirectionSelector, gameStatusSelector} from '../selectors/game'

import '../styles/game.css'

class Game extends Component {

    componentDidMount = () => {
        this.setDirection();
    }

    componentDidUpdate = () => {
        this.checkEatenApple();
        if (this.props.gameStatus.isGame) {
            this.checkGameOver();
        }
    }

    motionSnake = () => {
        if (this.props.gameStatus.isGame) {
            const snake = this.props.snakeCoords;
            return this.props.changeSnakeCoords(snake, this.props.snakeDirection);
        }
    }

    setDirection = () => {
        document.addEventListener('keydown', e => {
            if (e.keyCode === 32 && !this.props.gameStatus.game_over && !this.props.gameStatus.isGame) {
                this.snakeSpeed = setInterval(() => this.motionSnake(), 50);

            }
            return this.props.directionMotion(e, this.props.snakeDirection, this.props.snakeCoords[0], this.props.gameStatus);
        })
    }

    checkEatenApple = () => {
        const head = this.props.snakeCoords[0];
        if (this.props.appleCoords.x === head.x && this.props.appleCoords.y === head.y) {
            this.generateNewApplePosition();
            this.addNewPartSnake();
            this.props.incrementScore();
        }
    }

    addNewPartSnake = () => {
        const snake = this.props.snakeCoords;
        return this.props.addSnakeCoords(snake[snake.length - 1].x, snake[snake.length - 1].y)
    }

    generateNewApplePosition = () => {
        return this.props.changeAppleCoords(this.props.appleCoords);
    }

    checkGameOver = () => {
        if (!this.checkSnakeOutside() || this.checkSnakeCollapse()) {
            clearInterval(this.snakeSpeed);
            return this.props.gameLose();
        }
    }

    checkSnakeOutside = () => {
        const head = this.props.snakeCoords[0];
        return (head.y >= 0 && head.y < 20 && head.x >= 0 && head.x < 20)

    }

    checkSnakeCollapse = () => {
        const head = {x: this.props.snakeCoords[0].x, y: this.props.snakeCoords[0].y};
        const snake = this.props.snakeCoords.slice(1);
        return snake.some(snakeBody => JSON.stringify(snakeBody) === JSON.stringify(head));

    }

    render() {
        return (
            <div className="game-wrapper">
                <Board gameStatus={this.props.gameStatus}/>
                <Score gameStatus={this.props.gameStatus}/>
                <Snake snakeCoords={this.props.snakeCoords}/>
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
