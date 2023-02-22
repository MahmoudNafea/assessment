import React, { useState, useEffect } from 'react';
import CardComponent from '../components/layout/card';
import { ICategory, IPost } from '../models/posts';
import { getAllCategories, getPosts } from '../utils/service';
import { Button } from 'react-bootstrap';
import RadioboxesComponent from '../components/layout/radiobox';

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [filter, setFilter] = useState<any>('all');
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(6);

  const getAllPosts = () => {
    getPosts(skip, limit, filter)
      .then((data) => {
        if (data) {
          setPosts(data.posts);
          setTotal(data.total);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const loadAllCategories = () => {
    getAllCategories()
      .then((data) => {
        if (data) {
          setCategories(data.categories);
        }
      })
      .catch((err) => console.log({ err }));
  };

  useEffect(() => {
    getAllPosts();
    loadAllCategories();
  }, []);

  const loadMore = () => {
    let toSkip = skip + limit;
    getPosts(toSkip, limit, filter)
      .then((data: any) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setPosts([...posts, ...data.posts]);
          setTotal(data.total);
          setSkip(toSkip);
        }
      })
      .catch((err) => console.log({ err }));
  };

  const filterHandle = (filter: any) => {
    setFilter(filter);
    getPosts(skip, limit, filter)
      .then((data) => {
        if (data) {
          setPosts(data.posts);
        }
      })
      .catch((err) => console.log(err));
  };

  const loadMoreButton = () =>
    total > limit + skip && (
      <Button onClick={loadMore} className="btn btn-warning mb-5">
        Load More
      </Button>
    );

  const resetFilter = () => {
    setFilter('all')
    getPosts(skip, limit, 'all')
    .then((data) => {
      if (data) {
        setPosts(data.posts);
      }
    })
    .catch((err) => console.log(err));
  };

  const resetFilterButton = () => (
    <Button onClick={resetFilter} className="btn btn-warning mb-5">
      Reset
    </Button>
  );

  return (
    <React.Fragment>
      <div>
        <div className="row">
          <div className="col-lg-3 col-12">
            <h4>Filter By Category</h4>
            <RadioboxesComponent
              categories={categories}
              filterHandle={(filter: any) => filterHandle(filter)}
            />
            {resetFilterButton()}
          </div>
          <div className="col-lg-9 col-12">
            <div className="row ">
              {posts?.map((post: IPost, i) => (
                <CardComponent key={i} post={post} />
              ))}
            </div>
          </div>
        </div>
        <div className="text-center">{loadMoreButton()}</div>
      </div>
    </React.Fragment>
  );
};

export default Home;
