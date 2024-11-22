import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/News.scss';

import BannerImage from '../assets/test.png';

const NewsClipping = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          q: 'anti-money laundering OR compliance OR financial crimes',
          language: 'en',
          sortBy: 'relevancy',
          pageSize: 30,
          apiKey: '14047203ddc4449e96e57b679f8acc15', // Substitua pela sua API Key
        },
      });

      const uniqueArticles = response.data.articles.filter(
        (article, index, self) =>
          index === self.findIndex((t) => t.title === article.title)
      );

      setArticles(uniqueArticles);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Container className="news-container">
      <h2 className="mt-5">Related News</h2>
      <div className="text-center mb-5">
        <Button variant="primary" onClick={fetchNews} disabled={loading}>
          {loading ? 'Loading...' : 'Update News'}
        </Button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Row className="text-center ">
          {articles.map((article, index) => (
            <Col key={index} md={3} className="mb-4">
              <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="align-items-center"
                  >
              <Card className="news-card">
                <Card.Img className="img"
                  variant="top"
                  src={article.urlToImage || [BannerImage] }
                />
                
                <Card.Body className="justify-content-center">
                  
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>
                    <small className="text-muted">
                      {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }).format(new Date(article.publishedAt))}
                    </small>
                  </Card.Text>
                  <Card.Text>
                    {article.description || 'No description available.'}
                  </Card.Text>
                  <div className='btn'>Read More</div>
                    
                  
                </Card.Body>
                
              </Card>
              </a>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default NewsClipping;
