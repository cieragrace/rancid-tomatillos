import { render } from "@testing-library/react";
import React from "react";
import './Header.css'
// import Form from '../Form/Form'


const Header = () => {
    return(
  <div className="headerContainer">
    <div src="../images/Tomatillo Logo.png" alt="B&W-Rotten-Tomatillos-logo" className="logoPic"></div> 
    <div className="whereFormWillBe">
      <label for='findMovie'>Find A Movie:</label>
      <input type='search' id="findMovie" name="Find-a-Movie" placeholder="Enter Title Here"></input>
    </div>
    {/* <Form /> */}
  </div>
  )
}

export default Header