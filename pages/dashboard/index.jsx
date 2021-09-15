/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';
import Link from 'next/link';
import DashboardSidebar from '../../src/components/dashboardSidebar';
const Dashboard = () => (
  <div sx={{ variant: 'container.page' }}>
    <DashboardSidebar />
  </div>
);

export default Dashboard;
