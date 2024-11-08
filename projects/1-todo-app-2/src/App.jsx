
import "./components/App.css"
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";


function App() {

  const todoItems=[{
    name:'buy milk',
    dueDate:'4/10/2023',

  },
  {
    name:'go to college',
    dueDate:'4/10/2023',

  },
  {
    name:'buy bike',
    dueDate:'4/10/2023',

  }
];

  
  return (
    <center className="todo-container">
      <AppName/>
     
      <AddTodo/>
      <TodoItems todoItems={todoItems}/>

    </center>
  );
}

export default App;
