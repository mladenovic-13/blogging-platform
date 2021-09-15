/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';

import SlideShow from '../src/components/slideShow';
import SignUpForm from '../src/components/signUpForm';

const LandingPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div
      sx={{
        variant: 'containers.page',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <div
        sx={{
          mt: '100px',
        }}
      >
        <SlideShow width={'600px'} />
      </div>
      <SignUpForm handleSubmit={handleSubmit} />
    </div>
  );
};
export default LandingPage;
