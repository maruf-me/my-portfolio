'use client'
import Contact from '@/components/features/Contact';
import Experience from '@/components/features/Experience';
import Home from '@/components/features/Home';
import Projects from '@/components/features/Projects';
import Skills from '@/components/features/Skills';
import Technologies from '@/components/features/Technologies';
import AwesomeComponents from '@/components/jobs';

const HomePage = () => {
  return (
    <main className="bg-primary-100 h-full w-full relative ">
      <Home />
      <Skills />
      <Technologies />
      <Experience />
      <Projects />
      <AwesomeComponents />
      <Contact />
    </main>
  )
}

export default HomePage;
