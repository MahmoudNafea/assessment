import { createServer } from 'miragejs';

import data from './data.json';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/posts', (schema, request) => {
      const limit = parseInt(request.queryParams.limit) || 6;
      const startIndex = parseInt(request.queryParams.skip) || 0;

      const filter = request.queryParams.filter;

      if (filter !== 'all') {
        const postsWithCategory = data.posts.filter((post) =>
          post.categories.some((category) => category.name === filter)
        );
        return { posts: postsWithCategory };
      }else{
        const posts = data.posts.slice(startIndex, startIndex + limit);

        return { posts: posts, total: data.posts.length };
      }


    });

    this.get('/posts/:id', (schema, request) => {
      const id = request.params.id;
      return data.posts.find((post) => post.id === id);
    });

    this.get('/categories', () => {
      const categories = [
        { key: 'Surveys and Forms', value: 'Surveys and Forms' },
        { key: 'Digital Marketing', value: 'Digital Marketing' },
        {
          key: 'Platform News and Updates',
          value: 'Platform News and Updates',
        },
        { key: 'Tips and Best Practise', value: 'Tips and Best Practise' },
        { key: 'Data Management', value: 'Data Management' },
        { key: 'Marketing Analytics', value: 'Marketing Analytics' },
        { key: 'Landing Pages', value: 'Landing Pages' },
        { key: 'Ecommerce', value: 'Ecommerce' },
        { key: 'Digital Marketing', value: 'Digital Marketing' },
        { key: 'Email Marketing', value: 'Email Marketing' },
        { key: 'Marketing Automation', value: 'Marketing Automation' },
        {
          key: 'Platform News and Updates',
          value: 'Platform News and Updates',
        },
      ];
      return { categories };
    });
  },
});
