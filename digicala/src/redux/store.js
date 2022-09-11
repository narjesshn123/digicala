import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './reducers/Cart.reducer'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { combineReducers } from '@reduxjs/toolkit'
const persistConfig = {
    key: 'root',
    storage,
  }
  const reducer = combineReducers({
        cart: CartReducer
  })
  const persistedReducer = persistReducer(persistConfig, reducer)
  const store = configureStore({
    reducer: persistedReducer, 
    middleware: [logger],         
  })
  export const persistor = persistStore(store)
export default store                