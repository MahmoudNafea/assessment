import { useState } from 'react';
import { useEffect } from 'react';
import CardComponent from '../components/layout/card';
import { getPosts } from '../utils/service';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    getPosts()
      .then((data) => {
        console.log({ data });
        if (data) {
          setPosts(data.posts);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      Home pgae
      {posts.map((post, i) => (
        <div key={i}>
          <CardComponent post={post} />
        </div>
      ))}
    </div>
  );
};

export default Home;
