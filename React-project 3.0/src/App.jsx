import {useState,useEffect} from "react";//make sure to comment strictmode to avoid un necessary interuptions
function App(){
  const [count,setcount]=useState(1);
  
  function increase(){
    setcount(c=>c+1);                                       //this is the syntax 
  }

  useEffect(function() {                                    //when you made the stopwatch you had to put an stopinterval to avoid creating 
    console.log("hi there");                              //.. multiple loops running all the same time 
    const intervalid=setInterval(increase,1000);                         //UseEffect provides the environment to safely mount a single loop and then stop
  return()=>{
    clearInterval(intervalid)                           //helps end the loop as soon as it works get done avoids overlapping of multiple loops
  }
  
  },[])                                                   //dont forget this dependency array it sucks when left
//the uper useEffect with empty depend. array will work only on mount


  useEffect(function(){
    console.log("Your stopwatch has been updated to :" + count)
  },[count])                                          //this hook only when count state has been updated   
  return (
    <div style={{dispaly:"flex-start"}}> 
    return {count}
      hi theree what's up??
      <hr></hr>
      <div style={{backgroundColor:"red",width:15,height:20}}>
        {count}
      </div>
      <div>
     
      <img onClick={increase} src={"https://imgs.search.brave.com/2A1xAlCQGEy1dq5J2Qe6kg-jThFupL-ZAlNhYikzpOo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTYv/ODgxLzEyOC9zbWFs/bC9yZWFsaXN0aWMt/M2QtYmVsbC1pY29u/LXdpdGgtYS1tYXR0/ZS1maW5pc2gtb24t/YS1wbGFpbi13aGl0/ZS1iYWNrZ3JvdW5k/LWlsbHVzdHJhdGlv/bi1mcmVlLXZlY3Rv/ci5qcGc"}>
     </img></div>
    </div>
  )
}


export default App