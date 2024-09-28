import React from 'react'
import MainMenu from '../molecules/Header/MainMenu'
import Logo from '../molecules/Header/Logo'

const MainHeader = () => {
  return (
    <div className='fixed bg-gradient w-full z-10 py-2'>
      <div className='w-full m-auto flex items-center lg:max-w-256'>
        <Logo />
        <MainMenu />
      </div>
    </div>
  )
}

export default MainHeader