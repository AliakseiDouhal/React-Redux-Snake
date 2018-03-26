import React, {Component} from 'react'

import '../styles/snake.css'

export default class Snake extends Component{

    /*!!!каждая ячейка змейки отдельный див, мне надо хранить количество ячеек и их координаты!!!*/

    constructor(props) {
        super(props);
    }

    componentDidMount() {
/*
        setInterval(()=> this.motionSnake(),500);
*/
        this.motionSnake();
    }

    motionSnake () {
        let head = this.refs.snake.style.top;
        /*ToDo: switch с пропсами направления*/
        if(!parseInt(head, 10)) {
            this.refs.snake.style.top = 20 + 'px'
        }
        this.refs.snake.style.top = parseInt(head, 10) + 20 + 'px';
    }
    render() {
        return (
            <div ref="snake" className='snake'/>
        )
    }
}