import React, {Component} from 'react'

import '../styles/snake.css'

export default class Snake extends Component {

    componentDidMount() {
        setInterval(() => this.motionSnake(), 75);
    }

    motionSnake() {
        if (this.props.gameStatus.isGame) {
            const snake = this.props.snakeCoords;
            return this.props.motionCoords(snake, this.props.snakeDirection);
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.snakeCoords && this.props.snakeCoords.map((part, index) =>
                        <div key={index} style={{left: part.x * 20 + 'px', top: part.y * 20 + 'px'}}
                             className='snake'/>)
                }
            </div>


        )
    }
}
