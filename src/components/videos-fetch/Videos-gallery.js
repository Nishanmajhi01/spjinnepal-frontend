import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const Videos = ({ onVideoSelect }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const PLAYLIST_ID = process.env.REACT_APP_YOUTUBE_PLAYLIST_ID;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let allVideos = [];
        let nextPageToken = ''; // Pagination token
        let hasNextPage = true;

        while (hasNextPage) {
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&key=${API_KEY}&pageToken=${nextPageToken}`
          );

          if (!response.ok) {
            throw new Error('Failed to fetch videos');
          }

          const data = await response.json();

          if (data.items && data.items.length > 0) {
            const videoList = data.items.map(item => ({
              title: item.snippet.title,
              videoUrl: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
              videoId: item.snippet.resourceId.videoId
            }));

            allVideos = [...allVideos, ...videoList]; // Append the new videos to the allVideos array
          }

          // If there's a next page, get the nextPageToken
          nextPageToken = data.nextPageToken;
          hasNextPage = !!nextPageToken; // If there's a nextPageToken, we continue fetching
        }

        // Once all videos are fetched, update the state
        setVideos(allVideos);
        setSelectedVideo(allVideos[0].videoUrl);
        setSelectedTitle(allVideos[0].title);
        onVideoSelect(allVideos[0].videoUrl, allVideos[0].title); // Notify parent component
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [onVideoSelect]);

  const handleVideoSelect = (videoUrl, videoTitle, index) => {
    setSelectedVideo(videoUrl);
    setSelectedTitle(videoTitle);
    setActiveVideoIndex(index);
    onVideoSelect(videoUrl, videoTitle); // Notify parent component
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Row>
    {videos.map((video, id) => (
      <Col xs={12} sm={4} md={4} lg={4} className="my-3" key={id}>
        <div
          className="video-thumbnail"
          onClick={() => handleVideoSelect(video.videoUrl, video.title)}
          style={{
            cursor: 'pointer',
            border: '1px solid #ddd',
            padding: '10px',
            borderRadius: '8px',
          }}
        >
          <iframe
            width="100%"
            height="200"
            src={video.videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h5 className="title">{video.title}</h5>
        </div>
      </Col>
    ))}
  </Row>
  );
};

export default Videos;
