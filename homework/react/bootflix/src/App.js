import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movie: example
    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  _searchByTitle = (title, event) => {
     axios.get("https://strange-thing-api.herokuapp.com/api")
    .then((response) => {
        const savedGifs = response.data.strangeThings;
        this.setState({ savedGifs: savedGifs });
    })
    .catch((error) => {
        console.error("Error: ", error);
    });
  }

  _searchById = (id, event) => {
    

  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Movie />
      </div>
    );
  }
}

export default App;
