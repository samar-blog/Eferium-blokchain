import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BuySell from './components/BuySell';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (

    <>
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <BuySell />
      <Blogs />
      <Footer />
    </div>
    
    </>
  )
}
