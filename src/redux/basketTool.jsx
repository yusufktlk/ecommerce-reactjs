import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    basket:[],
    quantity: 0,
    
}

const basketTool = createSlice({
    name:"user",
    initialState,
    reducers:{
        addBasket:(state,action) =>{
            const find = state.basket.findIndex(product => product.id === action.payload.id)
            if(find>=0){
                state.basket[find].quantity +=1
              
            }else{
                const tempvar = {...action.payload, quantity:1}
                state.basket.push(tempvar)
            }
        },
        removeBasket:(state,action) =>{
            const find = state.basket.findIndex(product => product.id === action.payload.id)
            if(find>=0){
                state.basket[find].quantity -=1
               
            }else{
                const tempvar = {...action.payload, quantity:1}
                state.basket.push(tempvar)
            }
        }
    }
    
})

export const {addBasket,removeBasket} = basketTool.actions;
export default basketTool.reducer;