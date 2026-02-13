import React from 'react'

const InputField = ({label,value,onChange,error,placeholder,type="text"}) => {
  return (
    <div>
      {label && (<label className='block mb-2 font-medium text-sm'>{label}</label>)}

      <input type={type} value={value} onChange={onChange} placeholder={placeholder}
        className={`w-full border rounded-lg p-3 bg-[#F1F4F9]
          ${error ? "border-red-500" : "border-gray-300"}
          focus:outline-none focus:ring-2
          ${error ? "focus:ring-red-400" : "focus:ring-purple-500"}
        `}  />

      {error && <p className='text-red-500 text-xs mt-1'>{error}</p>}
    </div>
  )
}

export default InputField
