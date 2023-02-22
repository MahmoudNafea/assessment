import { createServer } from 'miragejs';

import data from './data.json';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/posts', (schema, request) => {
      const limit = parseInt(request.queryParams.limit) || 6;
      const startIndex = parseInt(request.queryParams.skip) || 0;

      const posts = data.posts.slice(startIndex, startIndex + limit);

      return { posts: posts, total: data.posts.length };
    });

    this.get('/posts/:id', (schema, request) => {
      const id = request.params.id;
      return data.posts.find((post) => post.id === id);
    });
  },
});
