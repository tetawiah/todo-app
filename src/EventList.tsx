import {ReactElement} from "react";

export default function EventList({list,onEventChecked,onEventDelete}) :ReactElement {
    return (
    <div className="eventList">
        {list.map(el=> <Event key={el.id} id = {el.id} name={el.todo} isChecked={el.isChecked} onEventChecked={onEventChecked} onEventDelete={onEventDelete}/>)}</div>)
}

function Event({id,name,isChecked,onEventChecked,onEventDelete}) :ReactElement {
    return (
        <div className="event">
            <div className="checkItem">
                <input type="checkbox" checked={isChecked} onChange={() => onEventChecked(id)}/>
                <p style={{textDecoration : isChecked ? 'line-through' : ''}}>{name}</p>
            </div>
            <p onClick={() => {onEventDelete(id)}}>&times;</p>
        </div>)
}