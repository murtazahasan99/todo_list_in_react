import React, { Component } from 'react';
import Add from "./components/add";
import List from "./components/list"
import './App.css';



class App extends Component {
  constructor(){
  super()
  this.state ={
    todos:[
      {text:"learn vue"},
      {text:"learn react"},
      {text:"learn php"}
    ],
    newT:""
  }
  }
  //here i use the function like this becauce i dont want to use .bind(this) in call
  update = (event)=>{
    this.setState({
      newT:event.target.value
    })
  }
  add= ()=>{
    const todos=[...this.state.todos]  //this ... to copy the original state and make what i want becauce i cant fix in origenal state
    todos.push({  text:this.state.newT})
    this.setState({
    todos,
    newT:""
    })
  }
  del = (index)=>{
    const todos=[...this.state.todos]
    todos.splice(index,1)
    this.setState({
      todos})

  }
  render() {
    return (
      <div >
        <List todos={this.state.todos} del={this.del}/>
        <Add value={this.state.newT} update={this.update} add={this.add}/>
      </div>
    );
  }
}

export default App;
