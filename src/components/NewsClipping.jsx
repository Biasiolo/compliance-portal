import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/News.scss';
import DefaultImage from '../assets/test.png'; // Imagem padrão

const NewsClipping = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);

    const BASE_URL = 'https://api.gdeltproject.org/api/v2/doc/doc';
    const params = {
      query: '(compliance OR financial crimes Latin america money laundering)', // Busca combinada
      mode: 'artlist',
      format: 'json',
      sourcelang: 'eng', // Idiomas suportados
      maxRecords: '40',
      sort: 'hybridrel'

    };

    try {
      const response = await axios.get(BASE_URL, { params });
      const formattedArticles = response.data.articles.map((article) => ({
        title: article.title || 'No Title Available',
        link: article.url || '#',
        domain: article.domain || 'Unknown Source',
        date: article.seendate?.date || 'Unknown Date',
        image: article.socialimage || DefaultImage, // Fallback para a imagem padrão
      }));
      setArticles(formattedArticles);
    } catch (error) {
      console.error('Error fetching news:', error);
      setError('Unable to fetch news at the moment. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Container className="news-container">
      <h2>Related News</h2>
      <div className="text-center mb-5">
        <Button onClick={fetchNews} disabled={loading}>
          {loading ? 'Loading...' : 'Refresh News'}
        </Button>
      </div>
      {error && <p className="text-danger">{error}</p>}
      {articles.length > 0 ? (
        <Row>
          {articles.map((article, index) => (
            <Col key={index} md={3} className="mb-4">
              <Card className="news-card">
                <Card.Img variant="top" src={article.image} alt={article.title} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>
                    <small className="text-muted">
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </small>
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">Source: {article.domain}</small>
                  </Card.Text>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Read More
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>Wait...</p>
      )}
    </Container>
  );
};

export default NewsClipping;
