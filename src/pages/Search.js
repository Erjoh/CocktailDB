import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Card from "../components/Card";

const Search = () => {
    const {name} = useParams()
    const [data, setData] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
            .then(response => {
                setData(response.data)
            })
    }, [name])

    return (
        <div>
            <button onClick={() => navigate('/')}>Back</button>
            {
                data?.drinks.map((cocktail, index) => (
                    <Card cocktail={cocktail} key={cocktail.idDrink}/>
                ))
            }

        </div>
    )

};

export default Search;