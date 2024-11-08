import TodoItem from "./todoItem";
const TodoItems=({todoItems})=>{
  return  <div className='items-container'>
  {todoItems.map((item)=>(
    <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
  ))}


  {/* <TodoItem todoName="buy milk" todoDate="4/10/2023"/>
  <TodoItem todoName="go to college" todoDate="4/10/2023"/> */}
  
</div>
};

export default TodoItems;