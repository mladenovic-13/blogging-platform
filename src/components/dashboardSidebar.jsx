/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';
import UserInfo from './userInfo';
const DashboardSidebar = () => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '18vw',
      bg: 'muted',
      m: 0,
      borderRight: '1px secondary',
    }}
  >
    <UserInfo />
  </div>
);
export default DashboardSidebar;
