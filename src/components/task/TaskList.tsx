// components/TaskList.tsx

import TaskModel, { Status } from '@/models/Task.model';
import React from 'react';
import TaskColumn from './TaskColumn';

type TaskListProps = {
  tasks: TaskModel[];
  onDeleteTask: (taskId: number) => void;
  onMoveTask: (taskId: number, newStatus: Status) => void;
};

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onDeleteTask,
  onMoveTask,
}) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <div className="flex justify-between gap-[20px]">
        <TaskColumn
          title="Todo"
          tasks={tasks}
          onDeleteTask={onDeleteTask}
          onMoveTask={onMoveTask}
          targetStatus="todo"
        />
        <TaskColumn
          title="Doing"
          tasks={tasks}
          onDeleteTask={onDeleteTask}
          onMoveTask={onMoveTask}
          targetStatus="doing"
        />
        <TaskColumn
          title="Done"
          tasks={tasks}
          onDeleteTask={onDeleteTask}
          onMoveTask={onMoveTask}
          targetStatus="done"
        />
      </div>
    </div>
  );
};

export default TaskList;
