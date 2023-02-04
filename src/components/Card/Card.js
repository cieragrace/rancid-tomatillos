import React from "react";
import App from "../../App";
import './Card.css'

const Card = ({id, posterPath, backdropPath, title, averageRating, releaseDate, showSingleMovie}) => {
  return (
    <div onClick={() => showSingleMovie(id)} className="Card"> 
      <img src={posterPath} alt="Movie Poster" width="100" height="140"></img>
      <h2>{title}</h2>
      <p>{averageRating}</p>
      <p>{releaseDate}</p>
    </div>
  )
}

export default Card
