/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';

const PostsLayout = (props) => (
  <div
    sx={{
      width: '75vw',
      mx: 'auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridAutoRows: '250px',
      gap: 4,
    }}
  >
    {props.children}
  </div>
);

export default PostsLayout;
