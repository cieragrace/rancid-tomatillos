import React from "react";
import { NavLink } from "react-router-dom";
import './Movie.css'
import PropTypes from 'prop-types'


// const Card = ({id, posterPath}) => {
//   return (
//     <NavLink to={`/${id}`}> 
//       <img className="Card" id={id} src={posterPath} alt="Movie Poster" width="383" height="600"></img>
//     </NavLink>
//   )
// }

const Card = (props) => {
  
  return (
    <NavLink to={`/${props.id}`}> 
      <img className="Card" id={props.id} src={props.posterPath} alt="Movie Poster" width="383" height="600"></img>
    </NavLink>
  )
}

export default Card

Card.propTypes = {
  id: PropTypes.number,
  posterPath: PropTypes.string,
}