import React, {Component} from 'react'

import '../styles/board.css'

export default class Board extends Component {

    render() {
        let board = [];
        for (let x = 0; x < 20; x++) {
            board[x] = [];
            for (let y = 0; y < 20; y++) {
                board[x][y] = '';
            }
        }
        return (
            <div ref="board">
                {board.map((row, index) =>
                    <div key={index} className="row">
                        {
                            row.map((cell, cellIndex) => <div key={cellIndex} className='cell'/>)
                        }

                    </div>
                )}
                {
                    !this.props.gameStatus.isGame && !this.props.gameStatus.game_over &&
                    <p className='blink-text'>Press space for a game</p>
                }

            </div>

        )
    }

}