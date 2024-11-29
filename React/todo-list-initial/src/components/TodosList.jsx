import React, {useState} from 'react';
import Todo from './Todo.jsx';

const lista = [
  { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: true },
  { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: false},
  { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false }
];


function TodosList() {

  const [listar, setListar] = useState(lista);

  function removerTodo(id)
  {
    if(confirm("Tem certeza que deseja remover essa tarefa da lista?")){
      setListar(listar.filter(todo => todo.id !== id));
    }
  }

  function marcarTodo(id){
    setListar(listar.map(todo =>{
      if (todo.id === id){
        todo.isDone = !todo.isDone;
        return todo;
      }
      else{
        return todo;
      }
    }))}

  return (
    <>
        <div className="todos">
          {listar.map(todo =>
            <Todo
            key={todo.id}
            todo={todo}
            removeTodo={(id) => removerTodo(id)}
            marcaTodo={(id) => marcarTodo(id)}
            />
          )
        }

        </div>
    </>
  )
}

export default TodosList