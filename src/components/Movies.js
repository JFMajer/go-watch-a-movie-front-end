import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Movies.css'

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const requestOptions = {
            method: 'GET',
            headers: headers,
        }

        fetch(`http://localhost:3000/movies`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <Fragment>
            <div className="text-center">
                <h2>Movies</h2>
                <hr></hr>
                <div className="row">
                    { movies.map((m) => (
                        <div key={ m.id } className="col-md-4 mb-3">
                            <Link to={ `/movies/${m.id}` } className="text-decoration-none">
                                <div className="card movie-card h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">{ m.title }</h5>
                                        <p className="card-text">{ m.description }</p>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Release Date: { m.release_date }</li>
                                            <li className="list-group-item">Runtime: { m.runtime } minutes</li>
                                            <li className="list-group-item">Rating: { m.mpaa_rating }</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )) }
                </div>

            </div>
        </Fragment>
    )
}

export default Movies;