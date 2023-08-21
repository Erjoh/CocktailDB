import React from 'react';
import {useParams} from "react-router-dom";

const IngredientPage = ({cocktail}) => {
    const {name} = useParams()
    return (
        <div>
            <h3>Ingredient Page</h3>
        </div>
    );
};

export default IngredientPage;