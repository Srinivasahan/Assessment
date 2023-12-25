    import React, { useState } from 'react'
    const Toggle = () => {
        const [value,setvalue]=useState(true);
      return (
        <center>
            <hr></hr>
            <button style={{backgroundColor:"green", color:"white",borderRadius:"5px"}}onClick={()=>{setvalue(!value)}}>Toggle</button><br></br><br></br>
            <div style={{maxHeight:"400px"}}>
                {value===false ?<img alt="Wait" src='https://wallpaperaccess.com/thumb/2987238.jpg'/>:<img alt="Wait" src='https://img.freepik.com/premium-photo/green-branch-plant-with-neon-orange-glow-against-dark-starry-sky-generative-ai_76964-10382.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703289600&semt=ais'/>}
            </div>
            <br></br><hr></hr>
        </center>
      )
    }
    
    export default Toggle