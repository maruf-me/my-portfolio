import React from 'react';

const HeroContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='min-h-screen xl:w-[calc(100vw-29rem)] xl:translate-x-[29rem] relative'>
      <button className='bg-green-400 fixed max-w-max p-4 top-6 right-6 xl:hidden'>menu</button>
      {children}

    </div>
  )
}

export default HeroContainer