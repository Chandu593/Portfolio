import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Moon, Sun, Code } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const CustomNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setExpanded(false); // Close menu after clicking
    }
  };

  return (
    <Navbar
      expand="xl"
      fixed="top"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand onClick={() => handleNavClick('home')} className="brand-logo">
          <Code className="me-2" size={24} />
          Chandra Sekhar
        </Navbar.Brand>
        <div className="navbar-controls d-flex align-items-center">
          <button onClick={toggleTheme} className="theme-toggle btn me-2">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className="d-xl-none navbar-toggler-custom"
            onClick={() => setExpanded(!expanded)}
          />
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-custom">
          <Nav className="mx-auto">
            <Nav.Link onClick={() => handleNavClick('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('about')}>About</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('skills')}>Skills</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('experience')}>Experience</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('education')}>Education</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        {/* <div className="navbar-controls d-flex align-items-center">
          <button onClick={toggleTheme} className="theme-toggle btn me-2">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div> */}
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;