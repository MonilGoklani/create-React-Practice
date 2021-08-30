import './App.css';
import React from 'react'
import TodoItem from './TodoItem';
import {Image} from './Image';
import babyYoda from './assets/grogu.jpeg'
import { Link } from 'react-router-dom'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      items: [],
      text: '', 
      toggle: 1
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    //this.handleToggle = this.handleToggle.bind(this)
  }

  handleChange(e){
    this.setState({text: e.target.value})

  }
  
  handleSubmit(e){
    e.preventDefault();
    const item = {
      todo: this.state.text,
      isChecked: false
    }
    this.setState({
      items : [...this.state.items, item],
      text :''
    })
  }
  
  handleDelete(task){
    const newList = this.state.items.filter(_task => task.todo !== _task.todo)
    this.setState({
      items : newList
    })
  }

  handleToggle(){
    this.setState({toggle : !this.state.toggle})
  }

  render(){
    const {items, text, toggle} = this.state
    const {handleChange, handleSubmit, handleDelete} = this
    
    return(
    <div>
        <form onSubmit = {handleSubmit}>
          <label> Enter Todo </label>
          {/* <input type = "checkbox" value = {text} onChange = {handleChange}></input> */}
          <input type = "text" value = {text} onChange = {handleChange}></input>
          {/* <textarea value = {text} onChange = {handleChange}></textarea> */}
          {/* <select value = {text} onChange = {handleChange}>
            <option value = "option1"> Option 1</option>
            <option value = "option2"> Option 2</option>
            <option value = "option3"> Option 3</option>
          </select> */}
          <button>submit</button>
        </form>
        <h1>TODO Items</h1>
        <button onClick = {() => this.handleToggle()}>Toggle</button>
        <TodoItem items = {items} handleDelete = {handleDelete}/>
        
        <Link to="/test">
        {toggle && <Image imgUrl={babyYoda}/>}
        </Link> 


    </div>
        )
  }
}

export default App;
