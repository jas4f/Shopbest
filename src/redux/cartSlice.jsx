import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : [],
    totalPrice : 0,
    totalQuantity : 0
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
       addtoCart(state,action){
        const product_Id  = action.payload;
        const item_present  = state.products.find((product)=>product.id === product_Id.id);
        if(item_present){
        item_present.totalPrice += item_present.price;
        item_present.quantity++;
        }
        else{
            state.products.push({
                id : product_Id.id,
                name : product_Id.name,
                price : product_Id.price,
                quantity : 1,
                totalPrice : product_Id.price,
                image : product_Id.image 

            })
        }

        state.totalPrice += product_Id.price;
        state.totalQuantity++;
       },
       removetoCart(state, action) {
           const product_Cart = action.payload;
           const findItem = state.products.find((product) => product.id === product_Cart);
           state.totalPrice -= findItem.price,
           state.totalQuantity -= findItem.quantity
           state.products = state.products.filter((product)=>product.id != product_Cart)
       },
       increaseQuantity(state, action){
        const id = action.payload;
        const findItem = state.products.find((product)=>product.id === id);
        if(findItem){
            findItem.quantity++;
            findItem.totalPrice += findItem.price;
            state.totalQuantity++;
            state.totalPrice += findItem.price;
        }
       },
       decreaseQuantity(state,action){
           const id = action.payload;
           const findItem = state.products.find((product) => product.id === id);
           if(findItem){
            findItem.quantity--;
            findItem.totalPrice -= findItem.price;
            state.totalQuantity--;
            state.totalPrice -= findItem.price;
           }
       }
    },
})

export const {addtoCart,removetoCart,increaseQuantity,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;