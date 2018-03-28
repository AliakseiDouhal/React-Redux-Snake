import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/modal.css';

export default class Modal extends Component {
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
                <button className="modal__close-button" onClick={this.props.resetGame}>Закрыть</button>
                {this.props.children}
            </div>,
            this.root
        );
    }
}