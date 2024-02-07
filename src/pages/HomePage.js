import React, {useEffect,} from 'react';
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import {useDispatch, useSelector,} from "react-redux";
import {getCocktails} from "../redux/store/cocktailSlice";
import Loading from "./LoadingPage";
import NotFound from "./NotFound";

const HomePage = () => {
    const dispatch = useDispatch()
    const cocktails = useSelector(state => state.cocktails.cocktails)

    useEffect(() => {
        dispatch(getCocktails());
    }, [dispatch])

    if (cocktails === null) {
        return <NotFound/>
    }

    return (
        <Layout>
            <div className={'container'}>
                <ProductList cocktails={cocktails}/>
            </div>
        </Layout>
    );
};

export default HomePage;