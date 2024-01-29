import {ReactElement} from "react";
import {Todo} from "./interfaces.ts";

export default function EventList({list,onEventChecked}) :ReactElement {
    return (
    <div className="eventList">{list.map(el=> <Event key={el.id} id = {el.id} name={el.todo} isChecked={el.isChecked} onEventChecked={onEventChecked}/>)}</div>)
}

function Event({id,name,isChecked,onEventChecked}) :ReactElement {
    return (
        <div className="event">
            <div className="checkItem">
                <input type="checkbox" onChange={() => onEventChecked(id)}/>
                <p style={{textDecoration : isChecked ? 'line-through' : ''}}>{name}</p>
            </div>
            <p onClick={() => {}}>&times;</p>
        </div>)
}