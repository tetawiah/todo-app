import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import './App.css'
import EventList from "./EventList.tsx";
import {Todo} from "./interfaces.ts";


function App() {
const [todo,setTodo] = useState<string>("");
const[todoList,setTodoList] = useState<Todo[]>([]);

const uncheckedCount = todoList.filter(el=> !el.isChecked).length;

function updateTodoList(newTodo :Todo) :void {
    if(newTodo.todo.length < 3) return;
    setTodoList([...todoList,newTodo]);
    setTodo("");
}

function handleOnEventChecked(eventId?: string) :void {
    if(!eventId) {
        setTodoList(list => list.map(todo => {
            return {...todo,isChecked:true}
        }));
    }

   setTodoList(list=> {
       return list.map(todo => {
           if(todo.id === eventId) {
               return {...todo,isChecked: !todo.isChecked}
           } else return todo;
       }
       );
   });
}

function handleOnEventDelete(eventId: string) {
    setTodoList(list=> list.filter(el=> el.id !== eventId));
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
            {
                todoList.length > 0
                ?
                <EventList
                    list={todoList}
                    onEventChecked={handleOnEventChecked}
                    onEventDelete={handleOnEventDelete}/>
                : <p className="emptyResponse">No events added</p> }

            <hr/>
            <div className="bottom">
                {todoList.length > 0 && <button onClick={() => handleOnEventChecked()}>Check All</button>}
                <p> {uncheckedCount} items remaining</p>
            </div>
        </div>
      </div>

  )
}

export default App
