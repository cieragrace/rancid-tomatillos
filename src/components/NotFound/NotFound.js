import React from "react";
import { Link } from 'react-router-dom'
import './NotFound.css'


const NotFound = () => {
    return (
        <div className="errorPage">
            {/* <div className="oops"></div> */}
            <h1>404 Error</h1>
            <h2>Oops! You seem to be lost.</h2>
            <p>This link will take you back home:</p>
            <Link to='/'>Home</Link>
        </div>
    )
}
export default NotFound