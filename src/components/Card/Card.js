import React from "react";
import './Card.css'

const Card = ({id, posterPath, backdropPath, title, averageRating, releaseDate}) => {
  return (
    <div className="Card"> 
      <img src={posterPath} alt="Movie Poster" width="50" height="70"></img>
      <h2>{title}</h2>
      <p>{averageRating}</p>
      <p>{releaseDate}</p>
    </div>
  )
}

export default Card