import { createSlice } from "@reduxjs/toolkit";

//create slice named cart using createSlice() function.
const cartSlice = createSlice({
    //config
    //name
    name: "cart",

    //initial state is object, which have cart items
    initialState: {
        items: [],
    },
    //reducers -> object
    reducers: {
        //different type of actions
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0; //[]
        },
    }
});

//export two things
//actions
export const {addItem,removeItem,clearCart} = cartSlice.actions;
//reducer
export default cartSlice.reducer;