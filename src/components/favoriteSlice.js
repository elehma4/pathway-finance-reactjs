import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favorites: []
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
        }
    }
})

export const { addFavorite, removeFavorite } = favSlice.actions;

export default favSlice.reducer;