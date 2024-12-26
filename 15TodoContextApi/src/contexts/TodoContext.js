import { createContext } from "react";
import { useContext } from "react";



export const TodoContext = createContext({
    //in context what are the menthod and value 
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed: false
        }
    ],
    // functinality nhi only defination
    addTodo : (todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete :(id)=>{}

})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider