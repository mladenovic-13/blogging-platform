/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';
import Link from 'next/link';

const Nav = () => (
  <header
    sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '50px',
      width: '100vw',
      borderBottom: '1px solid',
      borderColor: 'highlight',
      bg: 'primary',
      p: 1,
    }}
  >
    <h1
      sx={{
        ml: 4,
        fontSize: '4',
        border: '4px solid',
        borderRadius: 3,
        pl: 2,
        pr: 2,
      }}
    >
      Blogging
    </h1>

    <nav
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 4,
      }}
    >
      <Link href="/blog-posts">
        <a
          sx={{
            textDecoration: 'none',
            mr: 4,
          }}
        >
          Blog Posts
        </a>
      </Link>
      <Link href="/to-do">
        <a
          sx={{
            mr: 5,
            textDecoration: 'none',
          }}
        >
          To Do App
        </a>
      </Link>
    </nav>
  </header>
);

export default Nav;
