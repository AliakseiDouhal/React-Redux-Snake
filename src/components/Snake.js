import React, {Component} from 'react'

import '../styles/snake.css'

export default class Snake extends Component{

    /*!!!каждая ячейка змейки отдельный див, мне надо хранить количество ячеек и их координаты!!!*/


    componentDidMount() {
        setInterval(()=> this.motionSnake(),500);
/*
        this.motionSnake();
*/
    }

    addNewPartSnake () {
        /*передаю последний блок змейки с ее координатами*/
        return this.props.addSnakePart()
    }

    motionSnake () {
        let snake = this.props.snakeCoords;
        for (let i = snake.length - 1; i > 0; i--) {
            snake[i] = snake[i - 1]
        }
        let head = snake[0];
        switch (this.props.snakeDirection) {
            case ('DOWN'):
                head.y += 20;
                console.log(snake);
                return this.props.motionCoords(snake);
            case ('UP'):
                head.y -= 20;
                return this.props.motionCoords(snake);
            case ('LEFT'):
                head.x -= 20;
                return this.props.motionCoords(snake);
            case ('RIGHT'):
                head.x += 20;
                return this.props.motionCoords(snake);
        }

    }
    render() {
        return (
            <div>
                {
                    this.props.snakeCoords.map((part, index) =>
                        <div key={index} style={{left: part.x + 'px', top: part.y + 'px',}} className='snake'/>)
                }
            </div>


        )
    }
}