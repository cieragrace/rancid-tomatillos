import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import getAPIData from "../../APICalls";
import Movies from "../Movies/Movies";
import App from "../../App";
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      searchBarValue: "",
    }
  }
  
  // componentDidMount () {
  //   getAPIData(`movies/${this.props.movieId}`)
  //   .then(data => {
  //     this.setState({
  //       filteredMovies: data.movie
  //     })
  //   })
  // }

  searchBar = (event) => {
    this.setState({searchBarValue: event.target.value})
  }

  componentDidUpdate = (prevState, prevProps) => {
    if(prevState.searchBarValue !== this.state.searchBarValue){
      
    }
  }

  // getFilteredMovies = (props) => {
  //   console.log('props.movies = ', this.props.movies)
  //   ///not getting movies props passed from app
  //   const filteredMovies = this.props.movies.filter(movie => {
  //     console.log('movies = ', this.props.movies[0])
  //     if (movie.title.includes(this.state.searchBarValue)) {
  //       return movie
  //     }
  //   })
  //   return filteredMovies
  // }

  // clearInputs = () => {
  //   this.setState({searchBarValue: ""})
  // }
  
  render() {
    return (
      
        <form className='formContainer'>
          <label htmlFor='findMovie'>Find A Movie:</label>
          <input 
            type='text'
            id="findMovie"  
            placeholder="Enter Title Here"
            value={this.state.searchBarValue}
            onChange={event => {this.searchBar(event)
            console.log(this.state.searchBarValue)}}
            />
            {/* <NavLink to='Searched'>
              <div className="searchButton">GO!</div>
            </NavLink> */}
        </form>
      
    )
  }
}

export default Form