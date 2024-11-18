import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Videos from '../../components/videos-fetch/Videos-gallery'; // Adjust path if necessary

export const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');

  // Function to update selected video and title
  const handleVideoSelect = (videoUrl, videoTitle) => {
    setSelectedVideo(videoUrl);
    setSelectedTitle(videoTitle);
  };

  return (
    <Container className="container">
      {/* Heading */}
      <Row className="text-center mt-5">
        <Col>
          <h1>Video Gallery</h1>
        </Col>
      </Row>

      <Row className="my-3">
        <Col lg={12} md={12}>
          <Videos onVideoSelect={handleVideoSelect} />
        </Col>
      </Row>
      <Row className='text-center'>
        <Col>
        <Button
          variant='secondary'
          href="https://www.youtube.com/@SPJNepal-eu2wq"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch more videos
        </Button>
        </Col>
      </Row>
    </Container>
  );
};
