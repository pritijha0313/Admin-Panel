import React from 'react'
import InputField from '../../Components/Common/InputField'

const CategorySearch = ({search,setSearch}) => {
  return (
    <div>
       <InputField placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default CategorySearch
