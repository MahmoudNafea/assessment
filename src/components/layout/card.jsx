import React from 'react';
import Card from 'react-bootstrap/Card';

const CardComponent=({post})=> {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        {post.summary}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
     </Card>
  

  );
};

export default CardComponent;