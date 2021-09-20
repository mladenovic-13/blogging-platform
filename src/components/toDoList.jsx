/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';
import { useState } from 'react';
import { Button } from 'theme-ui';

const ToDoList = ({ data }) => {
  const [tasks, setTasks] = useState(data.tasks);

  const handleChange = (event, index) => {};

  return (
    <form
      sx={{
        width: '80%',
        display: 'flex',
        flexFlow: 'column',
      }}
    >
      {data.tasks.map((task, index) => (
        <div
          key={task.id}
          sx={{
            variant: 'containers.card',
            display: 'flex',
            flexFlow: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '50px',
            bg: 'muted',
            mb: 3,
          }}
        >
          <div
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <input
              type="checkbox"
              defaultChecked={tasks[index].done}
              onChange={(event) =>
                handleChange(event, index)
              }
              sx={{ variant: 'styles.checkbox' }}
            />
            <h2>{task.title}</h2>
          </div>
          <Button
            sx={{
              variant: 'styles.btnDanger',
              p: 1,
              width: '70px',
            }}
          >
            Delete
          </Button>
        </div>
      ))}
    </form>
  );
};
export default ToDoList;
