import "./App.css";
import React from "react";
import TodoItem from "./TodoItem";
import { Image } from "./Image";
import babyYoda from "./assets/grogu.jpeg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AppHooks = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(true)
    return () => console.log('component unmounted')
  }, [])



  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      todo: text,
      isChecked: false
    }
    setItems([...items,item])
    setText('')
  }

    const handleDelete = (task) => {
    const newList = items.filter(_task => task.todo !== _task.todo)
    setItems(newList)
  }

   const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Enter Todo </label>
        <input type="text" value={text} onChange={handleChange}></input>
        <button>submit</button>
      </form>
      <h1>TODO Items !!</h1>
      <button onClick={handleToggle}>Toggle</button>
      <TodoItem items={items} setItems = {setItems} handleDelete={handleDelete} />

      <Link to="/test">{toggle && <Image imgUrl={babyYoda} />}</Link>
    </div>
  );
};


export default AppHooks;
