'use client'
import React from 'react';
import MenuButton from '../aside/MenuButton';

const HeroContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen xl:w-[calc(100vw-29rem)] xl:translate-x-[29rem] relative'>
      <MenuButton />
      {children}
    </div>
  )
}

export default HeroContainer