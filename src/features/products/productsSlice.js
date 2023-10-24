import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {getProducts} from './productsAPI'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const {data} = await getProducts();
    return data;
  })

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products:[],
    status:'idle'
  },

  reducers: {
  },

  extraReducers: (builder) =>{
    builder
        .addCase(fetchProducts.pending, (state)=>{
            state.status='loading'
        })
        .addCase(fetchProducts.fulfilled, (state,action)=>{
            state.status='idle',
            state.products=action.payload;
        })
  }

})

// Action creators are generated for each case reducer function
// export const {  } = productsSlice.actions

export default productsSlice.reducer