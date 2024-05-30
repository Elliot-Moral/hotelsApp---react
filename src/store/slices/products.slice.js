import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const  productsSlice = createSlice({
    name:'products',
    initialState: null,
    reducers:{
        setPorducts: (state, action ) => action.payload
    }

})


export const {setPorducts }= productsSlice.actions;
export default productsSlice.reducer;


export const getHotelsThunk = (url) => (dispatch) =>{
    axios.get(url).then(res => dispatch(setPorducts(res.data)))
    .catch(err => console.log(err))
}

