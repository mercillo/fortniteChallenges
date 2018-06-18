import React from 'react';

const Card = (props) => {
    const {name,week,id,image } = props
    console.log({image});
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">

            <div>
                <h2>{name}</h2>
                <p>{week}</p>
            </div>

            <img alt="Week" className="weekChallenge" src={image}/>
           
        </div>
    );
}

export default Card;
