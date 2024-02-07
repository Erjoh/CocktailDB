import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getCocktails = createAsyncThunk(
    'cocktails/getCocktails',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`);

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();

            return data.drinks;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getSearch = createAsyncThunk(
    'search/getSearch',
    async function (name, {rejectWithValue}) {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);

            if (!response.ok) {
                throw new Error('Cannot find! Server Error!');
            }

            const data = await response.json();

            return data.drinks;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getLookup = createAsyncThunk(
    'lookup/getLookup',
    async function (id, {rejectWithValue}) {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);

            if (!response.ok) {
                throw new Error('Failed to look up the cocktail! Server Error!');
            }

            const data = await response.json();

            return data.drinks[0];


        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getIngredient = createAsyncThunk(
    'ingredient/getIngredient',
    async function (name, {rejectWithValue}) {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`);

            if (!response.ok) {
                throw new Error('Failed! Server Error!');
            }

            const data = await response.json();

            return data.drinks;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getPopular = createAsyncThunk(
    'popular/getPopular',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/popular.php`);

            if (!response.ok) {
                throw new Error('Failed! Server Error!');
            }

            const data = await response.json();

            return data.drinks;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getAlcoholic = createAsyncThunk(
    'alcoholic/getAlcoholic',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`);

            if (!response.ok) {
                throw new Error('Failed! Server Error!');
            }

            const data = await response.json();

            return data.drinks;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getNonAlcoholic = createAsyncThunk(
    'non_alcoholic/getNonAlcoholic',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`);

            if (!response.ok) {
                throw new Error('Failed! Server Error!');
            }

            const data = await response.json();

            return data.drinks;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const cocktailSlice = createSlice({
    name: 'cocktails',
    initialState: {
        cocktails: [],
        search: [],
        lookup: [],
        ingredients: [],
        popular: [],
        alcoholic: [],
        nonAlcoholic: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getCocktails.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getCocktails.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.cocktails = action.payload;
        },
        [getCocktails.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getSearch.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getSearch.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.search = action.payload;
        },
        [getSearch.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getLookup.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getLookup.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.lookup = action.payload;
        },
        [getLookup.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getIngredient.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getIngredient.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.ingredients = action.payload;
        },
        [getIngredient.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getPopular.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getPopular.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.popular = action.payload;
        },
        [getPopular.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getAlcoholic.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAlcoholic.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.alcoholic = action.payload;
        },
        [getAlcoholic.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getNonAlcoholic.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getNonAlcoholic.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.nonAlcoholic = action.payload;
        },
        [getNonAlcoholic.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
});


export const {} = cocktailSlice.actions;

export default cocktailSlice.reducer