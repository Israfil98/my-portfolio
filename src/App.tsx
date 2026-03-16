import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
