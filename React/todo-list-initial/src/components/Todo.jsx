import './Todo.scss'
function Todo({ todo, removeTodo, marcaTodo }) {

  return (
    <>
        <div className={`todo ${todo.isDone ? 'done' : ''}`}>
            <button className="erase" onClick={() => removeTodo(todo.id)}>x erase</button>
            <h3>
                {todo.title}
            </h3>
            <p>
                {todo.description}
            </p>
            <div className="task-check">
                <input type="checkbox" onClick={() => marcaTodo(todo.id)} defaultChecked={todo.isDone} />
                <label>
                    {!todo.isDone ? 'To-Do' : 'Done'}
                </label>
            </div>
        </div>

    </>
  )
}

export default Todo