import React, { useState, useEffect } from 'react';
import CardComponent from '../components/layout/card';
import { ICategory, IPost } from '../models/posts';
import { getPosts } from '../utils/service';
import { Button } from 'react-bootstrap';
import CheckboxesComponent from '../components/layout/checkbox';

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([])
  const [skip, setSkip] = useState(0)
  const [total, setTotal] = useState(0)
  const [limit, setLimit] = useState(10);

  const getAllPosts = () => {
    getPosts(skip,limit)
      .then((data) => {
        console.log({ data });
        if (data) {
          setPosts(data.posts);
          setTotal(data.total)
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const loadMore = () => {
    let toSkip = skip + limit
    getPosts(toSkip,limit).then((data:any)=>{
      if (data.error) {
        console.log(data.error)
    } else {
        setPosts([...posts, ...data.posts])
        setTotal(data.total)
        setSkip(toSkip)
    }
    }).catch((err)=>console.log({err}))

  };

  const loadMoreButton = () =>
     (total > limit+skip &&(
      <Button onClick={loadMore} className="btn btn-warning mb-5">
        Load More
      </Button>)
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
            {posts?.map((post: IPost, i) => (
              <CardComponent key={i} post={post}/>
            ))}
          </div>
         
        </div>
      </div>
      <div className='text-center'>
          {loadMoreButton()}
          </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
