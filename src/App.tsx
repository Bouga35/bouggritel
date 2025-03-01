import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesModal } from './components/Services';
import { Products } from './components/Products';
import { Clients } from './components/Clients';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Careers } from './components/Careers';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [showServices, setShowServices] = useState(false);
  

  return (
    <div className="min-h-screen">
      <Header onShowServices={() => setShowServices(true)} />
      <Hero onShowServices={() => setShowServices(true)} />
      <ServicesModal isOpen={showServices} onClose={() => setShowServices(false)} />
      <About />
      <Products />
      <Clients />
      <Stats />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;