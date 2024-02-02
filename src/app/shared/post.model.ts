interface PostAttributes {
  layout: string; // could be 'post' or 'other'
  title: string;
  link?: string;
  linkTitle?: string;
  topic: string;
  categories: string;
  permalink: string;
  comments: boolean;
  excerpt: string;
  seo__desc: string;
  seo__key: string;
  urlTitle: string;
  id: number;
}

export interface Post {
  attributes: PostAttributes;
  body: string;
  frontmatter: string;
  path: string;
}
