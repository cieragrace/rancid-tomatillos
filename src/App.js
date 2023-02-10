import React, { Component } from 'react'
import getAPIData from './APICalls.js'
import Movies from './components/Movies/Movies';
import Movie from './components/MovieInfo/MovieInfo';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      singleMovie: null,
      movies: [],
    }
  }

  componentDidMount = () => {
    getAPIData('movies')
    .then((data) => this.setState({ movies: data.movies }))
    .catch((error) => console.log(error))
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
 
  render() {
    console.log('movies',this.state.movies)
    return(
        <main>
          <Header />
          <Switch >
            <Route exact path='/' render={()=> <Movies movies={this.state.movies}/>}></Route> 
            <Route exact path='/:id' render={({match})=> <Movie movieId={match.params.id} />
              } 
            ></Route>
          </Switch>
        </main>
    )
  }

}


