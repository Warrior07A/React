import {useState} from "react";
import {Postcomponent} from "./Post.jsx";

function App(){
const [posts,setPosts]=useState([]);                                    //used useState for state updation

const postComponents=posts.map(post=> <Postcomponent                  // map implies this function on every element of posts array
  name={post.name}
  subtitle={post.subtitle}
  time={post.title}
  // image={post.image}
  description={post.description}
  />)

function addPost(){
  setPosts([...posts,{                                              //this is a way to update an array in useState
    name:"Akshat Mittal",
    subtitle:"3 followers",
    time:"recently",
    description:"only belief works"
  }])
}

  return (
  <div >
    <button onClick={addPost}> ADD POSTS</button>
    {/* <div style={{display:"flex",justifyContent:"center"}}> */}
      <div>
        {postComponents}
      </div>
    </div>

  // </div>
  )
}

export default App