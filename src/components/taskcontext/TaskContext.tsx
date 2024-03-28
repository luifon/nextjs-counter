// components/Task.tsx

import React, { useState } from 'react';
import TaskModel, { Status } from '@/models/Task.model';
import Button from '../shared/Button';
import { useTaskContext } from '@/context/TaskContext';
import ConfirmationModal from '../shared/Modal';

type TaskProps = {
  task: TaskModel;
};

const Task: React.FC<TaskProps> = ({ task }) => {
  const { deleteTask, moveTask } = useTaskContext();

  const handleMove = (newStatus: Status) => {
    moveTask(task.id, newStatus);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  const handleDelete = () => {
    setSelectedTaskId(task.id);
    setShowDeleteModal(true);
    deleteTask(task.id);
  };

  const confirmDelete = () => {
    if (selectedTaskId !== null) {
      handleDelete();
      setSelectedTaskId(null);
    }
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setSelectedTaskId(null);
    setShowDeleteModal(false);
  };

  return (
    <li className="border-b border-gray-200 py-2 flex justify-between items-center">
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
        <Button onClick={handleDelete} type="warn" text="Delete" />
      </div>

      <ConfirmationModal
        isOpen={showDeleteModal}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
      >
        <div>
          <h2 className="text-gray-900">Confirm Deletion</h2>
          <p className="text-gray-900">
            Are you sure you want to delete this task?
          </p>
        </div>
      </ConfirmationModal>
    </li>
  );
};

export default Task;
