import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className='w-full h-[50px] bg-gray-400 bg-contain bg-center flex  justify-center items-center md:h-[58px]'>
      <NavBar />
    </div>
  );
}

export default Header