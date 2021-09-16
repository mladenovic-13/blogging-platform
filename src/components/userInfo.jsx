/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';
import Link from 'next/link';
import { Button } from 'theme-ui';
import Image from 'next/image';
import img from '../../public/images/avatar.png';

const UserInfo = () => (
  <div
    sx={{
      textAlign: 'center',
      mt: '50px',
      mb: '30px',
    }}
  >
    <Image
      alt="avatar"
      src={img}
      width={60}
      height={60}
      sx={{
        borderRadius: '50%',
        mb: 0,
      }}
    />
    <h2
      sx={{
        mt: 0,
        mb: 0,
      }}
    >
      Mladenovic13
    </h2>
    <p sx={{ mb: 3, mt: 1 }}>
      mladenovic13@gmail.com
    </p>
    <div
      sx={{
        mb: 3,
        mt: '30px',
      }}
    >
      <Button
        sx={{
          mr: 4,
          p: 2,
          ':hover': { bg: 'highlight' },
        }}
      >
        Edit User Info
      </Button>
      <Button
        sx={{
          p: 2,
          bg: 'rgb(200,0,0)',
          ':hover': { bg: 'rgb(100,0,0)' },
        }}
      >
        Log Out
      </Button>
    </div>
  </div>
);
export default UserInfo;
