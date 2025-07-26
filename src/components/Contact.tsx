import React from 'react';
// { useState,Form, Button, Alert , Send }
import { Container, Row, Col } from 'react-bootstrap';
import { Mail, Phone, MapPin} from 'lucide-react';

const Contact: React.FC = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // });
  // const [showAlert, setShowAlert] = useState(false);

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Here you would typically send the form data to your backend
  //   console.log('Form submitted:', formData);
  //   setShowAlert(true);
  //   setTimeout(() => setShowAlert(false), 5000);

  //   // Reset form
  //   setFormData({
  //     name: '',
  //     email: '',
  //     subject: '',
  //     message: ''
  //   });
  // };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'chandureddyv143@gmail.com',
      link: 'mailto:chandureddyv143@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: '+91 8523836034',
      link: '+91 8523836034'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      details: 'Bobbadipeta, Vizianagaram, Andhra Pradesh, India',
      link: 'https://www.google.co.in/maps/place/V+T+Nagar,+Vizianagaram,+Andhra+Pradesh+535003/@18.1021271,83.3868685,414m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a3be572c100668b:0x4ffd17870352ca3a!8m2!3d18.1021271!4d83.388156!16s%2Fg%2F11x665f41l?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
            <div className="section-divider" data-aos="fade-up" data-aos-delay="200"></div>
            <p className="section-description" data-aos="fade-up" data-aos-delay="400">
              Have a project in mind? Let's discuss how we can work together
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {contactInfo.map((info, index) => (
            <Col
              key={index}
              xs={12}
              md={4}
              className="mb-4 d-flex justify-content-center"
              data-aos={index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left"}
            >
              <div className="glass-card contact-info-card w-100 text-center p-4">
                <div className="contact-icon mb-3">{info.icon}</div>
                <h6 className="contact-title">{info.title}</h6>
                <p className="contact-details mb-0">
                  <a href={info.link} target='_blank'className="contact-link">
                    {info.details}
                  </a>
                </p>
              </div>
            </Col>
          ))}
        </Row>
        {/* <Row>
          <Col lg={4} className="mb-4">
            <div className="contact-info" data-aos="fade-right">
              {contactInfo.map((info, index) => (
                <div key={index} className="glass-card contact-info-card mb-3">
                  <div className="text-center p-4">
                    <div className="contact-icon mb-3">
                      {info.icon}
                    </div>
                    <h6 className="contact-title">
                      {info.title}
                    </h6>
                    <p className="contact-details">
                      <a href={info.link} className="contact-link">
                        {info.details}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          
          <Col lg={8}>
            <div className="glass-card contact-form-card" data-aos="fade-left">
              <div className="p-4">
                {showAlert && (
                  <Alert variant="success" className="mb-4">
                    Thank you for your message! I'll get back to you soon.
                  </Alert>
                )}
                
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="glass-input"
                          placeholder="Your Name"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="glass-input"
                          placeholder="your.email@example.com"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="glass-input"
                      placeholder="Project Discussion"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="glass-input"
                      placeholder="Tell me about your project..."
                    />
                  </Form.Group>
                  
                  <div className="text-center">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="glass-btn submit-btn"
                    >
                      <Send className="me-2" size={20} />
                      Send Message
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
};

export default Contact;