import React, { useState } from "react";
import "./App.css";
import ToDoList from "./List";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const itemsInList = () => {
    setItems((oldItems) => {
      if (inputList !== "") {
        return [...oldItems, inputList];
      } else {
        return [...oldItems];
      }
    });
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <h1>To Do List</h1>
        <br />
        <input type="text" placeholder="Add Item Name" onChange={itemEvent} />
        <button onClick={itemsInList}> add </button>
        <ol>
          {items.map((itemVal, index) => {
            return (
              <ToDoList
                text={itemVal}
                key={index}
                id={index}
                letText={itemVal}
                onSelect={deleteItem}
              /> 
            );
          })}
        </ol>
      </div>
    </>
  );
};
export default App;
