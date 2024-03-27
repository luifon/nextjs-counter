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
    <li className="border-b border-gray-200 py-2 flex justify-between items-center">
      <span>{task.title}</span>
      <div className="space-x-2">
        {task.status === 'todo' && (
          <Button
            onClick={() => handleMove('doing')}
            color="blue"
            hoverColor="blue"
            text="Start"
          />
        )}
        {task.status === 'doing' && (
          <>
            <Button
              onClick={() => handleMove('done')}
              color="green"
              hoverColor="green"
              text="Complete"
            />
            <Button
              onClick={() => handleMove('todo')}
              color="gray"
              hoverColor="green"
              text="Undo"
            />
          </>
        )}
        {task.status === 'done' && (
          <Button
            onClick={() => handleMove('doing')}
            color="gray"
            hoverColor="green"
            text="Undo"
          />
        )}
        <Button
          onClick={() => handleDelete()}
          color="red"
          hoverColor="red"
          text="Delete"
        />
      </div>
    </li>
  );
};

export default TaskComponent;
