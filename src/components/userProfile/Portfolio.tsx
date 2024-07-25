import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Collapse } from 'react-bootstrap';

interface Project {
  id: string;
  name: string;
}

interface Company {
  id: string;
  name: string;
  role: string;
  description: string;
  projects: Project[];
}

const Portfolio: React.FC = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  const companies: Company[] = [
    {
      id: 'companyA',
      name: 'Company A',
      role: 'Software Developer',
      description: 'Worked on various projects including frontend development using React and integrating with backend APIs.',
      projects: [
        { id: 'project1', name: 'E-commerce Platform' },
        { id: 'project2', name: 'CRM System' }
      ]
    },
    {
      id: 'companyB',
      name: 'Company B',
      role: 'Frontend Developer',
      description: 'Focused on building responsive and user-friendly web applications using modern frontend technologies.',
      projects: [
        { id: 'project1', name: 'Company Website' },
        { id: 'project2', name: 'Internal Dashboard' }
      ]
    }
  ];

  const handleToggle = (companyId: string) => {
    setOpen((prev) => ({
      ...prev,
      [companyId]: !prev[companyId]
    }));
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4">My Portfolio</h2>

      <Row>
        {companies.map((company) => (
          <Col md={6} key={company.id}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{company.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{company.role}</Card.Subtitle>
                <Card.Text>{company.description}</Card.Text>
                <Button
                  onClick={() => handleToggle(company.id)}
                  aria-controls={`${company.id}-projects`}
                  aria-expanded={open[company.id]}
                >
                  {open[company.id] ? 'Hide Projects' : 'Show Projects'}
                </Button>
                <Collapse in={open[company.id]}>
                  <div id={`${company.id}-projects`}>
                    <ListGroup variant="flush" className="mt-3">
                      {company.projects.map((project) => (
                        <ListGroup.Item key={project.id}>{project.name}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;