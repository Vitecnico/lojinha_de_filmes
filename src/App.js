import React, { useEffect, useState } from "react";
import Tmdb from "./API/Tmdb";
import MovieListRow from "./componentesVisuais/MovieListRow";

export default () => {
  
  const [movieList, setMovieList] = useState([]);
  
  useEffect(() =>{
    const loadTmdbData = async() =>{
      //Pegando a lista total do Tmdb.js
      let list = await Tmdb.getHomeList();
      setMovieList(list);

    }

    loadTmdbData();

  },[]);
  
  
  return(
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
         <MovieListRow />
        ))}

      </section>
      
    </div>
  );

 
}