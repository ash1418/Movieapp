import React from "react";

class MovieCard extends React.Component{
    render(){
        return (
            <div className="main">
             <div className="movie-card">
                <div className="left">
                    <img src="https://static.hd-trailers.net/images/-159759-poster-xlarge.jpg" alt="Poster"/>
                </div>
                <div className="right">
                   <div className="title"> Oppenheimer </div>
                   <div className="plot"> During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. </div>
                   <div className="prize"> Rs.1999/ only </div>  
                   <div className="footer">
                    <div className="rating">9.1</div>
                    <div className="stars">star</div>
                    <button className="favourite-btn"> Favourite </button>
                    <button className="cart-btn">Add to cart</button>
                   </div>                 
                </div>
             </div>    
             </div>
        )
    }
}
export default MovieCard;