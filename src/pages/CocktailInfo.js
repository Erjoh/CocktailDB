import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import ProductList from "../components/ProductList";

const CocktailInfo = () => {
    const [cocktail , setCocktail] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => setCocktail(res.data.drinks[0]))
    }, [id])
    return (
        <div>
            <div className={'backdiv'}>
                <button onClick={() => navigate('/')}>Back</button>
            </div>
            <div className={'cocktailWrapper'}>
                <div className={'tailWrapper'}>
                    <h3>{cocktail.strDrink}</h3>
                    <img width={'300px'} src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                    <p>{cocktail.strInstructions}</p>
                </div>
                <div className={'row'}>
                    <div className={'col-4'}>
                        <Link to={`/ingredient/${cocktail.Ingredient1}`}>
                            <img width={'200px'} src={`http://www.themealdb.com/images/ingredients/${cocktail.strIngredient1}.png`} alt=""/>
                            <p>{cocktail.strIngredient1}</p>
                        </Link>
                    </div>
                    <div className={'col-4'}>
                        <Link to={`/ingredient/${cocktail.Ingredient2}`}>
                            <img width={'200px'} src={`http://www.themealdb.com/images/ingredients/${cocktail.strIngredient2}.png`} alt=""/>
                            <p>{cocktail.strIngredient2}</p>
                        </Link>
                    </div>
                    <div className={'col-4'}>
                        <Link to={`/ingredient/${cocktail.Ingredient3}`}>
                            <img width={'200px'} src={`http://www.themealdb.com/images/ingredients/${cocktail.strIngredient3}.png`} alt=""/>
                            <p>{cocktail.strIngredient3}</p>
                        </Link>
                    </div>
                    <div className={'col-4'}>
                        <Link to={`/ingredient/${cocktail.Ingredient4}`}>
                            <img width={'200px'} src={`http://www.themealdb.com/images/ingredients/${cocktail.strIngredient4}.png`} alt=""/>
                            <p>{cocktail.strIngredient4}</p>
                        </Link>
                    </div>
                    <div className={'col-4'}>
                        <Link to={`/ingredient/${cocktail.Ingredient5}`}>
                            <img width={'200px'} src={`http://www.themealdb.com/images/ingredients/${cocktail.strIngredient5}.png`} alt=""/>
                            <p>{cocktail.strIngredient5}</p>
                        </Link>
                    </div>
                    <div className={'col-4'}>
                        <Link to={`/ingredient/${cocktail.Ingredient6}`}>
                            <img width={'200px'} src={`http://www.themealdb.com/images/ingredients/${cocktail.strIngredient6}.png`} alt=""/>
                            <p>{cocktail.strIngredient6}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CocktailInfo;