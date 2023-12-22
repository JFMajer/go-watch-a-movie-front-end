import React, { Fragment } from 'react'
import Tickets from '../images/tickets.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Fragment>
            <div className="text-center">
                <h2>Find a movie to watch tonight!</h2>
                <hr></hr>
                <Link to="/movies"><img src={ Tickets } alt="movie-tickets" width="600"></img></Link>
            </div>
        </Fragment>
    )
}

export default Home;