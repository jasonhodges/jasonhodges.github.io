interface PostAttributes {
  layout: string;
  title: string;
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
  frontMatter: string;
  path: string;
}
