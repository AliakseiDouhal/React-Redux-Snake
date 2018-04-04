import React, {PureComponent} from 'react'

import '../styles/score.css'

export default class Score extends PureComponent {
    render() {
        return (
            <p className='current-score'>Score: {this.props.gameStatus.score}</p>
        )
    }

}