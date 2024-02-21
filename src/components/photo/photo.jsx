import React from 'react'
import "./photo.scss"
export default function Photo({imagePath}) {
  return (
    // <div className='photo-container'>
    //   <img src={imagePath} />
    // </div>
    <div style={{ margin: "15px", borderRadius: "16px", overflow: "hidden" }}>
       <img src={imagePath}  style={{ width: "100%", display: "block" }} />
    </div>
  )
}
