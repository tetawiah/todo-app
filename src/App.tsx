import { useState } from 'react'
import './App.css'
import EventList from "./EventList.tsx";

function App() {

  return (
      <div className="container">
        <div className="main">
            <h3>Todo App</h3>
            <input id="noteInput" type="text" placeholder="What do you need to do?"/>
            <EventList/>
            <hr/>
            <div className="bottom">
                <button>Check All</button>
                <p>0 items remaining</p>
            </div>
        </div>
      </div>

  )
}

export default App
