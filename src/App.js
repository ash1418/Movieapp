import React from 'react';
import ReactDOM from 'react-dom/client';
import MovieList from "./movielist";
import Navbar from './navbar';
import {movies} from './moviesdata'

class App extends React.Component{
  constructor(){
    super();
    this.state ={
        movies: movies,
        cartCount: 0
        
    }
}
handleIncStar = (movie) => {
     const{movies}=this.state;


     const mid= movies.indexOf(movie);
     if(movies[mid].stars>=5)
     {
        return;
     }

     movies[mid].stars+=0.5;

    this.setState({
         movies, //movies:movies can also be written as only movies
    })
}

handleDecStar = (movie) => {
    const{movies}=this.state;


    const mid= movies.indexOf(movie);
    if(movies[mid].stars<=0)
    {
       return;
    }

    movies[mid].stars-=0.5;

   this.setState({
        movies, //movies:movies can also be written as only movies
   })
}

handleFav= (movie) =>{
 
const{movies}=this.state;

const mid = movies.indexOf(movie);
movies[mid].fav=!movies[mid].fav;

this.setState({
    movies
})
}


handleCart=(movie)=>{
    let {movies,cartCount}=this.state;
    const mid = movies.indexOf(movie);
    movies[mid].inCart = !movies[mid].inCart;
    if(movies[mid].inCart)
    {
      cartCount++;
    }
    else cartCount--;
    this.setState({
          movies,
          cartCount
    })

}
    render(){
      
      const{movies,cartCount}=this.state;
      return(
        <>
          <Navbar cartCount={cartCount}
          />
          <MovieList movies={movies}
           addStars={this.handleIncStar}
           decStars={this.handleDecStar}
           toggleFav={this.handleFav}
           toggleCart={this.handleCart}
          />
        </>
    );
  }
  
}
export default App;
