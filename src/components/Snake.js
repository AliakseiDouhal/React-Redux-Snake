import React, {Component} from 'react'

import '../styles/snake.css'

export default class Snake extends Component{

    /*!!!каждая ячейка змейки отдельный див, мне надо хранить количество ячеек и их координаты!!!*/


    componentDidMount() {
        setInterval(()=> this.motionSnake(),100);
    }

    motionSnake () {
        if(this.props.gameStatus.isGame) {
            const snake = this.props.snakeCoords;

           /* for (let i = snake.length - 1; i > 0; i--) {
                snake[i].x = snake[i - 1].x;
                snake[i].y = snake[i - 1].y;
            }
            switch (this.props.snakeDirection) {
                case ('DOWN'):
                    head.y += 1;
                    console.log(snake);
                    return this.props.motionCoords(snake);
                case ('UP'):
                    head.y -= 1;
                    return this.props.motionCoords(snake);
                case ('LEFT'):
                    head.x -= 1;
                    return this.props.motionCoords(snake);
                case ('RIGHT'):
                    head.x += 1;
                    return this.props.motionCoords(snake);
            }*/
           return this.props.motionCoords(snake, this.props.snakeDirection);
        }

    }
    render() {
        return (
            <div>
                {
                    this.props.snakeCoords && this.props.snakeCoords.map((part, index) =>
                        <div key={index} style={{left: part.x*20 + 'px', top: part.y*20 + 'px'}} className='snake'/>)
                }
            </div>


        )
    }
}