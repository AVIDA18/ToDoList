import React from "react";

const ToDoList =(props)=> {
    return(
        <>
        <div className="list_div">
            <button className="delete_button" onClick={()=>{
                props.onSelect(props.id);
            }}>❌</button>
            <h3>{ props.text }</h3>
        
        </div>
        </>
    )
}
export default ToDoList;