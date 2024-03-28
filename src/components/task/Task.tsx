// components/Task.tsx

import React from 'react';
import TaskModel, { Status } from '@/models/Task.model';
import Button from '../shared/Button';

type TaskProps = {
  task: TaskModel;
  onDelete: () => void;
  onMove: (newStatus: Status) => void;
};

const TaskComponent: React.FC<TaskProps> = ({ task, onDelete, onMove }) => {
  const handleDelete = () => {
    onDelete();
  };

  const handleMove = (newStatus: Status) => {
    onMove(newStatus);
  };

  return (
    <li className="border-b border-slate-200 py-2 flex justify-between items-center">
      <span>{task.title}</span>
      <div className="space-x-2">
        {task.status === 'todo' && (
          <Button
            onClick={() => handleMove('doing')}
            type="primary"
            text="Start"
          />
        )}
        {task.status === 'doing' && (
          <>
            <Button
              onClick={() => handleMove('done')}
              type="success"
              text="Complete"
            />
            <Button
              onClick={() => handleMove('todo')}
              type="secondary"
              text="Undo"
            />
          </>
        )}
        {task.status === 'done' && (
          <Button
            onClick={() => handleMove('doing')}
            type="secondary"
            text="Undo"
          />
        )}
        <Button onClick={() => handleDelete()} type="warn" text="Delete" />
      </div>
    </li>
  );
};

export default TaskComponent;
