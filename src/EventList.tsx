import {ReactElement} from "react";

export default function EventList() :ReactElement {
    return (
        <div className="eventList">{Array.from({length:5},(_,i) =>  <Event/> )}</div>);
}

function Event() :ReactElement {
    return (
        <div className="event">
            <div className="checkItem">
                <input type="checkbox"/>
                <p>HIII</p>
            </div>
            <p onClick={() => {
            }}>&times;</p>
        </div>)
}