import React from 'react'

const search = ({serchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src="public/search.svg" alt="" />
            <input 
                type="text" placeholder='Search through thounsands of movies'
                 value={serchTerm} 
                 onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    </div>
  )
}

export default search