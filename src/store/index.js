//## Este import representa a strore donde se guardan los estados globales.
import { configureStore } from '@reduxjs/toolkit'
import products from './slices/products.slice'

export default configureStore({

//## Aqui se llaman los estados globales. 
  reducer:{
    products
  }
})