// components/TaskListContext.tsx

import { useTaskContext } from '@/context/TaskContext';
import React from 'react';
import TaskColumn from '../task/TaskColumn';
import TaskColumnContext from './TaskColumnContext';

const TaskListContext: React.FC = () => {
  const { tasks } = useTaskContext();

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <div className="flex justify-between gap-[20px]">
        <TaskColumnContext
          title="Todo"
          targetStatus="todo"
          tasks={tasks.filter((task) => task.status === 'todo')}
        />
        <TaskColumnContext
          title="Doing"
          targetStatus="doing"
          tasks={tasks.filter((task) => task.status === 'doing')}
        />
        <TaskColumnContext
          title="Done"
          targetStatus="done"
          tasks={tasks.filter((task) => task.status === 'done')}
        />
      </div>
    </div>
  );
};

export default TaskListContext;
