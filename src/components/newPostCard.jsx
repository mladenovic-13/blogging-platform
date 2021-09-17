/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';
import Image from 'next/image';
import addImg from '../../public/images/add.svg';

const NewPostCard = () => (
  <div
    sx={{
      variant: 'containers.card',
      display: 'inline-block',
      width: '200px',
      height: '250px',
      ':hover': {
        transform: 'scale(1.1)',
      },
      textAlign: 'center',
      transition: 'all .2s ease-in-out',
    }}
  >
    <h1>Add New Blog Post </h1>
    <Image
      alt="add new icon"
      src={addImg}
      width={60}
      height={60}
    ></Image>
  </div>
);
export default NewPostCard;
