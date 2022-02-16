import Todo from './Todo';
const TodoList = ({todos, setTodos, filtredTodos}) => {
return(
    <div className="todo-container">
        <ul className='todo-list'>
          {filtredTodos.map ((todo) =>(
              <Todo key={todo.id}
               todo={todo}
               todos={todos} 
               setTodos={setTodos} />
          ))}
        </ul>
  </div>
);
}
export default TodoList