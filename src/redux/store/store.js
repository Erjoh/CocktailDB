import {configureStore} from "@reduxjs/toolkit";
import cocktailReducer from './cocktailSlice'

export default configureStore({
    reducer: {
        cocktails: cocktailReducer,
    }
})