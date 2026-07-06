import { createContext,useContext } from "react";

export const TodeContext=createContext({
    todos:[{
        id:1,
        todo:"Todo Msg",
        completed:false
    }],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}
})

export const useTodo=()=>{
    return useContext(TodeContext)
}

export const TodoProvider=TodeContext.Provider