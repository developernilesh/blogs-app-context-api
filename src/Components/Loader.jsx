import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center mt-44'>
      <div className='spinner'></div>
      <p>Loading...</p>
    </div>
  )
}

export default Loader
