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
          <ul key={post.slug}>
            <li><a href={`/blog/${post.slug}`}>{post.slug}</a></li>
            <li><mark>{post.title}</mark></li>
            {/* <li><mark>{post.excerpt}</mark></li> */}
            <li><mark>{post.date}</mark></li>
            <li><mark>{post.slug}</mark></li>
            {/* <li><mark>{post.author}</mark></li> */}
            {/* <li><mark>{post.content}</mark></li> */}
            {/* <li><mark>{post.ogImage}</mark></li> */}
          </ul>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'excerpt',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
  ]);

  return {
    props: { posts },
  };
};

export default Index;
