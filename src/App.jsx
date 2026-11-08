import React, { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Strip from './components/Strip.jsx'
import Story from './components/Story.jsx'
import Palette from './components/Palette.jsx'
import Work from './components/Work.jsx'
import Info from './components/Info.jsx'
import Book from './components/Book.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // scroll reveals (text blocks, images, swatches)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }
    )
    document.querySelectorAll('.rv,.img-rv:not(.in),.swatches').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // sticky nav background
  useEffect(() => {
    const nav = document.getElementById('nav')
    const onScroll = () => nav && nav.classList.toggle('solid', window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <Strip />
      <Story />
      <Palette />
      <Work />
      <Info />
      <Book />
      <About />
      <Footer />
    </>
  )
}
