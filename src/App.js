import React, { Component } from 'react'
import movieData from './FakeData'
import Movies from './components/Movies/Movies';
// import Header from './components/Header/Header'
// import Card from './components/Card/Card';
import './App.css';

class App extends Component {
  constructor() {
    super()
    // this.movieData = movieData
    this.state = {
      movies: [
      ]
    }
  }

  componentDidMount = () => {
    this.setState({ movies: movieData.movies})
  }

  render() {
    return (
      <main className="App">
        {/* <Header/> */}
        {/* <div addMovie={this.addMovie}></div> */}
        <Movies movies={this.state.movies} />
      </main>
    )
  }
}

export default App;
