import { createServer } from 'miragejs';

import data from './data.json';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/posts', (schema, request) => {
      const limit = parseInt(request.queryParams.limit) || 6;
      // const page = request.queryParams.page || 1;

      // const startIndex = (page - 1) * limit;
      // const endIndex = startIndex + limit;

      // const result = data.slice(0, limit);

      return data.posts.slice(0, limit);

      // return { posts: result, total: data.length };
        });

    this.get('/posts/:id', (schema, request) => {
          const id = request.params.id;
          return data.posts.find((post) => post.id === id);
        });

  },
});
