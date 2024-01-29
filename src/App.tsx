import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import './App.css'
import EventList from "./EventList.tsx";
import {Todo} from "./interfaces.ts";


function App() {
const [todo,setTodo] = useState<string>("");
const[todoList,setTodoList] = useState<Todo[]>([]);

function updateTodoList(newTodo :Todo) :void {
    if(newTodo.todo.length < 3) return;
    setTodoList([...todoList,newTodo]);
    setTodo("");
}

function handleOnEventChecked(eventId: string) :void {
   setTodoList(list=> {
       return list.map(todo => {
           if(todo.id === eventId) {
               return {...todo,isChecked: !todo.isChecked}
           } else return todo;
       }
       );
   });
}

  return (
      <div className="container">
        <div className="main">
            <h3>Todo App</h3>
            <input id="noteInput" type="text" placeholder="What do you need to do?"
                   value={todo}
                   onChange={e=> setTodo(e.target.value)}
                   onBlur={() =>  updateTodoList({id:uuidv4(),  todo, isChecked: false})
               }/>
            {todoList.length > 0 ? <EventList list={todoList} onEventChecked={handleOnEventChecked}/> : <p className="emptyResponse">No events added</p> }

            <hr/>
            <div className="bottom">
                <button onClick={() => {}}>Check All</button>
                <p> items remaining</p>
            </div>
        </div>
      </div>

  )
}

export default App
