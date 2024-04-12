import React from 'react'
import Header from '../Components/Header'
import Blogs from '../Components/Blogs'
import Pagination from '../Components/Pagination'
import { useLocation, useNavigate } from 'react-router-dom'

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1).replaceAll("-"," ") 

    return (
        <div className='w-full h-full flex flex-col gap-1 justify-center items-center'>
            <Header/>
            
            <div className='w-11/12 max-w-[750px] py-4 my-16 flex flex-col gap-6'>
                <div className='flex flex-col items-start gap-4'>
                    <button onClick={()=>navigation(-1)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                    >Back</button>
                    <h2 className='text-2xl font-semibold text-gray-600 -mb-2'>Blogs on {" "}
                        <span className='underline text-gray-700 italic'>{category}</span>
                    </h2>
                </div>
                <Blogs/>
            </div>
            
            <Pagination/>
        </div>
    )
}

export default CategoryPage
