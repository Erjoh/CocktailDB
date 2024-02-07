import React, {useEffect,} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import Card from "../components/Card";
import Layout from "../components/Layout";
import {useDispatch, useSelector} from "react-redux";
import {getSearch} from "../redux/store/cocktailSlice";
import NotFound from "./NotFound";

const Search = () => {
    const {name} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cocktails = useSelector(state => state.cocktails.search)

    useEffect(() => {
        dispatch(getSearch(name));
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
                                            <Card cocktail={cocktail} />
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )

};

export default Search;