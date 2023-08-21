import React from 'react';
import {Link} from "react-router-dom";
import Card from "./Card";

const ProductList = ({cocktails}) => {
    return (
        <div>
            <div className={'row'}>
                {
                    cocktails.map(cocktail => {
                        return (
                            <div className={'col-4'} key={cocktail.idDrink}>
                                <Link to={`/info/${cocktail.idDrink}`} className={'info-link'}>
                                        <Card cocktail={cocktail}/>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductList;