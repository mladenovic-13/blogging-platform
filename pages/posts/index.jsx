/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';
import Posts from '../../src/components/posts';

const BlogPosts = ({ data }) => (
  <div
    sx={{
      variant: 'containers.page',
      mt: '30px',
      mx: 'auto',
      width: '80vw',
    }}
  >
    <Posts posts={data.posts} />
  </div>
);

export default BlogPosts;

export async function getStaticProps() {
  const res = await fetch(
    'http://localhost:3000/api/posts'
  );
  const data = await res.json();
  return {
    props: { data },
  };
}
