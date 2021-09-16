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
      boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
    }}
  >
    <Link href="/">
      <a
        sx={{
          textAlign: 'center',
          width: '8vw',
          ml: 5,
          fontSize: 4,
          fontWeight: 5,
          border: '2px solid',
          borderRadius: 3,
          transition: 'all .2s ease-in-out',
          ':hover': {
            transform: 'scale(1.1)',
            cursor: 'pointer',
          },
        }}
      >
        Blogging
      </a>
    </Link>

    <nav
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 3,
        fontWeight: 1,
        a: {
          p: 2,
        },
        'a:hover': {
          background: 'highlight',
          borderRadius: 3,
          cursor: 'pointer',
        },
      }}
    >
      <Link href="/blog-posts">
        <a
          sx={{
            textDecoration: 'none',
            mr: 5,
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
      <Link href="/dashboard">
        <a
          sx={{
            mr: 5,
            textDecoration: 'none',
          }}
        >
          Dashboard
        </a>
      </Link>
    </nav>
  </header>
);

export default Nav;
