import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import ProductList from "../components/ProductList";

const HomePage = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const [cocktails, setCocktails] = useState([])
    useEffect(() => {
        axios('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
            .then(res => setCocktails(res.data.drinks))
    }, [search])

    const handleSearch = () => {
        navigate(`/search/${search}`)
    }

    return (
        <Layout>
            <div className={'searchArea'}>
                <input className={'searchInput'} onChange={(e) => setSearch(e.target.value)} placeholder={'name of cocktail'} type={'text'}/>
                <button className={'searchBtn'} onClick={handleSearch}>Search</button>
            </div>
            <div className={'container'}>
                <ProductList cocktails={cocktails}/>
            </div>
        </Layout>
    );
};

export default HomePage;