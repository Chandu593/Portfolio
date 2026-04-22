import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const educationHistory = [
    {
      title: 'M.Tech in Artificial Intelligence',
      institution: 'Indian Institute of Information Technology, Bhopal',
      period: '2025 - 2027',
      description: 'Pursuing postgraduate degree specializing in Artificial Intelligence, with core coursework in Machine Learning, Deep Learning, Computer Vision, Natural Language Processing and research work.',
      achievements: [
        'CGPA: 8.43/10',
        'Developed a Hybrid Movie Recommender System (CineAI) using neural collaborative filtering, content-based technique, sentiment analysis, sequential model (transformer), deep model fusion and Lambda ranking algorithm',
      ]
    },
    {
      title: 'B.Tech in Information Technology',
      institution: 'Andhra University College of Engineering, Visakhapatnam',
      period: '2021 - 2025',
      description: 'Pursued an undergraduate degree with a focus on Software Engineering, Computer Programming, Web Development and more. Engaged in practical and theoretical computer science coursework.',
      achievements: [
        'GPA: 8.66/10',
        'Built a full-stack MERN application for book exchange (BookMonkey)',
        'Participated in Smart India Hackathon and other coding competitions',
      ]
    },
    {
      title: 'Higher Secondary Education',
      institution: 'Sri Chaitanya Institutions, Vizianagaram',
      period: '2019 - 2021',
      description: 'Completed Higher Secondary (Class XII) with Mathematics, Physics, and Chemistry (MPC) as core subjects under the Andhra Pradesh Board of Intermediate Education.',
      achievements: [
        'Scored 96% aggregate in Board Examinations',
        'Qualified in state and national-level entrance exams like APEAPCET, JEE Mains',
      ]
    },
    {
      title: 'Matriculation',
      institution: 'Dr. Besant EM School, Vizianagaram',
      period: '2009 - 2019',
      description: 'Completed foundational education (Class X) with strong academic record, building core understanding in science, mathematics, and languages.',
      achievements: [
        'Secured 10/10 GPA in SSC Board Examinations',
        'Won silver medal in Science and Mathematics Olympiad',
        'Won 3rd place in school-level Science Fair'
      ]
    }
  ];

  return (
    <section id="education" className="education-section py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">Education</h2>
            <div className="section-divider" data-aos="fade-up" data-aos-delay="200"></div>
          </Col>
        </Row>

        <Row>
          <Col lg={10} className="mx-auto">
            <div className="timeline">
              {educationHistory.map((item, index) => (
                <div
                  key={index}
                  className="timeline-item education"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="timeline-marker">
                    <GraduationCap size={18} />
                  </div>

                  <div className="glass-card timeline-card">
                    <div className="p-3">
                      <div className="timeline-header">
                        <h6 className="timeline-title mb-2">
                          {item.title}
                        </h6>
                        <p className="timeline-company mb-2">
                          {item.institution}
                        </p>
                        <div className="timeline-period mb-3">
                          <Calendar className="me-2" size={14} />
                          <small>{item.period}</small>
                        </div>
                      </div>

                      <p className="timeline-description mb-3" style={{ fontSize: '0.9rem' }}>
                        {item.description}
                      </p>

                      {item.achievements?.length > 0 ? <div className="timeline-achievements">
                        <h6 style={{ fontSize: '0.9rem' }}>Key Achievements:</h6>
                        <ul style={{ fontSize: '0.85rem' }}>
                          {item.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div> : null}
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

export default Education;