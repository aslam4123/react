// const { Component } = require("react");
// import { Component } from "react";


// class App extends Component{
//   constructor(props){
//     super()
//     console.log(props);
    
//     this.state = {
//       count : props.start || 0
//     }
  
//   }
//   increment = ()=>{
//     this.setState((prv)=>({count : prv.count+1}))
//   }
//   decrement = ()=>{
//     this.setState((prv)=>({count : prv.count>0 ? prv.count-1:0}))
//   }
//   render(){
//     return(
//       <div>
//       <h1>Counter</h1>
//       <p>{this.state.count}</p>
//       <button onClick={this.increment}>+</button>
//       <button onClick={this.decrement}>-</button>
 
//       </div>
//     )
//   }



// }
// export default App


import React, { useState, useMemo } from "react"

function App(){
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = useMemo(() => {
    console.log("Expensive calculation running...");
    return count * 3;
  },[count]);

  return (
    <div>
      <h1>Count:{count}</h1>
      <h2>Expensive Result: {expensiveCalculation}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="type something...." />
    </div>
  );
}

export default App;
