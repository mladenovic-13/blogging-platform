/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';
import data from '../data/data';
import NewPostCard from './newPostCard';
const LatestPosts = () => (
  <div
    sx={{
      display: 'flex',
      flexFlow: 'row wrap',
      alignContent: 'space-around',
      gap: 4,
    }}
  >
    <NewPostCard />
    {data.map((post) => (
      <div
        key={post.id}
        sx={{
          variant: 'containers.card',
          width: '200px',
          height: '250px',
          ':hover': {
            transform: 'scale(1.1)',
          },
          textAlign: 'center',
          transition: 'all .2s ease-in-out',
        }}
      >
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <p>{post.date}</p>
      </div>
    ))}
  </div>
);
export default LatestPosts;
