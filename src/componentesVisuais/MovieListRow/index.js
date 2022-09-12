import React from "react";
import './MovieListRow.css';
import {MdNavigateBefore} from 'react-icons/md'
import {MdNavigateNext} from 'react-icons/md'

export default ({title,itens}) => {
    return(

        <div className="movieListRow">
            <h2>{title}</h2>
            <div className="movieListRow--left">
                <MdNavigateBefore style ={{fontSize: 1000}} />
            </div>
            <div className="movieListRow--right">
                <MdNavigateNext style ={{fontsize: 1000}} />
            </div>
            
            <div className="movieListRow--listarea">
                <div className="movieListRow--list">
                    {itens.results.lenght =! 0 && itens.results.map((item, key) =>(
                        <div key = {key} className="movieListRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt = {item.original_title}/>
                        </div>
                        
                    ))}
                </div>

            </div>
        </div>
    );

} 