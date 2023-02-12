import React from "react";
import { NavLink } from "react-router-dom";
import './Movie.css'


// const Card = ({id, posterPath}) => {
//   return (
//     <NavLink to={`/${id}`}> 
//       <img className="Card" id={id} src={posterPath} alt="Movie Poster" width="383" height="600"></img>
//     </NavLink>
//   )
// }

const Card = (props) => {
  console.log('props', props)
  return (
    <NavLink to={`/${props.id}`}> 
      <img className="Card" id={props.id} src={props.posterPath} alt="Movie Poster" width="383" height="600"></img>
    </NavLink>
  )
}

export default Card
