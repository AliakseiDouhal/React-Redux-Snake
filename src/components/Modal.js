import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';

import '../styles/modal.css';

export default class Modal extends PureComponent {
    componentWillMount() {
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    render() {
        const { gameStatus, resetGame, children } = this.props;
        return ReactDOM.createPortal(
            <div className="modal">
                <p className='game_over'>Game Over</p>
                <p className='total-score'>You score: {gameStatus.score}</p>
                <button className="modal__close-button" onClick={resetGame}>Restart</button>
                {children}
            </div>,
            this.root
        );
    }
}
