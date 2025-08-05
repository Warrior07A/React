import {useRef} from "react"

function App(){
  
  const inputRef=useRef();                                           //useRef is a hook that references 
  
  function focusOnInput(){
  inputRef.current.focus();                                         //this gives the same as document.getElementById("name")
  }

  return( 
  <div>
  <div>
    <>
  Signup
     <input ref={inputRef}  type={"text"}/>  
     <input type={"text"}/>
    <button onClick={focusOnInput}>here is the  button</button>
</>
   </div>
</div>
  )
  }

export default App