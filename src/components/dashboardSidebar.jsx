/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';
import UserInfo from './userInfo';
import Link from 'next/link';
import Image from 'next/image';
import searchImg from '../../public/images/search.svg';

const DashboardSidebar = () => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid highlight',
      width: '18vw',
      bg: 'muted',
      m: 0,
    }}
  >
    <UserInfo />
    <nav
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        div: {
          borderTop: '1px solid highlight',
          p: 1,
        },
        a: {
          textDecoration: 'none',
          color: 'text',
          fontSize: 4,
        },
      }}
    >
      <div>
        <Link href="">
          <a>To Do List</a>
        </Link>
      </div>
      <div>
        <Link href="">
          <a>New Post</a>
        </Link>
      </div>
      <div>
        <Link href="">
          <a>All Posts</a>
        </Link>
      </div>
      <div>
        <Link href="">
          <a>
            <Image
              alt="to do icon"
              src={searchImg}
              width={15}
              height={15}
            />
            Search
          </a>
        </Link>
      </div>
    </nav>
    <div sx={{ textAlign: 'center' }}>
      <p>
        Author: <br />
        Nikola Mladenovic
        <br />
        Powered By: Next.JS
      </p>
    </div>
  </div>
);
export default DashboardSidebar;
