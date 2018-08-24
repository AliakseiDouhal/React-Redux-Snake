import React, {PureComponent} from 'react'

import '../styles/apple.css'

export default class Apple extends PureComponent {
    render() {
        return (
            <div style={{left: this.props.appleCoords.x * 20 + 'px', top: this.props.appleCoords.y * 20 + 'px',}}
                 className='apple'/>
        )
    }

}
