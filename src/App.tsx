import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Platform from './pages/Platform';
import Contact from './pages/Contact';
import Forecaster from './pages/Forecaster';
import ModEngine from './pages/ModEngine';
import Vppa from './pages/Vppa';
import Thesis from './pages/Thesis';
import ImpactReport from './pages/ImpactReport';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-lowest text-on-surface font-inter">
      <Navigation />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/platform/forecaster" element={<Forecaster />} />
          <Route path="/platform/mod-engine" element={<ModEngine />} />
          <Route path="/platform/vppa" element={<Vppa />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impact-report" element={<ImpactReport />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
