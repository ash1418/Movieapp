import React from "react";
import styles from './navbar.module.css';

// const Nav = styled.div`
//         width:100%;
//         height:70px;
//         background-color:${(props)=>props.backgroundColor};
//         display: flex;
//         justify-content: space-between;
//         align-items:center;

// `;
// const Title = styled.div `
//         font-size: 30px;
//         font-weight:1000;
//         color:;
//         marginLeft:20;
//         &:hover{
//             color:red;
//         }

// `

class Navbar extends React.Component{
    

    render(){
        const{cartCount}=this.props;
        return(
            <>
            <div className={styles.nav}>
                <div className={styles.title}>
                       Movie App
                </div>
                <div className={styles.cartContainer}>
                      <img alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png" 
                      className={styles.cartIcon}/>
                      <span className={styles.cartCount}>{cartCount}</span>
                </div>
            </div>
            </>
        )
    }
}

export default Navbar;
 
// const styles={
//     nav:{
//         width:"100%",
//         height:"70px",
//         background:"moccasin",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems:"center"
//     },
//     title:{
//         fontSize:30,
//         fontWeight:1000,
//         color:"",
//         marginLeft:20,
//     },
//     cartContainer:{
//         position:"relative",
//         cursor:"pointer"
//     },
//     cartIcon:{
//         height:48,
//         marginRight:20
//     },

//     cartCount:{
//         position:"absolute",
//         right:15,
//         top:-8,
//         width:20,
//         background:"black",
//         paddingLeft:10,
//         color:"white",
//         borderRadius:50,
//         border: "2px solid white",
//         fontWeight:600
//     }
// }