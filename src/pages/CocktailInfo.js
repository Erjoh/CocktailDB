import React, {useEffect,} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import Layout from "../components/Layout";
import {useDispatch, useSelector} from "react-redux";
import {getLookup} from "../redux/store/cocktailSlice";
import NotFound from "./NotFound";

const CocktailInfo = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const navigate = useNavigate()
    const cocktail = useSelector(state => state.cocktails.lookup)

    useEffect(() => {
        dispatch(getLookup(id))
    }, [dispatch, id])


    return (
        <Layout>
            <div className="container">
                <div className={'backDiv'}>
                    <button onClick={() => navigate('/')}>Back</button>
                </div>
                <div className={'cocktailWrapper'}>
                    <div className={'tailWrapper'}>
                        <h3>{cocktail.strDrink}</h3>
                        <div style={{display: 'flex', justifyContent: "space-between", padding: '30px', gap: '30px'}}>
                            <img width={'300px'} src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                            <div style={{display: 'flex', flexDirection: "column", gap: '30px', alignItems: 'center'}}>
                                <h4 style={{fontSize: '30px', color: '#ffffff'}}>Instructions</h4>
                                <p>{cocktail.strInstructions}</p>
                            </div>
                        </div>
                    </div>
                    <h3>Ingredient List</h3>
                    <div className={'row'}>
                        <div className={'col-4'}>
                            <Link to={`/ingredient/${cocktail.strIngredient1}`}>
                                <div className={'ingredientWrapper'}>
                                    <img width={'200px'} src={`https://www.themealdb.com/images/ingredients/${cocktail.strIngredient1}.png`} alt=""/>
                                    <p>{cocktail.strIngredient1}</p>
                                </div>
                            </Link>
                        </div>
                        <div className={'col-4'}>
                            <Link to={`/ingredient/${cocktail.strIngredient2}`}>
                                <div className={'ingredientWrapper'}>
                                    <img width={'200px'} src={`https://www.themealdb.com/images/ingredients/${cocktail.strIngredient2}.png`} alt=""/>
                                <p>{cocktail.strIngredient2}</p>
                                </div>
                            </Link>
                        </div>
                        <div className={'col-4'}>
                            <Link to={`/ingredient/${cocktail.strIngredient3}`}>
                                <div className={'ingredientWrapper'}>
                                    <img width={'200px'} src={`https://www.themealdb.com/images/ingredients/${cocktail.strIngredient3}.png`} alt=""/>
                                <p>{cocktail.strIngredient3}</p>
                                </div>
                            </Link>
                        </div>
                        <div className={'col-4'}>
                            <Link to={`/ingredient/${cocktail.strIngredient4}`}>
                                <div className={'ingredientWrapper'}>
                                    <img width={'200px'} src={`https://www.themealdb.com/images/ingredients/${cocktail.strIngredient4}.png`} alt=""/>
                                <p>{cocktail.strIngredient4}</p>
                                </div>
                            </Link>
                        </div>
                        <div className={'col-4'}>
                            <Link to={`/ingredient/${cocktail.strIngredient5}`}>
                                <div className={'ingredientWrapper'}>
                                    <img width={'200px'} src={`https://www.themealdb.com/images/ingredients/${cocktail.strIngredient5}.png`} alt=""/>
                                <p>{cocktail.strIngredient5}</p>
                                </div>
                            </Link>
                        </div>
                        <div className={'col-4'}>
                            <Link to={`/ingredient/${cocktail.strIngredient6}`}>
                                <div className={'ingredientWrapper'}>
                                    <img width={'200px'} src={`https://www.themealdb.com/images/ingredients/${cocktail.strIngredient6}.png`} alt=""/>
                                <p>{cocktail.strIngredient6}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CocktailInfo;