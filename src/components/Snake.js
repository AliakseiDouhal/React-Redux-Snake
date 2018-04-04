import React, {Component} from 'react'

import '../styles/snake.css'

export default class Snake extends Component {

    render() {
        return (
            <div>
                {
                    this.props.snakeCoords.map((part, index) =>
                        <div key={index} style={{left: part.x * 20 + 'px', top: part.y * 20 + 'px'}}
                             className='snake'/>)
                }
            </div>


        )
    }
}