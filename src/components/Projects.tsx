import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Github, ExternalLink } from 'lucide-react';
import { Snackbar, Alert } from '@mui/material';
import Slide, { type SlideProps } from '@mui/material/Slide';


function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Online Book Store Portal (BookMonkey)',
      description: 'A MERN based web application enabling users to exchange, buy, and sell books through a unified portal.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Material-UI'],
      githubUrl: 'https://github.com/Chandu593/BookMonkey',
      liveUrl: '#'
    },
    {
      title: 'E-Learning Platform (EduNomad)',
      description: 'A responsive and basic e-learning platform UI built using React, Material UI, and React Hook Form to deliver interactive and accessible learning experiences.',
      image: 'https://tse4.mm.bing.net/th/id/OIP.yjWsZv-5_aoeFy6GhCx2ywHaEK?pid=Api&P=0&h=180',
      technologies: ['React.js', 'Bootstrap', 'React Hook Form', 'Material-UI'],
      githubUrl: 'https://github.com/Chandu593/EduNomad/tree/master',
      liveUrl: 'https://chandu593.github.io/EduNomad/'
    },
    {
      title: 'Weather Dashboard (QwikWeather)',
      description: 'A responsive weather dashboard with city-based forecasts, dynamic UI updates, and beautiful UI animations.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React.js', 'Express.js', 'Handlebars', 'OpenWeather API'],
      githubUrl: 'https://github.com/Chandu593/QwikWeather',
      liveUrl: '#'
    },
    {
      title: 'News Application',
      description: 'A comprehensive and simple news aggregation site using React.js, Bootstrap, and News API with category filtering and live news updates day to day.',
      image: 'https://media.istockphoto.com/id/1177502660/photo/young-woman-reading-the-news-on-a-modern-tablet-computer-while-sitting-in-her-living-room.jpg?b=1&s=612x612&w=0&k=20&c=bwcakFfrJk33pTwN65_qwCTQeSaPBMVOi6vVacX0JCU=',
      technologies: ['React.js', 'Bootstrap', 'News API'],
      githubUrl: 'https://github.com/Chandu593/NewsAppp',
      liveUrl: '#'
    }
  ];
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
            <div className="section-divider" data-aos="fade-up" data-aos-delay="200"></div>
            <p className="section-description" data-aos="fade-up" data-aos-delay="400">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </Col>
        </Row>

        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <div className="glass-card project-card h-100" data-aos="fade-up" data-aos-delay={index * 100}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  style={{ height: '250px', width: '100%', objectFit: 'cover' }}
                />
                <div className="project-content p-4">
                  <h5 className="project-title mb-3">
                    {project.title}
                  </h5>
                  <p className="project-description mb-3">
                    {project.description}
                  </p>

                  <div className="project-technologies mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <Button
                      variant="outline-light"
                      size="sm"
                      className="me-2 project-btn project-btn-code"
                      target="_blank"
                      href={project.githubUrl}
                    >
                      <Github className="me-1" size={16} />
                      Code
                    </Button>
                    {project.liveUrl === '#' ? (
                      <Button
                        onClick={() => setOpenIndex(index)}
                        variant="light"
                        size="sm"
                        className="project-btn project-btn-demo"
                      >
                        <ExternalLink className="me-1" size={16} />
                        Live Demo
                      </Button>
                    ) : (
                      <Button
                        variant="light"
                        size="sm"
                        className="project-btn project-btn-demo"
                        target="_blank"
                        href={project.liveUrl}
                      >
                        <ExternalLink className="me-1" size={16} />
                        Live Demo
                      </Button>)}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Snackbar
          open={openIndex !== null}
          onClose={() => setOpenIndex(null)}
          TransitionComponent={SlideTransition}
          autoHideDuration={5000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          key={`slide-${openIndex}`}
        >
          <Alert
            onClose={() => setOpenIndex(null)}
            severity="warning"
            variant="filled"
            sx={{ width: 'max-content', borderRadius: '30px' }}
          >
            Live demo is not available.
          </Alert>
        </Snackbar>
      </Container>
    </section>
  );
};

export default Projects;