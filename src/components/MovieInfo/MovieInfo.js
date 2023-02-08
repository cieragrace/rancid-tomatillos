import { render } from "@testing-library/react";
import React, { Component } from "react";
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
        <img src={poster_path} alt="Movie Poster" width="1000" height="1200"></img>
        <div className="movieInfo">
          <h1>Title: {title}</h1>
          {/* <h2>Avg Rating: {averageRating}</h2> */}
          <h2>Released: {release_date}</h2>
          <h2>Summary: {overview}</h2>
          <h2>Genre: {genres}</h2>
          <h2>Duration: {runtime} mins</h2>
          <h2>{tagline}</h2>
          <button className="homeButton" >Back To Home</button>
        </div>
      </div>
    )}
    
}

export default Movie