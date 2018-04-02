import React, {Component} from 'react'

import '../styles/score.css'

export default class Score extends Component {
    render() {
        return (
            <p className='current-score'>Score: {this.props.gameStatus.score}</p>
        )
    }

}
