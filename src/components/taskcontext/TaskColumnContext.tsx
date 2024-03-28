// components/TaskColumn.tsx

import TaskModel from '@/models/Task.model';
import React, { useState } from 'react';
import ConfirmationModal from '../shared/Modal'; // Assuming you have a Modal component
import Task from './TaskContext';

type TaskColumnProps = {
  title: string;
  tasks: TaskModel[];
  targetStatus: string;
};

const TaskColumnContext: React.FC<TaskColumnProps> = ({
  title,
  tasks,
  targetStatus,
}) => {
  return (
    <div className="w-1/3 p-4 border border-gray-300 rounded-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul>
        {tasks
          .filter((task) => task.status === targetStatus)
          .map((task) => (
            <Task key={task.id} task={task} />
          ))}
      </ul>
    </div>
  );
};

export default TaskColumnContext;
