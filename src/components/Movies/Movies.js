import React from "react";
import Card from '../Card/Card'
import './Movies.css'

const Movies = ({movies}) => {
  const movieCards = movies.map(movie => {
    console.log('movies = ', {movies})
    return (
      <Card
        id={movie.id}
        posterPath={movie.poster_path}
        backdropPath={movie.backdrop_path}
        title={movie.title}
        averageRating={movie.averageRating}
        releaseDate={movie.release_date}
      />
    )
  })

  return (
    <div className="movie-container">
      {movieCards}
    </div>
  )
}

export default Movies