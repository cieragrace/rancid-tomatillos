import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import getAPIData from "../../APICalls";
import Movies from "../Movies/Movies";
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // movies: [],
      searchBarValue: "",
      filteredMovies: []
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

  getFilteredMovies = (props) => {
    const filteredMovies = this.props.movies.filter(movie => {
      if (movie.title.includes(this.state.searchBarValue)) {
        return movie
      }
    })
    return filteredMovies
  }

  // clearInputs = () => {
  //   this.setState({searchBarValue: ""})
  // }
  
  render() {
    return (
      <>
        <div className='formContainer'>
          <label htmlFor='findMovie'>Find A Movie:</label>
          <input 
            type='text'
            id="findMovie"  
            placeholder="Enter Title Here"
            value={this.state.searchBarValue}
            onChange={event => this.searchBar(event)}
            />
            <NavLink to='Searched'>
              <div className="searchButton">GO!</div>
            </NavLink>
        </div>
      </>
    )
  }
}

export default Form