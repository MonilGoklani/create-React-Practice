//import React from 'react'

import React from "react";
import './TodoItem.css'

// const TodoItem = ({ items, handleDelete, strikeOut }) => {
//   return (
//     <ul>
//       {items.map((item, idx) => (
//         <li key={idx}>
//           {item} <button onClick={() => handleDelete(item)}>x</button>
//           <button onClick={() => strikeOut()}>done</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

class TodoItem extends React.Component {
  constructor({items,handleDelete}) {
    super();
    this.strikeOut = this.strikeOut.bind(this);
  }

  strikeOut(task) {
    //console.log(task)
    const newItems = this.props.items.map(item => {
        if(item.todo === task.todo){
            item.isChecked = !item.isChecked
            console.log('task',item)
        }
        return item
    })
    this.setState({
      items: newItems
    });
  }

  render() {
      const {strikeOut} = this
      const {items, handleDelete} = this.props
    return (
      <ul>
        {items.map((item, idx) => (
          <li key={idx} className = {item.isChecked ? 'isChecked' : ''}>
            {item.todo} <button onClick={() => handleDelete(item)}>x</button>
            <button onClick={() => strikeOut(item)}>done</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoItem;
