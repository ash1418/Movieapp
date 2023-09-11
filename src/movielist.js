import React from "react";
import MovieCard from "./moviecard"
//import {movies} from './moviesdata'

class MovieList extends React.Component{
 
      render(){
        const {movies, addStars, decStars, toggleFav, toggleCart}=this.props;

        return (
               <>
                {movies.map((movi)=> (
                   <MovieCard movie={movi} 
                    addStars={addStars}
                    decStars={decStars}
                    toggleFav={toggleFav}
                    toggleCart={toggleCart}
                    key = {movi.id}/> 
                ))}
               
                
                
               </>
        )
    }
}
export default MovieList; 