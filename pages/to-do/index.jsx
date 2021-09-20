/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@theme-ui/core';
import ToDoLayout from '../../src/layouts/toDoLayout';
import ToDoList from '../../src/components/toDoList';
import AddNewTask from '../../src/components/addNewTask';

const ToDoApp = ({ data }) => {
  return (
    <ToDoLayout
      toDoList={<ToDoList data={data} />}
      addNewTask={<AddNewTask />}
    />
  );
};
export default ToDoApp;

export async function getStaticProps() {
  const res = await fetch(
    'http://localhost:3000/api/tasks'
  );
  const data = await res.json();
  return {
    props: { data },
  };
}
