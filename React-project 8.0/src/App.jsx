import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom"; //useNaviagte is a hook

import { Outlet } from 'react-router-dom';   

function App(){ 
return(
    <>
    <div>
<br />
<br />
        <BrowserRouter>
        <Routes>    
          <Route path="/" element={<Layout/>}>                 
            {/* //this layout is the head of all and all other are under this layout */}
            <Route path="/neet/class11" element={<Class11/>}/>
            <Route path="/neet/class12" element={<Class12/>}/>
            <Route path="/" element={<Landing/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
    </div>
</>
)
}
function Layout(){
  return <>
    <div style={{backgroundColor:"red"}}>
    <Header/>
</div>
<div  style={{height:80,backgroundColor:"green"}}>
  <Outlet />
    </div>
<div style={{backgroundColor:"violet"}}>
 <FOOTER></FOOTER>
    </div> 
</>
}


function FOOTER(){
    return<div>
    Contact Me | ZALDI SE
</div>
}
function Header(){
    return(
        <div>
         <Link to="/">ALLEN </Link>                                
            |
            <Link to ="/neet/class11">CLASS 11</Link>
            |   
            <Link to ="/neet/class12">Class12</Link>               

        </div>
    )
}
function Landing(){
    const Navigate=useNavigate();                                 
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