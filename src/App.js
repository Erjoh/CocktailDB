import React from 'react';
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductList from "./components/ProductList";
import CocktailInfo from "./pages/CocktailInfo";
import Search from "./pages/Search";
import IngredientPage from "./pages/IngredientPage";

const App = () => {
    return (
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/about' element={<AboutPage />}/>
                <Route path='/info/:id' element={<CocktailInfo />}/>
                <Route path='/search/:name' element={<Search />}/>
                <Route path='/search/:name' element={<IngredientPage />}/>
            </Routes>
    );
};

export default App;