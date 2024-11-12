//step 1 to setup store
//follow th doc
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'


export const store = configureStore({
    reducer: todoReducer
})
//most of the time chije object he lengi
