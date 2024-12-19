import {useTodos} from '../TodosContext.jsx';
import Todo from './Todo.jsx';


function TodosList() {

  const store = useTodos();

  return (
    <>
        <div className="todos">
          {store.filteredTodos().length ? store.filteredTodos().map(todo =>
            <Todo
            key={todo.id}
            todo={todo}
            />
          ) : <h3>No tasks here. Please add one to see here!</h3>
        }

        </div>
    </>
  )
}

export default TodosList