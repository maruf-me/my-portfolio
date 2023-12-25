'use client'
import React from 'react';
import MenuButton from '../aside/MenuButton';

const HeroContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='xl:w-[calc(100vw-29rem-.4rem)] xl:ml-[29rem] relative'>
      <MenuButton />
      {children}
    </div>
  )
}

export default HeroContainer