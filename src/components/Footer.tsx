import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Mail, ArrowUp, Code } from 'lucide-react';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <GitHubIcon sx={{fontSize:23}} />, url: 'https://github.com/Chandu593', label: 'GitHub' },
    { icon: <LinkedInIcon sx={{fontSize:23}} />, url: 'https://www.linkedin.com/in/vasala-chandra-sekhar-reddy-b69289263/', label: 'LinkedIn' },
    { icon: <Code size={20} />, url: 'https://leetcode.com/u/ChandraSekhar21/', label: 'Leetcode' },
    { icon: <Mail size={20} />, url: 'mailto:chandureddyv143@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="footer-text mb-2">
              &copy; 2025 Chandra Sekhar. All rights reserved.
            </p>
            <p className="footer-subtext">
              Built with React, Bootstrap & Material-UI
            </p>
          </Col>

          <Col md={6} className="text-center text-md-end">
            <div className="social-links-footer mb-3">
              {socialLinks.map((link, index) => (
                <Tooltip title={link.label} placement="top-start" arrow key={index}
                  slots={{
                    transition: Zoom,
                  }}>
                  <a
                    href={link.url}
                    className="social-link-footer"
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                </Tooltip>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="scroll-to-top-btn btn"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;