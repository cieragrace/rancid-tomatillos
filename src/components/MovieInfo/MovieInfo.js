import { render } from "@testing-library/react";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import App from "../../App";
import Card from '../Movie/Movie'
import getAPIData from "../../APICalls";
import './MovieInfo.css'



class Movie extends Component { 
  constructor(props){
    super(props)
    this.state={
      singleMovie: {}
      // isClicked: false
    }
  }
  
  componentDidMount () {
    console.log('what is props = ',this.props)
    getAPIData(`movies/${this.props.movieId}`)
      // .then(res=> res.json())
      .then(data => {
        this.setState({
        singleMovie: data.movie,
        // isClicked: true    
        })
      })
          
  }
    render(){
    const { title, poster_path, runtime, release_date, overview, genres, tagline } = this.state.singleMovie
    return (
      <div className="movieContainer">
        <img className="moviePic" src={poster_path} alt="Movie-Poster"></img>
        <div className="movieInfo">
          <h1 className='title'>{title}</h1>
          <ul>
          {/* <h2>Avg Rating: {averageRating}</h2> */}
            <h2 className='sum'>{overview}</h2>
          <h3>Released:</h3>
            <li>Released: {release_date}</li>
          <h3>Genre:</h3>
            <li>{genres}</li>
          <h3>Duration:</h3>
            <li> {runtime} mins</li>
            <h2>{tagline}</h2>
          </ul>
          <NavLink to={'/'} className="homeButton">
            <p>Back to Home</p>
          </NavLink>
        </div>
      </div>
    )}
    
}

export default Movie