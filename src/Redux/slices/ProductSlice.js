import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const findProduct = state.find((pro) => pro.id === action.payload.id);
      if (findProduct) {
        findProduct.quentity += 1;
      } else {
        const productClone = { ...action.payload, quentity: 1 };
        state.push(productClone);
      }
    },
    deleteProduct: (state, action) => {
      return (state = state.filter((pro) => pro.id !== action.payload));
    },
    incrementPro:(state,action)=>{
      const findPro=state.find((item)=>item.id===action.payload.id)
      if(findPro){
        findPro.quentity++;
      }return;
    },
    decrementPro:(state,action)=>{
      const findPro=state.find((item)=>item.id===action.payload.id)
      if(findPro){
        findPro.quentity--;
      }
    },
    clearAll:(state,action)=>{
       return state=[];
    }
  },
});
export const { addProduct, deleteProduct,decrementPro,incrementPro,clearAll} = ProductSlice.actions;
export default ProductSlice.reducer;
