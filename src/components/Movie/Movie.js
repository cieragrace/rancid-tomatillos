import React from "react";
import { NavLink } from "react-router-dom";
import './Movie.css'


const Card = ({id, posterPath, backdropPath, title, averageRating, releaseDate, showSingleMovie}) => {
  return (
    <NavLink to={`/${id}`}> 
      <img className="Card" id={id} src={posterPath} alt="Movie Poster" width="383" height="600"></img>
      {/* <h2 className="homeTitles">{title}</h2> */}
      {/* <p>{averageRating}</p> */}
      {/* <p>{releaseDate}</p> */}
    </NavLink>
  )
}
export default Card
