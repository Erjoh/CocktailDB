import React from 'react';
import {Link} from "react-router-dom";
import Card from "./Card";
import NotFound from "../pages/NotFound";

const ProductList = ({cocktails}) => {

    if (cocktails === null) {
        return <NotFound/>
    }

    return (
        <div>
            <div className={'row'}>
                {
                    cocktails.map(cocktail => {
                        return (
                            <div className={'col-4'} key={cocktail.idDrink}>
                                <Link to={`/info/${cocktail.idDrink}`} className={'info-link'}>
                                        <Card cocktail={cocktail} />
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