import React from 'react'

import '../styles/snake.css'

export default function Snake({ snakeCoords }) {
    return (
        <div>
            {
                snakeCoords.map((part, index) =>
                    <div key={index} style={{left: part.x * 20 + 'px', top: part.y * 20 + 'px'}}
                         className='snake'/>)
            }
        </div>
    )
}
