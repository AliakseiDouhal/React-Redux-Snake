import React, {Component} from 'react'
import '../styles/board.css'




export default class Board extends Component{
    constructor(props){
        super(props);


    }
    render() {
        let board = [];
        for (let x=0; x < 25; x++) {
            board[x] = [];
            for (let y = 0; y < 20; y++) {
                board[x][y] = '';
            }
        }
        return (
            <div>
                { board.map((row,index)=>
                    <div key={index} className="row">
                        {
                            row.map((cell, cellIndex)=> <div key={cellIndex} className='cell'/>)
                        }

                    </div>
                )}
            </div>

        )
    }

}
