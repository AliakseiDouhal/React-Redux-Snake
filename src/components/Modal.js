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
        return ReactDOM.createPortal(
            <div className="modal">
                <p className='game_over'>Game Over</p>
                <p className='total-score'>You score: {this.props.gameStatus.score}</p>
                <button className="modal__close-button" onClick={this.props.resetGame}>Restart</button>
                {this.props.children}
            </div>,
            this.root
        );
    }
}