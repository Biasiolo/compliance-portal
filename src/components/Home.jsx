import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Home.scss';

const Home = () => {
  const countries = [
    { name: 'Brazil', flag: 'https://flagcdn.com/w320/br.png', path: '/brazil' },
    { name: 'Argentina', flag: 'https://flagcdn.com/w320/ar.png', path: '/argentina' },
    { name: 'Mexico', flag: 'https://flagcdn.com/w320/mx.png', path: '/mexico' },
    { name: 'Colombia', flag: 'https://flagcdn.com/w320/co.png', path: '/colombia' },
    { name: 'Puerto Rico', flag: 'https://flagcdn.com/w320/pr.png', path: '/puerto-rico' },
  ];

  return (
    <Container className="home-container text-center">
      <Row className="justify-content-center mb-5">
        <Col lg={10}>
          <h1 className="mt-4">Compliance Portal</h1>
          <p className="mt-3">
            Welcome to the compliance and anti-money laundering portal. This tool provides comprehensive information on laws, regulations, and mechanisms for each country.
            Click on a country's flag below to explore its specific details.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center mb-5">
        {countries.map((country) => (
          <Col key={country.name} lg={2} md={4} sm={6} xs={12} className="d-flex justify-content-center mb-4">
            <Card className="country-card text-center">
              <Card.Img
                variant="top"
                src={country.flag}
                alt={`${country.name} flag`}
                className="country-flag"
              />
              <Card.Body>
                <Card.Title>{country.name}</Card.Title>
                <a href={country.path} className="btn ">Explore</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center mb-5">
        <Col>
        
        <Link to="/comparative">
        <div className="comp">
            View Comparative Analysis
            </div>
          </Link>
        
          
        </Col>
      </Row>
      <Row className="dev">
        <Col>
        <p> Development by @Biasiolo</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
