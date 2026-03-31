import { createSilce } from '@reduxjs/toolkit'
const createSilce = createSilce({
    name: "counter",
    initialState: 0,
    reducers:{
    increment: (count) =>{
        return count + 2;
    }
    },
});

export const counterReducer = counterSlice.reducer;

export const { increment} = counterSlice.actions;