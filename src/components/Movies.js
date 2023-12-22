import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Movies.css'

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let moviesList = [
            {
                id: 1,
                title: "Highlander",
                release_date: "1986-03-07",
                runtime: "116",
                mpa: "R",
                description: "An immortal Scottish swordsman must confront the last of his immortal opponent, a murderously brutal barbarian who lusts for the fabled 'Prize'."
            },
            {
                id: 2,
                title: "The Shawshank Redemption",
                release_date: "1994-10-14",
                runtime: "142",
                mpa: "R",
                description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
            },
            {
                id: 3,
                title: "Inception",
                release_date: "2010-07-16",
                runtime: "148",
                mpa: "PG-13",
                description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
            },
            {
                id: 4,
                title: "The Matrix",
                release_date: "1999-03-31",
                runtime: "136",
                mpa: "R",
                description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
            },
            {
                id: 5,
                title: "Pulp Fiction",
                release_date: "1994-10-14",
                runtime: "154",
                mpa: "R",
                description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
            },
            {
                id: 6,
                title: "Forrest Gump",
                release_date: "1994-07-06",
                runtime: "142",
                mpa: "PG-13",
                description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75."
            },
            {
                id: 7,
                title: "Jurassic Park",
                release_date: "1993-06-11",
                runtime: "127",
                mpa: "PG-13",
                description: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose."
            },
            {
                id: 8,
                title: "Gladiator",
                release_date: "2000-05-05",
                runtime: "155",
                mpa: "R",
                description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
            },
            {
                id: 9,
                title: "Fight Club",
                release_date: "1999-10-15",
                runtime: "139",
                mpa: "R",
                description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
            },
            {
                id: 10,
                title: "The Godfather",
                release_date: "1972-03-24",
                runtime: "175",
                mpa: "R",
                description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
            }
        ]
        setMovies(moviesList);
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
                                            <li className="list-group-item">Rating: { m.mpa }</li>
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