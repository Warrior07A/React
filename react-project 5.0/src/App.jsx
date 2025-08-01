// import {useState} from "react";

function App(){

const Card=({children})=>{
  return(
     <div style={{color:"blue",padding:20,margin:20,borderRadius:10,border:"2px solid black",width:1000,height:100}}>
    {children}
    </div>
  )

}

  return (
    <div >
   <div>
    <Card>
      <div style={{fontSize:40,fontFamily:"sans-serif"}} >
      Card no. 1
      </div>
          </Card>
   </div>
   <div>
    <Card>
      Card No .2
    </Card>
   </div>
   </div>
  )
}

export default App