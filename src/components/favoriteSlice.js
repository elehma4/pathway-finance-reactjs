import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favorites: [],
    cryptoFavorites: []
}

const favSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action) {
            state.favorites.push(action.payload);
        },
        removeFavorite(state, action){
            const index = state.favorites.findIndex(fav => fav.symbol === action.payload.symbol);
            if (index !== -1){
                state.favorites.splice(index, 1);
            }
        },
        addCryptoFavorite(state, action) {
            // console.log('state:', JSON.stringify(state));
            // console.log('action:', action);
            // console.log(JSON.stringify(state.cryptoFavorites));
            state.cryptoFavorites = state.cryptoFavorites || [];
            state.cryptoFavorites.push(action.payload);
            console.log('state:', JSON.stringify(state));
        },
        removeCryptoFavorite(state, action){
            const index = state.cryptoFavorites.findIndex(fav => fav.symbol === action.payload.symbol);
            if (index !== -1){
                state.cryptoFavorites.splice(index, 1);
            }
        }
    }
})

export const { addFavorite, removeFavorite, addCryptoFavorite, removeCryptoFavorite } = favSlice.actions;

export default favSlice.reducer;