import React, { Component } from 'react'
import getAPIData from './APICalls.js'
// import movieData from './FakeData'
import Movies from './components/Movies/Movies';
import Movie from './components/MovieInfo/MovieInfo';
import './App.css';
// import {Route, Switch, Redirect} from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom';
// import Header from './components/Header/Header'
// import Card from './components/Card/Card';


// const setEventHandler = true

class App extends Component {
  constructor() {
    super()
    // this.movieData = movieData
    this.state = {
      singleMovie: null,
      movies: [],
      isClicked: false
    }
    this.showSingleMovie = this.showSingleMovie.bind(this)
  }

  componentDidMount = () => {
    getAPIData('movies')
    .then((data) => this.setState({ movies: data.movies }))
    .catch((error) => console.log(error))
  }

  componentDidUpdate =() => {
    console.log("New State:", this.state)
  }

  showSingleMovie = (id) => {
    const findMovie = this.state.movies.find(movie => movie.id === id)
    getAPIData(`movies/${findMovie.id}`)
    .then((data) => {
      this.setState({
          singleMovie: data.movie,
          isClicked: true
      })
      console.log("Fetch Single Movie:", data)
    })
  }

  backToHome = () => {
    console.log("State:", this.state)
    this.setState({ isClicked: false })
  }

  render() {
    if (this.state.isClicked === true) {
      console.log("I was clicked")
    return (
        <Movie showSingleMovie={this.showSingleMovie} singleMovie={this.state.singleMovie} backToHome={this.backToHome} />
    )} else {
      console.log("No clicky")
    return (
        <Movies movies={this.state.movies} showSingleMovie={this.showSingleMovie} />
    )}
  }
}

export default App;
