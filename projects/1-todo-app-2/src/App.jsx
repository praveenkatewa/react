
import "./App.css"
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from './components/TodoItem1';
import TodoItem2 from "./components/todoItem2";

function App() {
  return (
    <center className="todo-container">
      <AppName/>
     
      <AddTodo/>
      <div className='items-container'>
      <TodoItem/>
      <TodoItem2/>

      </div>
      

     
      



    </center>
  );
}

export default App;
