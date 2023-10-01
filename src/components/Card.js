
import "../style/style.css";
import myImage from "../image/car.jpg";

const Card = (props)=>{
    const {image,title, price, rating, description} = props;
    return <div className='card'>
   <img className="image" src={image} alt="car" />
    <h3 className="card1">{title}</h3>
    <p className="price">Price: {price} </p>
    <p className="rating">Rating: {rating}</p>
    <p className="card2">{description}</p>
    <p className="card3">29/09/23</p>
    <button className="button">Add to cart</button>
    </div>
    }

export default Card;


// import React, {Component} from 'react';
// import "../style/style.css";
// import myImage from "../image/car.jpg";

// class Card extends Component {
//     render(){
//         const {image,title, price, rating, description} = this.props;
//         return(
//         <div className='card'>
//            <img className="image" src={image} alt="car" />
//             <h3 className="card1">{title}</h3>
//             <p className="price">Price: {price} </p>
//             <p className="rating">Rating: {rating}</p>
//             <p className="card2">{description}</p>
//             <p className="card3">29/09/23</p>
//             <button className="button">Add to cart</button>
//         </div>
//         )
//     }
// }

// export default Card;

