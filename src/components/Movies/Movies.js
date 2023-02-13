import {React, useState } from "react";
import Movie from "../MovieInfo/MovieInfo";
import Card from '../Movie/Movie'
import Header from '../Header/Header'
import Form from "../Form/Form";
import getFilteredMovies from '../Form/Form'
import './Movies.css'
import PropTypes from 'prop-types'

    const Movies = (props) => {
      const movieCards = props.movies.map(movie => {
        return (
          <Card
            id={movie.id}
            key={movie.id}
            posterPath={movie.poster_path}
            backdropPath={movie.backdrop_path}
            title={movie.title}
            averageRating={movie.averageRating}
            releaseDate={movie.release_date}
          />
        )
      })
        return (
          <>
            <Header />
            <div className="movie-container">
              {movieCards}
            </div>
          </>
        )
      }
    
     
    

export default Movies

Movies.propTypes = {
  id: PropTypes.number,
  key: PropTypes.number,
  posterPath: PropTypes.string,
  backdropPath: PropTypes.string,
  title: PropTypes.string,
  averageRating: PropTypes.string,
  releaseDate: PropTypes.string,
}