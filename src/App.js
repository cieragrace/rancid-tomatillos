import React, { Component } from 'react'
import movieData from './FakeData'
import Movies from './components/Movies/Movies';
import {Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/Header/Header'
// import Card from './components/Card/Card';
import './App.css';

class App extends Component {
  constructor() {
    super()
    // this.movieData = movieData
    this.state = {
      singleMovie: null,
      movies: []
    }
    this.showSingleMovie = this.showSingleMovie.bind(this)
  }

  componentDidMount = () => {
    this.setState({ movies: movieData.movies})
  }

  handleClick = () => {

  }

  // shouldComponentUpdate = (singleMovie) => {
  //   if(this.onclick.value === true){
  //     return true
  //   }
  //   else{
  //     return false
  //   }
  // }


  showSingleMovie = (id) => {
    const findMovie = this.state.movies.find(movie => movie.id === id)
    console.log('movie = ', findMovie)
    this.setState(prevState => {
      return {
        singleMovie: findMovie
      }
    })
  }

  render() {
    return (
      <main className="App">
        <switch>
          <Redirect exact from="/" to="/movies" />
          <Route exact path="/movies" render={() => <Header/>}/>
        </switch>
        {/* <Header/> */}
        {/* <div addMovie={this.addMovie}></div> */}
        <Movies movies={this.state.movies} showSingleMovie={this.showSingleMovie} />
      </main>
    )
  }
}

export default App;
