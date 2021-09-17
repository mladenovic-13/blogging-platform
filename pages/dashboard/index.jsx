/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';
import DashboardSidebar from '../../src/components/dashboardSidebar';
import NewPostCard from '../../src/components/newPostCard';
import LatestPosts from '../../src/components/latestPostrs';

const Dashboard = () => (
  <div
    sx={{
      variant: 'containers.page',
      display: 'flex',
      flexFlow: 'row wrap',
    }}
  >
    <DashboardSidebar />
    <div
      sx={{
        ml: '25vw',
        mt: '20px',
        maxWidth: '75vw',
      }}
    >
      <LatestPosts />
    </div>
  </div>
);

export default Dashboard;
