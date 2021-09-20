/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';
import PostsLayout from '../layouts/postsLayout';
import { Button } from 'theme-ui';

const Posts = ({ posts }) => (
  <div sx={{ mt: '25px' }}>
    <PostsLayout>
      {posts.map((post) => (
        <div
          key={post.id}
          sx={{
            variant: 'containers.growCard',
            bg: 'muted',
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.date}</p>
          <Button
            sx={{
              mt: 4,
              mr: 3,
              p: 2,
              variant: 'styles.btnEdit',
            }}
          >
            Edit Post
          </Button>
          <Button
            sx={{
              p: 2,
              variant: 'styles.btnDanger',
            }}
          >
            Delete Post
          </Button>
        </div>
      ))}
    </PostsLayout>
  </div>
);
export default Posts;
