import React, { useContext } from 'react'
import { AppContext } from '../context/AppCotext'
import Loader from './Loader';
import BlogDetails from './BlogDetails';

const Blogs = () => {

  const {loading,posts} = useContext(AppContext)

  return (
    <div className='w-full flex flex-col gap-6'>
      {
        loading ? 
        (<Loader/>) : 
        (
          posts.length === 0 ? 
          (<div>
            <p>No posts found</p>
            </div>
          ) : 
          (posts.map((post) => (
              <BlogDetails key={post.id} post={post}/>
            ))
          )
        )
      }
    </div>
  )
}

export default Blogs
