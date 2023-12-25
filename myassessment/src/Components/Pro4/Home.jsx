import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  return (
    <>
    <div style={{background:"yellow"}}>
    <center>
      <h4>Home page</h4>
       <div>Welcome to Home</div>
       <br></br><button  style={{backgroundColor:"green", color:"white",borderRadius:"5px"}} onClick={()=>{navigate("/About")}}>Move to About Page</button>
    </center>
    <br></br><hr></hr>
    </div>
    <br></br>
    </>
  )
}

export default Home