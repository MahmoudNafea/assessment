export interface IPost {
    id: string;
    title: string;
    publishDate: string;
    author: IAuthor;
    summary: string;
    categories: ICategory[];
  }

  export interface ICategory{
    id: string;
    name: string;
  }

  export interface IAuthor{
    name: string;
    avatar: string;
  }