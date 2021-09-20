/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';
import {
  Box,
  Label,
  Input,
  Button,
} from 'theme-ui';

const handleSubmit = (event) => {
  event.preventDefault();
};
const AddNewTask = () => {
  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{
        mx: 'auto',
        width: '80%',
        variant: 'containers.card',
        display: 'flex',
        flexFlow: 'column wrap',
        bg: 'muted',
      }}
    >
      <h1>
        Add new task to your
        <br />
        TO DO LIST
      </h1>
      <Input
        type="text"
        placeholder="Task name..."
      />
      <Button
        sx={{
          variant: 'styles.btnEdit',
          width: '40%',
          mx: 'auto',
          my: '30px',
          fontSize: 3,
        }}
      >
        ADD TASK
      </Button>
    </Box>
  );
};
export default AddNewTask;
