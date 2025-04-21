import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Certificate from '@/components/Certificate'
import Skills from '@/components/Skills'
import TopButton from '@/components/TopButton'
import React from 'react'

const Home = () => {
  return <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Certificate />
    <Contact />
    <Footer />
    <TopButton />
  </>
}
export default Home