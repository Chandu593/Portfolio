import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import CustomNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="App" style={{ width: '100%', maxWidth: '100%', minHeight: '100vh', margin: 0, padding: 0, overflowX: 'hidden' }}>
        <CustomNavbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;