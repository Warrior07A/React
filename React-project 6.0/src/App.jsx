function App(){
  return (
    <div>      
  {/* //giving key is an important aspect of the list since if in the case of todo only every todo needs a unique id to get easily identified */}
 {/* in short  it helps a lot  */}
      <Todo key={1} title={"Go to Gym"} done={false}
      />
      <Todo key={2} title={"Kesa chal rha h"} done={true}
      />
    </div>
  )
  function Todo({title,done}){
    return <div>
    {title}-{done ? "Done" : "Not Done!!!!!!!!!!!!!!"}
  
  </div>
}
}
export default App