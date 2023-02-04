import React, { Component } from 'react'
// import React, { useState } from 'react'
import movieData from './FakeData'
import Movies from './components/Movies/Movies';
import Header from './components/Header/Header'
// import Card from './components/Card/Card';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [
        {
        "id": 479259,
        "poster_path": "https://image.tmdb.org/t/p/original//vQgXwuJrlpzGDI8169tRQRy71Nv.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//wUP0KIAXcRevjjJpoSKT7LLhiaK.jpg",
        "title": "Lost Girls & Love Hotels",
        "average_rating": 3.857142857142857,
        "release_date": "2020-09-18"
      },
      {
        "id": 592350,
        "poster_path": "https://image.tmdb.org/t/p/original//zGVbrulkupqpbwgiNedkJPyQum4.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//9guoVF7zayiiUq5ulKQpt375VIy.jpg",
        "title": "My Hero Academia: Heroes Rising",
        "average_rating": 5,
        "release_date": "2019-12-20"
      }]
    }
  }

  // addState = (movies) => {useState([])}

  addMovie = (newMovie) => {
    this.setState({ movies: [...this.state.movies, newMovie] })
  }

  render() {
    return (
      <main className="App">
        {/* <Header/> */}
        <div addMovie={this.addMovie}></div>
        <Movies movies={this.state.movies} />
      </main>
    )
  }
}

export default App;
