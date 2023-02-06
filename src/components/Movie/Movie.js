import React from "react";
import App from "../../App";
import './Movie.css'

const Card = ({id, posterPath, backdropPath, title, averageRating, releaseDate, showSingleMovie}) => {
  return (
    <div onClick={() => showSingleMovie(id)} className="Card"> 
      <img src={posterPath} alt="Movie Poster" width="383" height="600"></img>
      <h2>{title}</h2>
      <p>{averageRating}</p>
      <p>{releaseDate}</p>
    </div>
  )
}

export default Card
