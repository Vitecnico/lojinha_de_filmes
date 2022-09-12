import React, { useEffect, useState } from "react";
import Tmdb from "./API/Tmdb";
import "./App.css"
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
         <MovieListRow key={key} title={item.title} itens={item.itens} />
        ))}

      </section>
      
    </div> 
  );

 
}