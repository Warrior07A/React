import {useState,useEffect} from "react";

function App(){
  //conditional rendering
  const [countervisible,check]=useState(true);
  return<div>  
 hi there

useEffect(function(){
  setInterval(function(){
    check(c=>!c)
  },5000)
},[])

{countervisible && <Counter></Counter>}

</div>
}

function Counter(){
  const[count,Setcount]=useState(0);
  console.log("unmounted");

  //guards our inside data from re-rendering
useEffect(function(){
  console.log("me one time");
  setInterval(() => {
    Setcount(count=>count+1);  //not simply count+1 due to some dependency array error 
  }, 1000);
},[])           //if you wont add depedency it would run every time it re -renders


function increasecount(){
	Setcount(count+1);
}

return <div>
<h1> {count}</h1>
<button onClick={increasecount}> INCREASE COUNT</button>
</div>
}
 
export default App
