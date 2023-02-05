// import React from "react";
// import Card from '../Card/Card'
// import './Movie.css'

// const Movie = ({singleMovie, showSingleMovie}) => {
//   console.log(singleMovie)
//   const movieCard = singleMovie.map(movie => {
//     return (
//       <Card
//         id={movie.id}
//         key={movie.id}
//         title={movie.title}
//         posterPath={movie.poster_path}
//         backdropPath={movie.backdrop_path}
//         averageRating={movie.averageRating}
//         releaseDate={movie.release_date}
//         overview={movie.overview}
//         genres={movie.genres}
//         budget={movie.budget}
//         revenue={movie.revenue}
//         runtime={movie.runtime}
//         tagline={movie.tagline}
//         showSingleMovie={showSingleMovie}
//       />
//     )
//   })

//   return (
//     <div className="movie-container">
//       {movieCard}
//     </div>
//   )
// }

// export default Movie