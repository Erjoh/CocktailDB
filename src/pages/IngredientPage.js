import React, {useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getIngredient} from "../redux/store/cocktailSlice";
import Layout from "../components/Layout";
import NotFound from "./NotFound";

const IngredientPage = () => {
    const {name} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cocktails = useSelector(state => state.cocktails.ingredients)

    useEffect(() => {
        dispatch(getIngredient(name))
    }, [dispatch, name])

    if (cocktails === null) {
        return <NotFound/>
    }

    return (
        <Layout>
            <div>
                <div className="container">
                    <div className="backDiv">
                        <button onClick={() => navigate('/')}>Back</button>
                    </div>
                    <div className={'row'}>
                        {
                            cocktails.map(cocktail => {
                                return (
                                    <div className={'col-4'} key={cocktail.idDrink}>
                                        <Link to={`/info/${cocktail.idDrink}`} className={'info-link'}>
                                            <div className={'cardWrapper'} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flexDirection: 'column'
                                            }}>
                                                <h3 style={{
                                                    margin: '0',
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    maxHeight: '2.4em',
                                                }}>{cocktail.strDrink}</h3>
                                                <img width={'200px'} src={cocktail.strDrinkThumb}
                                                     alt={cocktail.strDrink}/>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default IngredientPage;