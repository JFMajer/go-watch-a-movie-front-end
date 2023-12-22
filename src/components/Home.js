import React, { Fragment } from 'react'
import Tickets from '../images/tickets.png'

const Home = () => {
    return(
        <Fragment>
        <div className="text-center">
            <h2>Find a movie to watch tonight!</h2>
            <hr></hr>
            <img src={Tickets} alt="movie-tickets" width="600"></img>
        </div>
        </Fragment>
    )
}

export default Home;