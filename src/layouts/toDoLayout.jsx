/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';

const ToDoLayout = (props) => (
  <div
    sx={{
      textAlign: 'center',
      width: '80vw',
      my: '30px',
      mx: 'auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    }}
  >
    <div sx={{ gridColumn: '1' }}>
      {props.toDoList}
    </div>
    <div sx={{ gridColumn: '2' }}>
      {props.addNewTask}
    </div>
  </div>
);
export default ToDoLayout;
