import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const workExperiences = [
    {
      title: 'Full Stack Developer',
      company: 'I & T Labs, Visakhapatnam',
      period: 'Jul 2023 – Nov 2023',
      description: 'Contributed to the design and development of a dynamic college website UI using React.js and Bootstrap. Focused on mobile responsiveness and clean UI architecture.',
      achievements: [
        'Designed and implemented a responsive UI',
        'Optimized performance for mobile devices',
        'Collaborated with backend team for seamless integration',
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Oasis Infobyte',
      period: 'Aug 2023 – Sep 2023',
      description: 'Created interactive beginner-level web apps: To-do List, Gym Landing Page, and temperature Converter using HTML, CSS, and JavaScript. Designed clean, intuitive user interfaces with responsive layouts.',
      achievements: [
        'Built 4+ beginner-level websites',
        'Utilized CSS Grid and Flexbox for responsive layouts',
        'Implemented modern UI frameworks'
      ]
    },
  ];

  return (
    <section id="experience" className="experience-section py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">Work Experience</h2>
            <div className="section-divider" data-aos="fade-up" data-aos-delay="200"></div>
          </Col>
        </Row>
        
        <Row>
          <Col lg={10} className="mx-auto">
            <div className="timeline">
              {workExperiences.map((item, index) => (
                <div 
                  key={index} 
                  className="timeline-item work"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="timeline-marker">
                    <Briefcase size={18} />
                  </div>
                  
                  <div className="glass-card timeline-card">
                    <div className="p-3">
                      <div className="timeline-header">
                        <h6 className="timeline-title mb-2">
                          {item.title}
                        </h6>
                        <p className="timeline-company mb-2">
                          {item.company}
                        </p>
                        <div className="timeline-period mb-3">
                          <Calendar className="me-2" size={14} />
                          <small>{item.period}</small>
                        </div>
                      </div>
                      
                      <p className="timeline-description mb-3" style={{ fontSize: '0.9rem' }}>
                        {item.description}
                      </p>
                      
                      <div className="timeline-achievements">
                        <h6 style={{ fontSize: '0.9rem' }}>Key Achievements:</h6>
                        <ul style={{ fontSize: '0.85rem' }}>
                          {item.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;