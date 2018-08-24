import React, {PureComponent} from 'react'

import '../styles/board.css'

export default class Board extends PureComponent {

    render() {
        let board = [];
        for (let x = 0; x < 20; x++) {
            board[x] = [];
            for (let y = 0; y < 20; y++) {
                board[x][y] = '';
            }
        }
        const {gameStatus: { isGame, game_over }} = this.props;
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
                    !isGame && !game_over &&
                    <p className='blink-text'>Press space for a game</p>
                }

            </div>

        )
    }
}
