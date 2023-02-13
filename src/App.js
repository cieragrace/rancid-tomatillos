import React, { Component } from 'react'
import getAPIData from './APICalls.js'
import Movies from './components/Movies/Movies';
import Movie from './components/MovieInfo/MovieInfo';
import Form from './components/Form/Form.js';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import NotFound from './components/NotFound/NotFound.js';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      singleMovie: null,
      movies: [],
      filteredMovies: [],
      searchBarValue: "",
      isEmpty: true
    }
  }

  componentDidMount = () => {
    getAPIData('movies')
    .then((data) => this.setState({ movies: data.movies }))
    .catch((error) => console.log(error))
  }

  componentDidUpdate = (prevState) => {
    if(prevState.movies !== this.state.movies || prevState.searchBarValue !== this.state.searchBarValue){
      return this.filterMovies
    }
  }

  searchBar = (event) => {
    this.setState({searchBarValue: event.target.value})
  }

  clearInputs = () => {
    this.setState({searchBarValue: ""})
  }

  filterMovies = (inputValue) => {
    const searchedMovies = this.state.movies.filter((movie) => {
      if (inputValue) {
        return (
          movie.title.toLowerCase().includes(inputValue) ||
          movie.title.toUpperCase().includes(inputValue)
        );
      } else {
        return movie;
      }
    });
    this.setState({ movies: searchedMovies });
  };

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
    return(
        <main>
          <Form filterMovies={this.filterMovies}/>
          <Switch>
            <Route exact path='/' render={()=> <Movies movies={this.state.movies}/>}></Route> 
            <Route exact path='/:id' render={({match})=> <Movie movieId={match.params.id} />
              } 
            ></Route>
            <Route path="*"><NotFound /></Route>
          </Switch>
        </main>
    )
  }
}
