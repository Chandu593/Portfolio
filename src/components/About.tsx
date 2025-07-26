import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">About Me</h2>
            <div className="section-divider" data-aos="fade-up" data-aos-delay="200"></div>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={4} className="mb-4">
            <div className="profile-image-container floating" data-aos="fade-right">
              <img
                src='/My_img.JPG'
                alt="Profile"
                className="profile-image"
              />
            </div>
          </Col>

          <Col lg={8}>
            <div className="glass-card about-card" data-aos="fade-left">
              <div className="p-4">
                <h4 className="about-title mb-4">
                  Creating Digital Experiences
                </h4>
                <p className="about-text mb-4">
                  I am a passionate B.Tech IT undergraduate with a strong foundation in both frontend and backend technologies along with some programming languages.
                  I specialize in modern web technologies like React.js, Node.js, MongoDB, and more and have a keen eye for design.
                </p>
                <p className="about-text mb-4">
                  I believe in continuous learning and a proper work-life balance.
                  When I'm not coding, you can find me enjoying travelling and trekking or exploring new technologies.
                </p>
                {/* <Row className="stats-row">
                  <Col md={4} className="text-center mb-3">
                    <div className="stat-card">
                      <h3 className="stat-number">50+</h3>
                      <p className="stat-label">Projects Completed</p>
                    </div>
                  </Col>
                  <Col md={4} className="text-center mb-3">
                    <div className="stat-card">
                      <h3 className="stat-number">5+</h3>
                      <p className="stat-label">Years Experience</p>
                    </div>
                  </Col>
                  <Col md={4} className="text-center mb-3">
                    <div className="stat-card">
                      <h3 className="stat-number">25+</h3>
                      <p className="stat-label">Happy Clients</p>
                    </div>
                  </Col>
                </Row> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;