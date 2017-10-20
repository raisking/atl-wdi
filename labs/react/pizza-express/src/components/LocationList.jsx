import React, {Component} from 'react'
import locationData from '../locationData';
import Location from './Location';
class LocationList extends Component {
    render(){
    const locationComponents = locationData.map(location =>{
        return(
            <Location
            name = {location.name}
            address = {location.address}
            phone = {location.phone}
            />
        );
    });
    return  <div id="locations"><h1>Location: </h1>
        <div className="locations">{locationComponents}</div></div>
    }
}
export default LocationList;