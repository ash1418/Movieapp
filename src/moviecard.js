function MovieCard(props) {
   
    
    
        
        const{movie,addStars,decStars,toggleFav,toggleCart}=props;
        const {title,plot,prize,poster,rating,stars,fav,inCart}=props.movie;

        return (

            <div className="main">
             <div className="movie-card">
                <div className="left">
                    <img src={poster} alt="Poster"/>
                </div>
                <div className="right">
                   <div className="title"> {title} </div>
                   <div className="plot"> {plot} </div>
                   <div className="prize"> Rs.{prize}/only </div>  
                   <div className="footer">
                    <div className="rating">{rating}</div>
                    <div className="stars-comp">
                      
                      <img className="star-btn" alt="decrease"
                      src="https://cdn-icons-png.flaticon.com/128/56/56889.png"
                      onClick={() =>
                      {decStars(movie)}
                      }/>
                      
                      <img
                      src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                      alt ="star" className="stars"/>
                     <img className="star-btn" alt="increase"
                      src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                      onClick={()=>{
                        addStars(movie)
                      }} />  

                     <span>{stars}</span>      
                    </div>

                    {/* {fav? <button onClick= {this.handleFav} className="unfavourite-btn">Un-favourite</button>:<button onClick= {this.handleFav} className="favourite-btn"> Favourite </button>} */}
                    
                    <button onClick= {()=>{
                       toggleFav(movie) }} className={fav?"unfavourite-btn":"favourite-btn"}>{fav?"Un-favourite":"Favourite"}</button>

                    <button onClick={() =>
                    {
                        toggleCart(movie)
                    }} className={inCart?"r-cart-btn":"cart-btn"}>{inCart?"Remove":"Add to cart"}</button>
                   </div>                 
                </div>
             </div>    
             </div>
        )
    
}
export default MovieCard;