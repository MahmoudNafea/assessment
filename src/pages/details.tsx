import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import CardComponent from '../components/layout/card';
import { getPostById } from './../utils/service';

const Details = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams<string>();

  const loadPost = (id: any) => {
    getPostById(id)
      .then((data: any) => {
        if (data.error) {
          console.log(data.error);
        } else {
          return setPost(data);
        }
      })
      .catch((err: any) => console.log(err));
  };

  useEffect(() => {

    loadPost(postId);
  }, [postId]);

  return (
    <div className="row">
        <div>
        <Link to={`/`} className="btn btn-outline-primary">Back</Link>
        </div>
      <div className="col-6">
        <CardComponent post={post}/>
      </div>
    </div>
  );
};

export default Details;
