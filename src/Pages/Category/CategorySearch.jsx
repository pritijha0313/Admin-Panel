import React from 'react'
import InputField from '../../Components/Common/InputField'

const CategorySearch = ({search,setSearch}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-4">
      
       <InputField placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
   
  )
}

export default CategorySearch
