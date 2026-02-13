import React from 'react'

const Button = ({label="Button",onClick,type="button",className="",disabled=false}) => {
  return (
    <div>
      <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className} >
        {label}
      </button>
    </div>
  )
}

export default Button
