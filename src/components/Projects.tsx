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
      title: 'Hybrid Recommender System',
      description: 'A sophisticated recommendation engine utilizing SBERT for content embeddings and Neural Collaborative Filtering (NCF) to fuse diverse behavioral and sentiment signals. It features a multi-stage pipeline including FAISS-based retrieval and LightGBM LambdaRank for high-precision final ranking.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyuq0bErrvw0i9Ty4ssGofMlZL_yI6p1atoQ&s',
      technologies: ['Python', 'TensorFlow/Keras', 'SBERT', 'FAISS', 'LightGBM', 'Scikit-learn'],
      githubUrl: 'https://github.com/Chandu593/Hybrid_Recommender_System',
      liveUrl: 'https://hybridrecommendersystem-hnf7wmxye8rvpmffmy832a.streamlit.app/'
    },
    {
      title: 'Customer Churn Analytics & Prediction',
      description: 'Engineered a full descriptive-predictive-prescriptive pipeline on a telecom churn dataset. Mapped top churn drivers to prescriptive retention playbooks; simulated positive ROI using Average Revenue Per User (ARPU)-based financial modelling',
      image: 'data:image/png;base64,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',
      technologies: ['Python', 'XGBoost','SHAP', 'SMOTE', 'YData-Profiling', 'Matplotlib/Seaborn'],
      githubUrl: 'https://github.com/Chandu593/Churn_data_analytics',
      liveUrl: '#'
    },
    {
      title: 'Online Book Store Portal (BookMonkey)',
      description: 'Developed a full-stack MERN e-commerce platform for buying, selling, and exchanging books. Integrates e-commerce functionality with a community-driven book exchange system, smart search filters, cart/wishlist management, and exchange history tracking.',
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