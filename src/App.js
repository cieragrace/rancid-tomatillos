import React, { Component } from 'react'
import getAllData from './API Calls'
import movieData from './FakeData'
import Movies from './components/Movies/Movies';
import Movie from './components/Movie/Movie';

// import {Route, Switch, Redirect} from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom';
// import Header from './components/Header/Header'
// import Card from './components/Card/Card';
import './App.css';

const setEventHandler = true

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
    getAllData()
    .then((data) => this.setState({ movies: data}))
    .catch((error) => console.log(error))
  }

  componentDidUpdate =() => {
    console.log(this.state)
  }

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
    // if (onClick.value === true) {
    // return (
    //   <main className="moviePoster">
    //     <Movie showSingleMovie={this.showSingleMovie} />
    //     <div>
    //       <p>Title</p>
    //       <p>Rating</p>
    //       <p>Release Date</p>
    //     </div>
    //   </main>
    // )} else {
    return (
        <main className="App">
        {/* <switch>
          <Redirect exact from="/" to="/movies" />
          <Route exact path="/movies" render={() => <Header/>}/>
        </switch> */}
        {/* <Header/> */}
        {/* <div addMovie={this.addMovie}></div> */}
        <Movies movies={this.state.movies} showSingleMovie={this.showSingleMovie} />
        {/* {setEventHandler ? this.showSingleMovie() : <Movies />} */}
      </main>
    )}
  }
// }

export default App;
