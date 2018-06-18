import React from 'react';
import Card from './Card';

const CardList= ({weeks}) =>{

    return (
        <div>{
            weeks.map((user, i) => {
                    return (<Card 
                        key={i} 
                        id={weeks[i].id} 
                        name={weeks[i].name} 
                        image={weeks[i].image}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;