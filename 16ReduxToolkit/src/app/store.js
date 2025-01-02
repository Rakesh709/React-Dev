//step 1 to setup store
//follow th doc
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'


export const store = configureStore({
    reducer :{
        todo : todoReducer,
    }
})
//most of the time chije object he lengi
//every application will have only 1 store 
// that is single source of truth