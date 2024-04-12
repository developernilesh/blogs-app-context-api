import React, { useContext, useEffect } from 'react'
import { AppContext } from './context/AppCotext'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import BlogPage from './Pages/BlogPage'
import TagPage from './Pages/TagPage'
import CategoryPage from './Pages/CategoryPage'

const App = () => {

  const {fetchBlogs,searchParams} = useContext(AppContext)
  
  const location = useLocation();

  useEffect(() => {
    
    const page = searchParams.get("page") ?? 1 ; 
    
    if(location.pathname.includes("tag")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ") ;
      fetchBlogs(Number(page),tag) ;
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ") ;
      fetchBlogs(Number(page),null,category) ;
    }
    else{
      fetchBlogs(Number(page))
    }

  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:blogId' element={<BlogPage/>}/>
      <Route path='/tags/:tag' element={<TagPage/>}/>
      <Route path='/categories/:category' element={<CategoryPage/>}/>
    </Routes>
  )
} 

export default App

