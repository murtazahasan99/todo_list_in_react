import React, { Component } from 'react';

class List extends Component {
    render(){
     const todos=this.props.todos
      return(
        <div> <ul>
        {
         todos.map((todo,index)=>{
            return<li key={index}>{todo.text} <button onClick={()=>{this.props.del(index)}}>done</button></li>
          })
        }
      </ul></div>// here i use this  onClick={()=>{this.props.del(index)}} becauce i want to sent value to thee function
      );
    }
  }
  export default List;