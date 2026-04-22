import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AOS from 'aos';

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section pt-5">
      <div className="blob-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <Container className="hero-content my-5">
        <Row className="align-items-center hero-row">
          <Col lg={8} className="mx-auto text-center">
            <div className="glass-card hero-card" data-aos="fade-up">
              <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
                Hi, I'm <span className="gradient-text">Chandra Sekhar</span>
              </h1>
              <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
                M.Tech AI Postgraduate
              </h2>
              <p className="hero-description" data-aos="fade-up" data-aos-delay="600">
                Eager to leverage my technical skills and problem-solving abilities to design, develop, and implement innovative software solutions.
              </p>
              <div className="hero-buttons" data-aos="fade-up" data-aos-delay="800">
                <Button
                  variant="primary"
                  size="lg"
                  className="me-3 mb-3 glass-btn"
                  onClick={handleScrollToContact}
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="mb-3 glass-btn"
                  as="a"
                  target='_blank'
                  href="https://drive.google.com/file/d/1T7qVUgOdCf--Q4IDm31Ryz6V0d68e5Nj/view?usp=sharing"
                >
                  View CV
                </Button>
              </div>

              <div className="social-links" data-aos="fade-up" data-aos-delay="1000">
                <a href="https://github.com/Chandu593" target='_blank' className="social-link">
                  <GitHubIcon sx={{fontSize:25}} />
                </a>
                <a href="https://www.linkedin.com/in/vasala-chandra-sekhar-reddy-b69289263/" target='_blank' className="social-link">
                  <LinkedInIcon sx={{fontSize:25}} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
