import nextConnect from 'next-connect';
import data from '../../../src/data/postsData';

const handler = nextConnect().get((req, res) => {
  res.json({ posts: data });
});
export default handler;
