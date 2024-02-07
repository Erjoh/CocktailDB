import React from 'react';

const Card = ({cocktail}) => {
    return (
        <div className={'box'} style={{display: 'block', textAlign: 'center'}}>
            <div className={'cardWrapper'}>
                <h3 style={{
                    margin: '0',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxHeight: '2.4em',
                }}>{cocktail.strDrink}</h3>
                <img width={'200px'} src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
            </div>
        </div>
    );
};

export default Card;