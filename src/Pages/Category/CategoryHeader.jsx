import React from 'react'
import Button from '../../Components/Common/Button'

 
const CategoryHeader = ({search,setSearch,onAddCategory}) => {
  return (

    <div>
      <div>
        <h1>Categories</h1>
        <p>Manage Your categories</p>
      </div>
      
<Button 
  label={
    <div className="flex items-center gap-2">
      <span className="text-lg">+</span>
      Add Category
    </div>
  }
  className="bg-blue-900 text-white px-4 py-2 rounded-lg cursor-pointer"
  onClick={onAddCategory}
/>


     
    </div>

   
  )
}

export default CategoryHeader
