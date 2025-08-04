import {BrowserRouter,Routes,Route,Link,useNavigate} from "react-router-dom";//useNaviagte is a hook
import { Outlet } from 'react-router-dom';   

function App(){ 
return(
    <>
    <div>

<br />
<br />
        <BrowserRouter>
        {/* link to can only work inside browserrouter and not inside routes we belive because it has to occur to top of every landing page you have to write link funnction inside browserrouter but not inside routes! */}
            <Link to="/">ALLEN </Link>
            |
            <Link to ="/neet/class11">CLASS 11</Link>
            |   
            <Link to ="/neet/class12">Class12</Link>
        <Routes>
            
            
            <Route path="/neet/class11" element={<Class11/>}/>
            <Route path="/neet/class12" element={<Class12/>}/>
            <Route path="/" element={<Landing/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        
        </BrowserRouter>
    </div>
</>
)
}
function Landing(){
    const Navigate=useNavigate();                                   //it is made this way cz many people on cohort didn't knew use "hooks" ;        there is another better way                          
    return<div>
        Welcome to my landing page
    </div>
}

function ErrorPage(){
    return(
        <div style={{backgroundColor:"black",fontSize:100,color:"white"}}>
            404 page not found
            </div>

    )
}
function Class11(){
    return<div>
        hi there 1
    </div>
}

   


function Class12(){
const Navigate=useNavigate(); 
function redirect(){
    Navigate("/")
}
    return<div>
        hi there 2

<button  onClick={redirect}>Click me to get redirected</button>
    
    
    </div>

}

export default App