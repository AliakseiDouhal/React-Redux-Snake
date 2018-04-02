import React, {Component} from 'react'

import '../styles/apple.css'

export default class Apple extends Component {

    render() {
        return (
            <div style={{left: this.props.appleCoords.x * 20 + 'px', top: this.props.appleCoords.y * 20 + 'px',}}
                 className='apple'/>
        )
    }

}
