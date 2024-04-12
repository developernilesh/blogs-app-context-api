import React from 'react'
import Header from '../Components/Header'
import Blogs from '../Components/Blogs'
import Pagination from '../Components/Pagination'

const Home = () => {
  return (
    <div>
        <div className='w-full h-full flex flex-col gap-1 justify-center items-center'>
            <Header/>

            <div className='w-11/12 max-w-[750px] py-4 my-16 flex flex-col gap-6'>
              <Blogs/>
            </div>
            
            <Pagination/>
        </div>
    </div>
  )
}

export default Home
