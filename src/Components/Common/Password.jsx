import React, { useState } from 'react'

const Password = ({label,value,name,onChange,placeholder="Enter password",error="",className=""}) => {
    const[showPassword,setShowpassword] = useState(false)
  return (
    <div>
      {label && (<label className='block mb-2 font-medium text-sm text-[#58595B]'>{label}</label>)}
      <div>
        <input 
        type={showPassword ? "text" : "password"}   
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}  
        className={`w-full border rounded-lg p-4 pr-10
            bg-[#F1F4F9] text-[#A6A6A6] mb-2
            ${error ? "border-red-500" : "border-gray-300"}
            focus:outline-none focus:ring-2
            ${error ? "focus:ring-red-400" : "focus:ring-purple-500"}
          `} />

        <button type='button'
          onClick={() => showPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
        </button>
      </div>
      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  )
}

export default Password
