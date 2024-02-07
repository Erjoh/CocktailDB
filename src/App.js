import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CocktailInfo from "./pages/CocktailInfo";
import Search from "./pages/Search";
import IngredientPage from "./pages/IngredientPage";
import NotFound from "./pages/NotFound";
import Popular from "./pages/Popular";
import Alcoholic from "./pages/Alcoholic";
import NonAlcoholic from "./pages/NonAlcoholic";

const App = () => {
    return (
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/about' element={<AboutPage />}/>
                <Route path='/info/:id' element={<CocktailInfo />}/>
                <Route path='/search/:name' element={<Search />}/>
                <Route path='/ingredient/:name' element={<IngredientPage />}/>
                <Route path='/popular' element={<Popular />}/>
                <Route path='/alcoholic' element={<Alcoholic />}/>
                <Route path='/non_alcoholic' element={<NonAlcoholic />}/>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
    );
};

export default App;