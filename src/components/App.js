import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const[showPara,setShowPara]=useState(false);//which takes any value like number booleasn 
  return (
    <div id="main">
      <button id="click" onClick={()=>setShowPara(!showPara)}>Toggle para</button>
      {showPara ? (
      <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      ) : null}
    </div>
  );
}

export default App;
