import './Todo.scss'
import React from 'react';
import { useTodos } from '../TodosContext.jsx';

function Todo({todo}) {

    const contexto = useTodos();

  return (
    <>
        <div className={`todo ${todo.isDone ? 'done' : ''}`}>
            <button className="erase" onClick={() => contexto.dispatch({
        type: 'deleted',
        id: todo.id
      })}>x erase</button>
            <h3>
                {todo.title}
            </h3>
            <p>
                {todo.description}
            </p>
            <div className="task-check">
                <input type="checkbox" onClick={() => contexto.dispatch({type: 'toggledIsDone', id: todo.id})} defaultChecked={todo.isDone} />
                <label>
                    {!todo.isDone ? 'To-Do' : 'Done'}
                </label>
            </div>
        </div>

    </>
  )
}

export default Todo