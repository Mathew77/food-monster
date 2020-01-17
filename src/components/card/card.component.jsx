import React from  'react';
import './card.styles.css';

export const Card = props => ( 
    <div className="card-container">  
        <img alt="foods" src={'https://robohash.org/${props.food.id}?set=set2&seize=180x180'} />    
            <h1 > {props.food.name}</h1>
            <p>{props.food.email}</p>
    </div>
);