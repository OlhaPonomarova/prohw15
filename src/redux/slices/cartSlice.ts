import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface CardStateInterface {
    posts: string[];
}

// Define the initial state using that type
const initialState: CardStateInterface = {
    posts: [],
};

export const cardSlice = createSlice({
    name: "cart",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<string[]>) => {
            return { ...state, posts: action.payload };
        },
    },
})

export const { setPosts } = cardSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cart.posts;

export default cardSlice.reducer;