import './app.css';
import {useState, useEffect} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos , setTodos]= useState([]);
  const [status, setStatus]= useState('all');
  const [filtredTodos, setFiltredTodos] = useState([]);
  useEffect(() => {
    getLocalTodos();
  },[])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos, status])
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFiltredTodos(todos.filter((todo) => todo.completed === true ))
        break;
      case 'uncompleted':
        setFiltredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFiltredTodos(todos)
        break;
      }
  };
  const saveLocalTodos = () =>{
    localStorage.setItem('todos',JSON.stringify(todos));

  }

  const getLocalTodos = () =>{
    if(localStorage.getItem('todos')=== null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal= JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
    <header>To do list</header>
        <Form todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}/> 
        <TodoList todos={todos} 
        setTodos={setTodos}
        filtredTodos={filtredTodos}
        />
    </div>
  );
}

export default App;
