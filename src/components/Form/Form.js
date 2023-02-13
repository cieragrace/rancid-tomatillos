import React, { Component } from "react";
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      searchBarValue: "",
    }
  }

  searchBar = (event) => {
    this.setState({searchBarValue: event.target.value}, () => {
      this.props.filterMovies(this.state.searchBarValue)
    })
  }
  
  componentDidUpdate = (prevState, prevProps) => {
    if(prevState.searchBarValue !== this.state.searchBarValue){
    }
  }
  
  render() {
    return (
        <form className='formContainer'>
          <label htmlFor='findMovie'>Find A Movie:</label>
          <input 
            type='text'
            id="findMovie"  
            placeholder="Enter Title Here"
            value={this.state.searchBarValue}
            onChange={event => {this.searchBar(event)
            console.log(this.state.searchBarValue)}}
            />
        </form>
      
    )
  }
}

export default Form