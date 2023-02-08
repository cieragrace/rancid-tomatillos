import React, { Component } from 'react'
import getAPIData from './APICalls.js'
import Movies from './components/Movies/Movies';
import Movie from './components/MovieInfo/MovieInfo';
import { Route, Switch } from 'react-router-dom'
import './App.css';
// import Header from './components/Header/Header'
// import Card from './components/Card/Card';


// const setEventHandler = true

export default class App extends Component {
  constructor() {
    super()
    // this.movieData = movieData
    this.state = {
      singleMovie: null,
      movies: [],
      isClicked: false
    }
    // this.showSingleMovie = this.showSingleMovie.bind(this)
  }

  componentDidMount = () => {
    getAPIData('movies')
    .then((data) => this.setState({ movies: data.movies }))
    .catch((error) => console.log(error))
  }

  componentDidUpdate =() => {
    console.log("New State:", this.state)
  }

  // showSingleMovie = (id) => {
  //   const findMovie = this.state.movies.find(movie => movie.id === id)
  //   getAPIData(`movies/${findMovie.id}`)
  //   .then((data) => {
  //     this.setState({
  //         singleMovie: data.movie,
  //         isClicked: true
  //     })
  //     console.log("Fetch Single Movie:", data)
  //   })
  // }

  backToHome = () => {
    this.setState({ 
      isClicked: false,
      singleMovie: null
     })
  }

 
  render() {
    console.log('movies',this.state.movies)
    return(
        <main>
          <Switch>
            <Route exact path='/' render={()=> <Movies movies={this.state.movies}/>}></Route>
            {/* <Route exact path='/' Component={ Movies} ></Route> */}
          </Switch>
          
          {/* <Route exact path='/movie' component={Movie}></Route> */}
        </main>
    )
  }

  // render() {
  //   if (this.state.isClicked === true) {
  //     console.log("I was clicked")
  //   return (
  //       <Movie showSingleMovie={this.showSingleMovie} singleMovie={this.state.singleMovie} backToHome={this.backToHome} />
  //   )} else {
  //     console.log("No clicky")
  //   return (
  //       <Movies movies={this.state.movies} showSingleMovie={this.showSingleMovie} />
  //   )}
  // }
}


