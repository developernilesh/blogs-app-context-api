import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
    return (
        <div className='rounded-xl p-4 shadow-[0_0_10px_rgba(0,0,0,0.4)]'>
            <NavLink to={`/blog/${post.id}`}>
                <p className='font-bold text-lg text-rose-800 hover:underline'>{post.title}</p>
            </NavLink>

            <p className='text-sm flex gap-1'>
                By
                <span className='italic font-semibold'>{post.author}</span> 
                on 
                <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                    <span className='underline font-bold'>{post.category}</span>
                </NavLink>
            </p>

            <p className='text-sm my-1'>Posted on <span className='font-semibold'>{post.date}</span></p>

            <p className='text-md my-[10px] text-justify'>{post.content}</p>

            <div className='text-xs text-blue-600 underline font-semibold italic'>
            {post.tags.map((tag,index)=>(
                    <NavLink to={`/tags/${tag.replaceAll(" ","-")}`}>
                        <span className='mr-3' key={index}>{`#${tag}`}</span>
                    </NavLink>
                ))}
            </div> 
        </div>
    )
}

export default BlogDetails
