import React, { Component } from 'react'
import pizzaData from '../pizzaData';
import MenuItem from './MenuItem';


class MenuList extends Component {
    render() {
        const menuComponents = pizzaData.map(pizza => {
            return (    
                            <MenuItem
                                name={pizza.name}
                                price={pizza.price}
                                description={pizza.description}
                                image={pizza.image}     
                            />
            );
        });
        return <div className="menu-container"> {menuComponents} </div>
    }
}
export default MenuList;
