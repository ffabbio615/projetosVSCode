import { MovieContext } from "../MovieContext";
import MovieItem from "./MovieItem";
import React, {useContext} from "react";
import './MovieList.scss';


const MovieList = () => {

    const {movieList} = useContext(MovieContext);

    return(
        <>
            <ul>
                {movieList.map((movie) => (
                    <MovieItem 
                    key={movie.id}
                    movie={movie}
                    />
                ))}
            </ul>
        </>
    );
};

export default MovieList;