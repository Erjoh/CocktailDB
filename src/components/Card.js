import React from 'react';

const Card = ({cocktail}) => {
    return (
        <div className={'box'}>
            <div className={'cardWrapper'}>
                <h3>{cocktail.strDrink}</h3>
                <img width={'250px'} src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
            </div>
        </div>
    );
};

export default Card;