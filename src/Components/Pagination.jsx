import { useContext } from 'react'
import React from 'react'
import { AppContext } from '../context/AppCotext'

const Pagination = () => {

  const {page,totalPages,handlePageChange} = useContext(AppContext)

  return (
    <div className='w-full flex justify-center items-ceneter fixed bottom-0 bg-gray-300 z-10'>
      <div className='w-11/12 max-w-[750px] py-2 flex justify-between items-center'>
        <div className='flex gap-2'>
          {
            page>1 && 
              (<button 
              className='rounded-md border-2 border-slate-300 px-4 py-1 bg-gray-700 hover:bg-slate-800  
              hover:text-slate-50 transition-all duration-200 ease-in-out font-semibold text-gray-50'
              onClick={()=>(handlePageChange(page-1))}>Previous</button>)
          }
          {
            page<totalPages && 
              (<button 
              className='rounded-md border-2 border-slate-300 px-4 py-1 bg-gray-700 hover:bg-slate-800 
              hover:text-slate-50 transition-all duration-200 ease-in-out font-semibold text-gray-50'
              onClick={()=>(handlePageChange(page+1))}>Next</button>)
          }
        </div>
      
        <p>Page <span className='font-semibold'>{page}</span> of <span className='font-semibold'>{totalPages}</span></p>
      </div>
    </div>
    
  )
}

export default Pagination
