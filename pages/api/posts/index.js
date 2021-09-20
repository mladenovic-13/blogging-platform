import nextConnect from 'next-connect';
import data from '../../../src/data/data';

const handler = nextConnect().get((req, res) => {
  res.json({ posts: data });
});
export default handler;
