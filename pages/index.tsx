import { GetStaticProps } from 'next';
// import Link from 'next/link';
import Layout from '../components/misc/layout';
import { getAllPosts } from '../lib/api';
import type PostType from '../interfaces/post';

type Props = {
  posts: PostType[];
};

const Index = ({ posts }: Props) => {
  return (
    <Layout>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`}>
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'slug',
    'title', // Include other fields as needed
  ]);

  return {
    props: { posts },
  };
};

export default Index;
