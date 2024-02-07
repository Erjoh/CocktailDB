import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ProductList from "../components/ProductList";
import {getPopular} from "../redux/store/cocktailSlice";

const Popular = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cocktails = useSelector(state => state.cocktails.popular)

    useEffect(() => {
        dispatch(getPopular())
    }, [dispatch])
    return (
        <Layout>
            <div className="container">
                <div className={'backDiv'}>
                    <button onClick={() => navigate(-1)}>Back</button>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white'}}>
                    <h3>{cocktails.strDrink}</h3>
                    <p>{cocktails.strInstructions}</p>
                    <span>{cocktails.strDescription}</span>
                </div>
            </div>
        </Layout>
    );
};

export default Popular;