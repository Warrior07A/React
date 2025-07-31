// import {useState,useEffect} from "react";

function App(){
  return (
    <div style={{display:"flex"}}>
<Card  innerContent={"hi there"} />
<Card innerContent={<div style={{color:"white"}}> hello there</div>}   />
    </div>
  )

function Card({innerContent}){
  return <div style={{color:"white",backgroundColor:"black",width:30,height:30,padding:30,borderRadius:40,margin:29}}>
    {innerContent}
  </div>
}



}

export default App