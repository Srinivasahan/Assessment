import React from 'react'
import { Items } from './Items'
const Display = () => {
  return (
    <div style={{paddingLeft:"4px"}}>
      {' '}<h4>My List</h4>
    <ul>
        {Items.map((n,i)=><li key={i}>{n}</li>)}
    </ul>
  </div>
  )
}

export default Display