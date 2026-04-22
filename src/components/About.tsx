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
                  M.Tech student specializing in Artificial Intelligence at IIIT Bhopal with a strong foundation in Machine Learning, Data Analytics, and Full-Stack Web Development. Experienced in building end-to-end ML pipelines, hybrid recommender systems, and MERN-stack applications. I enjoy turning raw data into decisions to solve real-world problems and looking for research and industry opportunities in ML and software development.
                </p>
                <p className="about-text mb-4">
                  I believe in continuous learning and a proper work-life balance.
                  When I'm not coding, you can find me enjoying travelling and trekking or exploring new technologies.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;