import React from 'react'
import './button.css'

function button({content, customStyle, fuc}) {
  return (
    <div>
        <button onClick={fuc} className={`btn-color ` + customStyle}>
          {content}
        </button>
    </div>
  )
}

export default button