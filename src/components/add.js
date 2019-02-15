import React, { Component } from 'react';

class Add extends Component {
    render(){
      return(
        <div>
            <input value={this.props.value} onChange={this.props.update}/>
      <button onClick={this.props.add}>add</button>
         
        </div>
      );
    }
  }
  export default Add;