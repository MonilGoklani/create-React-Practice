//import React from 'react'

import React from "react";
import './TodoItem.css'
import { useEffect} from "react";

const TodoItem = ({ items, setItems, handleDelete}) => {


useEffect(()=>{
    if(items.length > 0){
        console.log('todo added')
    }
},[items])

const strikeOut = (task) => {
    const newItems = items.map(item => {
        if(item.todo === task.todo){
            item.isChecked = !item.isChecked
        }
        return item
    })
    setItems(newItems)
}
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx} className = {item.isChecked ? 'isChecked' : ''}>
          {item.todo} <button onClick={() => handleDelete(item)}>x</button>
          <button onClick={() => strikeOut(item)}>{item.isChecked?'undo':'done'}</button>
        </li>
      ))}
    </ul>
  );
};


export default TodoItem;
