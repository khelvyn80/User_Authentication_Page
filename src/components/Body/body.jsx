import React from 'react'
import './body.css'


function body({children}) {
  return (
    <div className='body-main'>
       {children}
    </div>
  )
}

export default body