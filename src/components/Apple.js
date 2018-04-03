import React, {Component} from 'react'

import '../styles/apple.css'

let count = 0;

export default class Apple extends Component {

    render() {
        console.log(`apple render ${++count}`);
        return (
            <div style={{left: this.props.appleCoords.x * 20 + 'px', top: this.props.appleCoords.y * 20 + 'px',}}
                 className='apple'/>
        )
    }

}