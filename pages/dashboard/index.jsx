/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';
import DashboardSidebar from '../../src/components/dashboardSidebar';
import NewPostCard from '../../src/components/newPostCard';

const Dashboard = () => (
  <div
    sx={{
      variant: 'containers.page',
      display: 'flex',
      flexDirection: 'row',
    }}
  >
    <DashboardSidebar />
    <div
      sx={{
        ml: '25vw',
        mt: '20px',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-around',
      }}
    >
      <NewPostCard />
    </div>
  </div>
);

export default Dashboard;
