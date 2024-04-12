import React from 'react'

const Header = () => {
  return (
    <div className='w-full py-3 fixed top-0 left-0 z-10 bg-[#ffffff3e] backdrop-blur-md'>
      <header className='text-center'>
        <h1 className='text-2xl font-bold uppercase tracking-wide'>
          Tech - Blogs
        </h1>
      </header>
      <div className='w-52 h-[2px] mx-auto bg-slate-700'></div>
    </div>
  )
}

export default Header;
