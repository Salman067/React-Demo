import React from 'react';
import Card from './Card.js';
import Datas from '../data/data.json';
import Users from "../data/user.json";
import "../style/style.css";

const Item=()=>{
    return <div className='card-container'>
         {Datas.map((item)=> (
            <Card 
            image={item.image}
            title={item.title} 
            price={item.price} 
            rating={item.rating}  
            description={item.description}
            />
         ))}
         {/* {Users.map((user,index)=>(
            <article key={index}>
                
                <h3>Name : {user.name}</h3>
                <p>Age : {user.age}</p>

                {user.phones.map((phone,index)=>(
                     <div key={index}>
                        <p>Home : {phone.home}</p>
                        <p>Office : {phone.office}</p>
                     </div>  
                ))}
            </article>
         ))} */}
      
    </div>
}

export default Item
