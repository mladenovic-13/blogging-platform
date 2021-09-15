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
      mt: '25px',
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
    <Button sx={{ mb: 3 }}>Log Out</Button>
  </div>
);
export default UserInfo;
