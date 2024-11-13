// step2

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, 
    text: "Hello world" 
    }
]
};

//step3 

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        //property and function
        addTodo:(state,action)=>{
            const todo={
                id: nanoid(), 
                text: action.payload
                //reduc-toolkit extention u will get
            }
            state.todos.push(todo)
            
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
    }
})


//step4 

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer 


//contextAPI : function kai declartion kr rhe thai but uski defination nhi likh rhe thai

//redux : defination in redux toolkit 

//addTodo:(state,action)=>{} this is syntax (state, action) always have access

//state is hande to hande situation from initialState

//action : to get some value like id in removeTodo

//jo jo reducer dego unko hi value update krunga
