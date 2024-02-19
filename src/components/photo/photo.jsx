import React from 'react'
import "./photo.scss"
export default function Photo({imagePath}) {
  return (
    <div className='photo-container'>
      <img src={imagePath} />
    </div>
  )
}
