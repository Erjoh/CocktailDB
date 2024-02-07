import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import {useNavigate} from "react-router-dom";
import ProductList from "../components/ProductList";
import {useDispatch, useSelector} from "react-redux";
import {getAlcoholic} from "../redux/store/cocktailSlice";


const Alcoholic = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cocktails = useSelector(state => state.cocktails.alcoholic)

    useEffect(() => {
        dispatch(getAlcoholic())
    }, [dispatch])
    return (
        <Layout>
            <div className="container">
                <div className={'backDiv'}>
                    <button onClick={() => navigate(-1)}>Back</button>
                </div>
                <div>
                    <ProductList cocktails={cocktails}/>
                </div>
            </div>
        </Layout>
    );
};

export default Alcoholic;