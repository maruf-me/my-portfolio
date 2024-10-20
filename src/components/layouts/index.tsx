'use client'
import React from 'react'
import AsideBar from './AsideBar'
import HeroContainer from './HeroContainer'
import QuickActions from './QuickActions'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AsideBar />
      <HeroContainer>{children}</HeroContainer>
      <QuickActions />
    </div>
  )
}

export default RootLayout
