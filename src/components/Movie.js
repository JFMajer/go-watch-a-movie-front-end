import React, { Fragment, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Movie = () => {
    const [movie, setMovie] = useState({});
    let { id } = useParams();

    useEffect(() => {
        let myMovie = {
            id: 10,
            title: "The Godfather",
            release_date: "1972-03-24",
            runtime: "175",
            mpa: "R",
            description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
        }
        setMovie(myMovie);
    }, [id])
    return (
        <div className="text-center">
            <h2>Movie: {movie.title}</h2>
            <small><em>{movie.release_date}</em></small>
            <hr></hr>
            <p>{movie.description}</p>
        </div>
    )
}

export default Movie;