import React from 'react';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

import { IPost } from '../../models/posts';

const CardComponent=({post}:any)=> {
  return (

    <div style={{margin:'5px' }} className="col-lg-3 col-md-6 col-12">

    <Card style={{ width: '20rem',height:'22rem' }}>
      <Card.Body>
        <Card.Title>{post?.title}</Card.Title>
        <Card.Text>
        {post.summary}
        </Card.Text>
        <Card.Text className='text-center' style={{ position: 'absolute', bottom: 60, left: 10, right: 10 }}>
        <Card.Img variant="top" src={post.author.avatar} className="rounded-circle" style={{ width: 40, height: 40 }} />
        {post.author.name}
        </Card.Text>
        <div  className='text-center' style={{position: 'absolute', bottom: 10, left: 10, right: 10 }}>
          <Card.Text>{moment(post.publishDate).format('D MMM YYYY')}</Card.Text>
          <Card.Link href="#">Details</Card.Link>
        </div>
      </Card.Body>
     </Card>
     </div>

  );
};

export default CardComponent;