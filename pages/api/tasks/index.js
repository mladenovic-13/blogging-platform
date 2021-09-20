import nextConnect from 'next-connect';
import data from '../../../src/data/tasksData';

const handler = nextConnect().get((req, res) => {
  res.json({ tasks: data });
});
export default handler;
