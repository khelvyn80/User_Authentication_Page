import React from 'react'
import './navigation.css'


function navigation({children}) {
  return (
    <div className="nav">
      {children}
    </div>
  )
}

export default navigation