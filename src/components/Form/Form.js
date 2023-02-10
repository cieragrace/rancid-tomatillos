import React, { Component } from "react";
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchBarValue: ""
    }
  }

  handleSubmit = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  getFilteredMovies = ( {movies} ) => {
    let filteredMovies = movies.filter(movie => {
      movie.title.includes(this.state.searchBarValue) || movie.title === this.state.searchBarValue
      console.log("filtered", movie)
      return filteredMovies
    })
  }

  clearInputs = () => {
    this.setState({searchBarValue: ""})
  }
  render() {
    return (
      <>
        <div className='formContainer'>
          <label for='findMovie'>Find A Movie:</label>
          <input 
            type='search'
            id="findMovie" 
            name="Find-a-Movie" 
            placeholder="Enter Title Here"
            value={this.state.searchBarValue}
            onChange={event => this.handleSubmit(event)}
            ></input>
          {/* <button className="searchButton"></button> */}
        </div>
        <div className="movie-container">
          {filteredMovies}
        </div>
      </>
    )
  }
}

export default Form