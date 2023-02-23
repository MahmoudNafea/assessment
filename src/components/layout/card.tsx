import { Link } from 'react-router-dom';

//react-bootstrap
import Card from 'react-bootstrap/Card';

//momet
import moment from 'moment';

//models
import { IPost } from '../../models/posts';

interface ICardProps {
  post: IPost;
}

const CardComponent=({post}: ICardProps)=> {
  return (
    <div style={{margin: '5px'}} className="col-lg-3 col-sm-12">
    <Card style={{ width: '21rem',height:'23rem' }}>
      <Card.Body>
        <Card.Title>{post?.title}</Card.Title>
        <Card.Text>
        {post?.summary}
        </Card.Text>
        <Card.Text className='text-center' style={{ position: 'absolute', bottom: 75, left: 10, right: 10 }}>
        <Card.Img variant="top" src={post?.author?.avatar} className="rounded-circle" style={{ width: 40, height: 40 }} />
        {post?.author?.name}
        </Card.Text>
        <div  className='text-center' style={{position: 'absolute', bottom: 10, left: 10, right: 10}}>
          <Card.Text>{moment(post?.publishDate).format('D MMM YYYY')}</Card.Text>
          <Link to={`posts/${post?.id}`} className="btn btn-outline-primary">Details</Link>
        </div>
      </Card.Body>
     </Card>
     </div>
  );
};

export default CardComponent;