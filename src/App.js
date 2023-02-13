import React, { Component } from 'react'
import getAPIData from './APICalls.js'
import Movies from './components/Movies/Movies';
import Movie from './components/MovieInfo/MovieInfo';
import Form from './components/Form/Form.js';
import { Route, Switch } from 'react-router-dom'
import PropTypes  from 'prop-types';
// import { NavLink } from 'react-router-dom'
// import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import NotFound from './components/NotFound/NotFound.js';

// const [query, setquery] = useState('')

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

  // searchBar = (event) => {
  //   this.setState({searchBarValue: event.target.value})
  // }

  // handleSearch = (event) => {
  //   setquery(event.target.value)
  // }
  clearInputs = () => {
    this.setState({searchBarValue: ""})
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

  // handleSearch = () => {
  //   if(this.state.isEmpty === false) {
  //     this.filterMovies()
  //   }
  // }

  filterMovies = () => {
    const searchedMovies = this.state.movies.filter(movie => movie.title.includes(this.state.searchBarValue))
    getAPIData(`movies/${searchedMovies.id}`)
    .then((data) => {
      this.setState({
        filteredMovies: data.movie
      })
    })
  }
 
  render() {
    return(
        <main>
          <Form >
          <label htmlFor='findMovie'>Find A Movie:</label>
          <input 
            type='text'
            id="findMovie"  
            placeholder="Enter Title Here"
            value={this.state.searchBarValue}
            onChange={event => this.handleSearchBar}
            />
          </Form>
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


// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       singleMovie: null,
//       movies: [],
//       filteredMovies: [],
//       searchBarValue: "",
//       isEmpty: true
//     }
//   }

//   componentDidMount = () => {
//     getAPIData('movies')
//     .then((data) => this.setState({ movies: data.movies }))
//     .catch((error) => console.log(error))
//   }

//   // searchBar = (event) => {
//   //   this.setState({searchBarValue: event.target.value})
//   // }

//   handleSearch = (event) => {
//     setquery(event.target.value)
//   }
//   clearInputs = () => {
//     this.setState({searchBarValue: ""})
//   }

//   showSingleMovie = (id) => {
//     const findMovie = this.state.movies.find(movie => movie.id === id)
//     getAPIData(`movies/${findMovie.id}`)
//     .then((data) => {
//       this.setState({
//           singleMovie: data.movie,
//           isClicked: true
//       })
//       console.log("Fetch Single Movie:", data)
//     })
//   }

//   // handleSearch = () => {
//   //   if(this.state.isEmpty === false) {
//   //     this.filterMovies()
//   //   }
//   // }

//   filterMovies = () => {
//     const searchedMovies = this.state.movies.filter(movie => movie.title.includes(this.state.searchBarValue))
//     getAPIData(`movies/${searchedMovies.id}`)
//     .then((data) => {
//       this.setState({
//         filteredMovies: data.movie
//       })
//     })
//   }
 
//   render() {
//     return(
//         <main>
//           <Form >
//           <label htmlFor='findMovie'>Find A Movie:</label>
//           <input 
//             type='text'
//             id="findMovie"  
//             placeholder="Enter Title Here"
//             value={this.state.searchBarValue}
//             onChange={event => this.handleSearchBar}
//             />
//           </Form>
//           <Route exact path='/' render={()=> <Movies movies={this.state.movies}/>}></Route> 
//           <Route exact path='/:id' render={({match})=> <Movie movieId={match.params.id} />
//             } 
//           ></Route>
//           <Route path="*"><NotFound /></Route>
//         </main>
//     )
//   }
// }
