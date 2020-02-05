import React, { useState } from 'react';
import './App.css';


type formElement = React.FormEvent<HTMLFormElement> ; 

interface ITodo{
  text : string , 
  complete:boolean
}

const App = ()  => {
const [value , setValue] = useState<string>("");
const [todos , setTodos] = useState<ITodo[]>([]);


const handleSubmit = (e: formElement): void => {
  e.preventDefault();
  addTodo(value);
  setValue('');
};

const addTodo  = (text : string) : void=>{
  const newTodos : ITodo[] = [...todos , {text , complete : false}]
  setTodos(newTodos)
}

const deleteTodo = (index : number):void =>{
  const newTodos : ITodo[] = todos ; 
   newTodos.splice(index , 1);
   setTodos(newTodos) ; 
}

const completeTodo = (index: number): void => {
  const newTodos: ITodo[] = todos
  newTodos[index].complete = !newTodos[index].complete
  setTodos(newTodos)
}

  return (
    <div className="App">
       <form  onSubmit={handleSubmit}>
         <h1>Todo List</h1>
          <input 
            type="text"
             value={value}
             onChange={e=>setValue(e.target.value)}
          />
          <button type="submit">Add Todo</button>
          {todos.map((todo : ITodo , index : number)=>
            <div key={index} style={{display : 'flex'}}>
              <div style={{ textDecoration: todo.complete ? 'line-through' : '' }}>
              {todo.text}
              </div>
              <button  onClick={() => completeTodo(index)}>
              {todo.complete ? 'Incomplete' : 'Complete'}
            </button>
              <button onClick={()=>deleteTodo(index)}>X</button>
              </div>
           )}
       </form>
    </div>
  );
}

export default App;
