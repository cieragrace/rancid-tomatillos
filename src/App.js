import React, { Component } from 'react'
import movieData from './FakeData'
import Movies from './components/Movies/Movies';
// import Header from './components/Header/Header'
// import Card from './components/Card/Card';
import './App.css';

class App extends Component {
  constructor() {
    super()
    // this.movieData = movieData
    this.state = {
      movies: [
        // {
        //   "id": 737568,
        //   "poster_path": "https://image.tmdb.org/t/p/original//pklyUbh4k1DbHdnsOMASyw7C6NH.jpg",
        //   "backdrop_path": "https://image.tmdb.org/t/p/original//9pHxv7TX0jOKNgnGMDP6RJ2m1GL.jpg",
        //   "title": "The Doorman",
        //   "average_rating": 5.75,
        //   "release_date": "2020-10-01"
        // },
        // {
        //   "id": 400160,
        //   "poster_path": "https://image.tmdb.org/t/p/original//gxK2lB1w8an5ViPXzisDsRsyHr0.jpg",
        //   "backdrop_path": "https://image.tmdb.org/t/p/original//bt4xA9WZE9P1wiRILRFt0Zh2wmV.jpg",
        //   "title": "The SpongeBob Movie: Sponge on the Run",
        //   "average_rating": 5.2,
        //   "release_date": "2020-08-14"
        // },
        // {
        //   "id": 579583,
        //   "poster_path": "https://image.tmdb.org/t/p/original//zQFjMmE3K9AX5QrBL1SXIxYQ9jz.jpg",
        //   "backdrop_path": "https://image.tmdb.org/t/p/original//5rwcd24GGltKiqdPT4G2dmchLr9.jpg",
        //   "title": "The King of Staten Island",
        //   "average_rating": 6.8,
        //   "release_date": "2020-07-22"
        // }
      ]
    }
  }

  componentDidMount = () => {
    this.setState({ movies: movieData.movies})
  }

  render() {
    return (
      <main className="App">
        {/* <Header/> */}
        {/* <div addMovie={this.addMovie}></div> */}
        <Movies movies={this.state.movies} />
      </main>
    )
  }
}

export default App;
