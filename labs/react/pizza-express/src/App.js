import React, { Component } from 'react';
import Navbar from './components/Navbar.jsx'
import SplashImage from './components/SplashImage.jsx'
import Contact from './components/Contact.jsx'
import Location from './components/Location.jsx'
import LocationList from './components/LocationList'
import MenuItem from './components/MenuItem'
import MenuList from './components/MenuList'
import Description from './components/Description'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SplashImage />
        <Description />
        <MenuItem />
        <MenuList />
        <Location />
        <LocationList />
        <Contact />
      </div>
    );
  }
}

export default App;
