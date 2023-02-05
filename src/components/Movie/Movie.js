import React from "react";
import App from "../../App";
import './Movie.css'

const Card = ({id, posterPath, backdropPath, title, averageRating, releaseDate, showSingleMovie}) => {
  return (
    <div onClick={() => showSingleMovie(id)} className="Card"> 
      <img src={posterPath} alt="Movie Poster" width="300" height="520"></img>
      <h2>{title}</h2>
      <p>{averageRating}</p>
      <p>{releaseDate}</p>
    </div>
  )
}

export default Card
