import React, { useState, useEffect } from 'react';
import CardComponent from '../components/layout/card';
import { ICategory, IPost } from '../models/posts';
import { getPosts } from '../utils/service';
import { Button } from 'react-bootstrap';
import CheckboxesComponent from '../components/layout/checkbox';

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([])

  const [limit, setLimit] = useState(9);

  const getAllPosts = (limit:number) => {
    getPosts(limit)
      .then((data) => {
        console.log({ data });
        if (data) {
          setPosts(data);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  useEffect(() => {
    getAllPosts(limit);
  }, []);

  const loadMore = () => {};

  const loadMoreButton = () =>
     (
      <Button onClick={loadMore} className="btn btn-warning mb-5">
        Load More
      </Button>
    );

  return (
    <React.Fragment>
      <div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4>Filter By Category</h4>
         {/* < CheckboxesComponent /> */}
        </div>
        <div className="col-lg-9 col-12">
          <div className="row ">
            {posts.map((post: IPost, i) => (
              <CardComponent key={i} post={post}/>
            ))}
          </div>
          {/* {loadMoreButton()} */}
        </div>
      </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
