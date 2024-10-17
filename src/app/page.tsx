'use client'
import Clients from '@/components/features/Clients';
import Features from '@/components/features/Features';
import Home from '@/components/features/Home';
import Portfolio from '@/components/features/Portfolio';
import Resume from '@/components/features/Resume';

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
