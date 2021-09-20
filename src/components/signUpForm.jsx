/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';
import {
  Label,
  Box,
  Input,
  Button,
} from 'theme-ui';

const SignUpForm = ({ handleSubmit }) => (
  <Box
    as="form"
    onSubmit={handleSubmit}
    sx={{
      variant: 'containers.growCard',
      display: 'flex',
      flexDirection: 'column',
      mt: '40px',
      p: '20px',
    }}
  >
    <h1
      sx={{
        mb: 1,
        mt: 2,
        textAlign: 'center',
      }}
    >
      You don&apos;t have account yet?
      <br />
      SIGN UP NOW
    </h1>
    <Label htmlFor="firstName">First Name:</Label>
    <Input
      type="text"
      name="firstName"
      placeholder="Please enter your first name"
      required
      sx={{
        color: 'text',
        mb: 2,
        mt: 1,
      }}
    ></Input>
    <Label htmlFor="lastName">Last Name:</Label>
    <Input
      type="text"
      name="lastName"
      placeholder="Please enter your last name"
      required
      sx={{
        color: 'text',
        mb: 2,
        mt: 1,
      }}
    ></Input>
    <Label htmlFor="email">Email:</Label>
    <Input
      type="email"
      name="email"
      placeholder="Please enter your email address"
      required
      sx={{
        color: 'text',
        mb: 4,
        mt: 1,
      }}
    ></Input>
    <Button sx={{ mt: 3 }}>Submit</Button>
  </Box>
);

export default SignUpForm;
