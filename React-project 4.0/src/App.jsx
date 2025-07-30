import {useState,useEffect} from "react";

function App(){

  const [currentTAB,setcurrentTAB]=useState("1");
  const [tabdata,settabdata]=useState({});
  const [loading,setloading]=useState(true);
  
  useEffect(function(){
    // console.log("send backend requst for data to "+currentTAB);
    setloading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/"+currentTAB)  //sends request to this URL with different id's
      .then(async res=>{                                //need to debug
        const json=await res.json();
        settabdata(json);
        setloading(false);
      });
      
  },[currentTAB])                                                           //sends request only when tab changes


  return (
    <div>    
    {/* //          color will be , if currentTab IS FEED, Will be red otherwise black  */}
      <button onClick={()=>
      setcurrentTAB(1)} 
      style={{color:currentTAB == 1 ? "red":"black"}}>Todo #1</button>

      <button onClick={()=>{setcurrentTAB(2)}}
      style={{color:currentTAB == 2 ? "red":"black"}}>Todo #2</button>

      <button onClick={()=>{setcurrentTAB(3)}}
       style={{color:currentTAB == 3 ? "red":"black"}}>Todo #3</button>

      <button onClick={()=>{setcurrentTAB(4)}} 
      style={{color:currentTAB == 4 ? "red":"black"}}>Todo #4</button>
      <br></br>
        {loading ? "Loading......" : tabdata.title}                                                                             
    {/*  renders the title from fetch request and renders to FE */}
      </div>
  )

}

export default App