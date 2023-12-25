import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate=useNavigate()
  return (
    <>
    <div style={{backgroundColor:"skyblue"}}>
    <center>
        <h4>About Page</h4>
       <div>This is our First App</div>
       <br></br><button style={{backgroundColor:"green", color:"white",borderRadius:"5px"}} onClick={()=>{navigate("/")}}>Move to Home Page</button>
    </center>    <br></br><hr></hr>

    </div>
    <br></br>
    </>
  )
}

export default About