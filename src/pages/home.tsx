import React, { useState, useEffect } from 'react';

//react-bootstrap
import { Button } from 'react-bootstrap';

//components
import RadioboxesComponent from '../components/layout/radiobox';
import CardComponent from '../components/layout/card';

//models
import { IPost } from '../models/posts';

//service
import { getAllCategories, getPosts } from '../utils/service';

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [filter, setFilter] = useState<any>('all');

  //pagination helpers
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(6);


  //functions to retrive data like posts and actegories
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

  const resetFilter = () => {
    setFilter('all');
    getPosts(skip, limit, 'all')
      .then((data) => {
        if (data) {
          setPosts(data.posts);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllPosts();
    loadAllCategories();
  }, []);

  //functions to render the ui in clean way.
  const renderResetFilterButton = () => (
    <Button onClick={resetFilter} className="btn btn-warning mb-5">
      Reset
    </Button>
  );

  const renderLoadMoreButton = () =>
    total > limit + skip && (
      <Button onClick={loadMore} className="btn btn-primary mb-5">
        Load More
      </Button>
    );

  const renderCategorySection = () => (
    <div className="col-lg-3 col-12">
      <h4>Filter By Category</h4>
      <RadioboxesComponent
        categories={categories}
        filterHandle={(filter: any) => filterHandle(filter)}
      />
      {renderResetFilterButton()}
    </div>
  );

  const renderPostsListSection = () => (
    <div className="col-lg-9 col-12">
      <div className="row">
        {posts?.map((post: IPost, i) => (
          <CardComponent key={i} post={post} />
        ))}
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row" style={{ marginTop: '30px' }}>
          {renderCategorySection()}
          {renderPostsListSection()}
        </div>
        <div className="text-center">{renderLoadMoreButton()}</div>
      </div>
    </React.Fragment>
  );
};

export default Home;
