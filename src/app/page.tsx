'use client'
import Clients from '@/components/features/Clients';
import Experience from '@/components/features/Experience';
import Home from '@/components/features/Home';
import Portfolio from '@/components/features/Portfolio';
import Skills from '@/components/features/Skills';
import Technologies from '@/components/features/Technologies';

const HomePage = () => {
  return (
    <main className="bg-primary-100 h-full w-full relative ">
      <Home />
      <Skills />
      <Technologies />
      <Experience />
      <Portfolio />
      <Clients />
    </main>
  )
}

export default HomePage;
