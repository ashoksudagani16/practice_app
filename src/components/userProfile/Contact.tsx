import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Contact Information</h2>

      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Contact Details</Card.Title>
              <Card.Text>
                <strong>Email:</strong> ashoksudagani16@gmail.com
              </Card.Text>
              <Card.Text>
                <strong>Phone:</strong> (+91) 6302802588
              </Card.Text>
              <Card.Text>
                <strong>Address:</strong> Kphp 9th phase, Hyderabad.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Social Media</Card.Title>
              <Card.Text>
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
              </Card.Text>
              <Card.Text>
                <strong>GitHub:</strong> <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">github.com/yourprofile</a>
              </Card.Text>
              <Card.Text>
                <strong>Twitter:</strong> <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">@yourprofile</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
