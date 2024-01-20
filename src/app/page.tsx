'use client'
import React from 'react';
import Home from '@/components/features/Home';
import Resume from '@/components/features/Resume';
import Clients from '@/components/features/Clients';
import Features from '@/components/features/Features';
import Portfolio from '@/components/features/Portfolio';

const HomePage = () => {
  return (
    <main className="bg-primary-100 h-full w-full relative ">
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Clients />
    </main>
  )
}

export default HomePage;
