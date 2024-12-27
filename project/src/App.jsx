// const { Component } = require("react");
import { Component } from "react";


class App extends Component{
  constructor(props){
    super()
    console.log(props);
    
    this.state = {
      count : props.start || 0
    }
  
  }
  increment = ()=>{
    this.setState((prv)=>({count : prv.count+1}))
  }
  decrement = ()=>{
    this.setState((prv)=>({count : prv.count>0 ? prv.count-1:0}))
  }
  render(){
    return(
      <div>
      <h1>Counter</h1>
      <p>{this.state.count}</p>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
 
      </div>
    )
  }



}
export default App
