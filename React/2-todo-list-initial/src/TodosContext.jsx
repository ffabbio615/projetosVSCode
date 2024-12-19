import { createContext, useReducer, useContext, useState, useEffect } from "react";

export const TodosContext = createContext("");

const lista = localStorage.getItem('listar') ? JSON.parse(localStorage.getItem('listar')) : [];
    // { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: true },
    // { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: false},
    // { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false }
  
  
  
  export function TodosProvider({children}) {
  
    const [listar, dispatch] = useReducer(TodosReducer, lista);

    const [modalIsActive, setModalIsActive] = useState(false);

    const [filterBy, setFilterBy] = useState('');

    function filteredTodos(){
      switch(filterBy){
        case 'todo':
          return listar.filter(todo => !todo.isDone);
        case 'done':
          return listar.filter(todo => todo.isDone);
        default:
          return listar;
      }
    }

    useEffect(()=>{
      localStorage.setItem('listar', JSON.stringify(listar))
    },[listar])

  
    return (
      <>
        <main>
          <TodosContext.Provider 
            value={
              {
                listar, 
                dispatch,
                modalIsActive,
                setModalIsActive,
                filterBy,
                setFilterBy,
                filteredTodos
              }
            }>
            {children}
          </TodosContext.Provider>
  
        </main>
      </>
    )
  }

  export function useTodos(){
    return useContext(TodosContext);
  }


function TodosReducer(todos, action)
{

    switch (action.type){
        case 'deleted': {
            if(confirm("Tem certeza que deseja remover essa tarefa da lista?")){
                return todos.filter(todo => todo.id !== action.id);
              }else{
                return todos;
              }
        }
        case 'added': {
          let newTodo = action.newTodo;
          newTodo.id = todos.length ? Math.max(...todos.map(todo => todo.id)) +1: 1;
          console.log(newTodo);
          return [...todos, newTodo];
        }
        case 'toggledIsDone': {
            return todos.map(todo=> {
                if(todo.id === action.id){
                    todo.isDone = !todo.isDone;
                    return todo;
                }else{
                    return todo;
                }
            })
        }
    }

}