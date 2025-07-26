import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Code, Wrench, Database, CheckCircle,CodeXml } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [{
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: [
        'C',
        'Python',
        'Java',
        'JavaScript',
      ]
  },
    {
      title: 'Frontend Development',
      icon: <CodeXml size={24} />,
      skills: [
        'HTML',
        'CSS ',
        'React.js',
        'JavaScript',
        'Bootstrap',
        'Material UI',
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database size={24} />,
      skills: [
        'Node.js',
        'Express.js',
        'MySQL',
        'MongoDB',
        'RESTful APIs',
        'JWT Authentication',
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench size={24} />,
      skills: [
        'Git',
        'GitHub',
        'Postman',
        'VS Code',
        'Cursor',
      ]
    },
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">Skills & Expertise</h2>
            <div className="section-divider" data-aos="fade-up" data-aos-delay="200"></div>
          </Col>
        </Row>
        
        <Row>
          {skillCategories.map((category, index) => (
            <Col lg={6} key={index} className="mb-4">
              <div 
                className="glass-card skill-card h-100" 
                data-aos="fade-up" 
                data-aos-delay={index * 200}
              >
                <div className="p-4">
                  <div className="skill-header mb-4">
                    <div className="skill-icon">
                      {category.icon}
                    </div>
                    <h5 className="skill-title">
                      {category.title}
                    </h5>
                  </div>
                  
                  <div className="skills-grid">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-tag">
                        <CheckCircle size={16} className="skill-check-icon" />
                        <span className="skill-name">{skill}</span>
                      </div>
                    ))}
                    </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;