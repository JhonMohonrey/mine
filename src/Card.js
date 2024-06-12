import React from 'react';
import coin from './asset/star (1).png'
import bomb from './asset/blast.png'

function Card(props) {
    return (
        <div className='mainCard'>
            <>{props.value === "active" ? <img src={bomb} /> : <img src={coin}/>}</>
        </div>
    );
}

export default Card;