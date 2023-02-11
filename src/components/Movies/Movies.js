import React from "react";
import Movie from "../MovieInfo/MovieInfo";
import Card from '../Movie/Movie'
import Header from '../Header/Header'
import Form from "../Form/Form";
import getFilteredMovies from '../Form/Form'
import './Movies.css'

const Movies = ({movies}) => {
  const movieCards = movies.map(movie => {
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
      <Form />
      if ()
      <div className="movie-container">
        {movieCards}
      </div>
    </>
  )
}

export default Movies