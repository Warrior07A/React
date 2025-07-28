function App(){
return(
  <div style={{display:"flex",justifyContent:"space-around"}}>   
    <div>
    <NewPostComponenet 
    name={"Allu Arjun"}
    subtitle={"Actor"}
    time={"a few years"}
    /><br></br>
    <NewPostComponenet
  name={"Akshat Mittal"}
  subtitle={"Web Developer"}
  time={"active "}

  /><br></br>
    <NewPostComponenet/>
   
    </div>
    <div style={{}}>
    <ProfileComponent/>
    </div>
  </div>

 
)

}

function NewPostComponenet({name,subtitle,time}){
  return<div style={{backgroundColor:"grey",borderRadius:10,width:200,height:100,display:"flex",padding:20}}>
  <div>

    <img  style={{width:40,height:40,borderRadius:10}} src={"https://imgs.search.brave.com/dly800JWKoTuDt4vzBhapDXP4kLzz7dk37n0xaY3HR4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vdmVjdG9y/cy9yYW5kb20tYWN0/cy1vZi1raW5kbmVz/cy1kYXktZW1ibGVt/LWlzb2xhdGVkLXZl/Y3Rvci1zdG9jay12/ZWN0b3ItaWQxMjgw/MDU0NzUzP2s9MjAm/bT0xMjgwMDU0NzUz/JnM9NjEyeDYxMiZ3/PTAmaD1VSnY4XzQy/UlRzcVMwcGpPRHc1/Y3Rkc0FaaFNLUEdP/ZmtZaFlLUU1CYUFZ/PQ"
    }>
    </img></div>
    <div>
    {name}<br></br>
    {subtitle}<br></br>
    {time}
    <img style={{height:12,width:12}} src={"https://imgs.search.brave.com/fPv5zdG4HXofc7KYNeZob69q9QoXvA18FpN1xm-00-U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzLzJiOS9lbGVn/YW50LXdhbGwtY2xv/Y2stMDQxMC01NzA1/MTQ1LmpwZz9mbXQ"}></img>

    
    </div>
  
   </div>
}
const style1={width:200,height:500}
function ProfileComponent(){

  return(<div style={{dispaly:"flex",margin:50}}>
  <div style={style1}>
    <b>Linkedin News</b>
    <div>
    Top Stories
    </div>
    <div>
    jbcjscb
    </div>
    csdcscsc
    sccce
    cassdasada
    adsadasd
    assas

  </div>
  </div>)
}
export default App

