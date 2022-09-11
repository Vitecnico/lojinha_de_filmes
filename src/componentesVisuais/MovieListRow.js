import React from "react";
import './MovieListRow.css';

export default ({title,itens}) => {
    return(

        <div>
            <h2>{title}</h2>
            <div className="movieListRow--listarea">
                {itens.results.lenght =! 0 && itens.results.map((item, key) =>(
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                ))}
            </div>
        </div>
    );

}