import React, {PureComponent} from 'react'

import '../styles/score.css'

export default class Score extends PureComponent {
    render() {
        const {gameStatus: {score}} = this.props;
        return (
            <p className='current-score'>Score: {score}</p>
        )
    }
}
