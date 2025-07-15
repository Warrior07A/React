import {useState} from "react";
function App(){
  return <div><b>
    hi there</b>
    <COUNTER> </COUNTER>
  </div>

}


function COUNTER(){
const [count,setCount]= useState(0);

  function increasecount(){    
    setCount(count+1);
  }

  function decreasebuttn(){
    setCount(count-1);
  }

  function resetcount(){
    setCount(0);
  }
  return<div>
  <h1 id="txt">{count}</h1>
  <button onClick={increasecount}>Increase count</button>
  <button onClick={decreasebuttn}>📉📉 count</button>
  <button onClick={resetcount}>reset</button>

</div>
}

export default App
