import React from "react";

const MovieItem = ({movie}) =>{
    return(
        <li>
            <h3>{movie.nome}</h3>
            <img src={movie.capa} />
            <div className="movieInformations">
            <p><strong>Descrição:</strong> {movie.descricao}</p>
            <p><strong>Gênero:</strong> {movie.genero}</p>
            <p><strong>Classificação:</strong> {`${movie.classificacao < 12 ? 'Livre' : movie.classificacao + ' anos'}`}</p>
            </div>
        </li>
    );
};

export default MovieItem;