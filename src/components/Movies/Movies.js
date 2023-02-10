import React from "react";
import Movie from "../MovieInfo/MovieInfo";
import Card from '../Movie/Movie'
import Header from '../Header/Header'
import Form from "../Form/Form";
import './Movies.css'

const Movies = ({movies}) => {
  //two variable in this class
  // movie cards 
  //filtered movies
  //input

  //if input value = return filtered movies, else movie cards
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
        // showSingleMovie={showSingleMovie}
      />
    )
  })

  return (
    <>
      <Header />
      <Form />
      <div className="movie-container">
        {movieCards}
      </div>
    </>
  )
}

export default Movies