import React from "react";

class MovieCard extends React.Component{
    constructor(){
        super();
        this.state ={
            title:"Oppenheimer",
            plot: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project.",
            prize: 1999,
            rating:9.1,
        }
    }
    render(){
        const {title,plot,prize,rating}=this.state;
        
        return (

            <div className="main">
             <div className="movie-card">
                <div className="left">
                    <img src="https://static.hd-trailers.net/images/-159759-poster-xlarge.jpg" alt="Poster"/>
                </div>
                <div className="right">
                   <div className="title"> {title} </div>
                   <div className="plot"> {plot} </div>
                   <div className="prize"> {prize} only </div>  
                   <div className="footer">
                    <div className="rating">{rating}</div>
                    <div className="stars-comp">
                      
                      <img className="star-btn" alt="decrease"
                      src="https://cdn-icons-png.flaticon.com/128/56/56889.png"/>
                      
                      <img
                      src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                      alt ="star" className="stars"/>
                     <img className="star-btn" alt="increase"
                      src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"/>  

                     <span>0</span>      
                    </div>
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