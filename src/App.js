import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookNowButton from './components/BookNowButton';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Gallery />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
      <BookNowButton />
    </div>
  );
}

export default App;

