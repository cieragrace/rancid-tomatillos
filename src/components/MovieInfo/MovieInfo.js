import React from "react";
import App from "../../App";
import Card from '../Movie/Movie'
import './MovieInfo.css'

// const Movie = ({singleMovie, showSingleMovie}) => {
const Movie = (props, backToHome) => {
  const { title, id, key, poster_path, backdrop_path, averageRating, release_date, overview, genres, budget, revenue, runtime, tagline, } = props.singleMovie
  console.log("Props:", props)
  // const movieCard = props.singleMovie.map(movie => {
    return (
      <div>
        <img src={poster_path} alt="Movie Poster" width="700" height="1000"></img>
        <div>
          <h2>Title: {title}</h2>
          <h2>Avg Rating: {averageRating}</h2>
          <h2>Released: {release_date}</h2>
          <h2>Summary: {overview}</h2>
          <h2>Genre: {genres}</h2>
          <h2>Total Time: {runtime}</h2>
          <h2>{tagline}</h2>
          <button onClick={() => backToHome()}>Back To Home</button>
        </div>
      </div>
    )
}

export default Movie