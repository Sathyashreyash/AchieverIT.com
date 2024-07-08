import React from 'react'
import Header from './components/Header'
import HomeCarousel from './components/homeCarousel'
import Cards from './components/cards';
import ContactUs from './components/contactUs';
import AchieverEdge from './components/achieverEdge';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Header/>
    <HomeCarousel/>
    <Cards/>
    <ContactUs/>
    <AchieverEdge/>
    <Footer/>
    </>
  )
}

export default App