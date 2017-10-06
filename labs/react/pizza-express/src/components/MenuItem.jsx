import React, { Component } from 'react';
import MenuList from './MenuList';
class MenuItem extends Component {
    render() {
        return (
            <div className="menu" id="menu">
                <h1>Menu</h1>
                <div>
                    <div className="menu-item">
                    <img src={this.props.image} />
                        <div className="menu-description">
                            <div className="menu-item-name">{this.props.name}</div>
                            <div>{this.props.price}</div>
                            <div>{this.props.description}</div>
                        
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default MenuItem;