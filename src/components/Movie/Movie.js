import React from "react";
import { NavLink } from "react-router-dom";
import './Movie.css'


const Card = ({id, posterPath, backdropPath, title, averageRating, releaseDate, showSingleMovie}) => {
  return (
    <NavLink to={`/${id}`}> 
      <img className="Card" id={id} src={posterPath} alt="Movie Poster" width="383" height="600"></img>
    </NavLink>
  )
}
export default Card
