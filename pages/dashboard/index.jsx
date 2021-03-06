/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';
import DashboardSidebar from '../../src/components/dashboardSidebar';
import Posts from '../../src/components/posts';

const Dashboard = ({ data }) => (
  <div
    sx={{
      display: 'grid',
      gridTemplateColumns: '20vw auto',
    }}
  >
    <DashboardSidebar />
    <Posts posts={data.posts} />
  </div>
);

export default Dashboard;

export async function getStaticProps() {
  const res = await fetch(
    'http://localhost:3000/api/posts/'
  );
  const data = await res.json();
  return {
    props: { data },
  };
}
