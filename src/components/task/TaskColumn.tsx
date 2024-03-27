// components/TaskColumn.tsx

import Task, { Status } from '@/models/Task.model';
import React, { useState } from 'react';
import Button from '../shared/Button';
import TaskComponent from './Task';
import ConfirmationModal from '../shared/Modal'; // Assuming you have a Modal component

type TaskColumnProps = {
  title: string;
  tasks: Task[];
  onDeleteTask: (taskId: number) => void;
  onMoveTask: (taskId: number, newStatus: Status) => void;
  targetStatus: string;
};

const TaskColumn: React.FC<TaskColumnProps> = ({
  title,
  tasks,
  onDeleteTask,
  onMoveTask,
  targetStatus,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  const handleDelete = (taskId: number) => {
    setSelectedTaskId(taskId);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedTaskId !== null) {
      onDeleteTask(selectedTaskId);
      setSelectedTaskId(null);
    }
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setSelectedTaskId(null);
    setShowDeleteModal(false);
  };

  const handleMove = (taskId: number, newStatus: Status) => {
    onMoveTask(taskId, newStatus);
  };

  return (
    <div className="w-1/3 p-4 border border-gray-300 rounded-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul>
        {tasks
          .filter((task) => task.status === targetStatus)
          .map((task) => (
            <TaskComponent
              key={task.id}
              task={task}
              onDelete={() => handleDelete(task.id)}
              onMove={(newStatus: Status) => handleMove(task.id, newStatus)}
            />
          ))}
      </ul>
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
    </div>
  );
};

export default TaskColumn;
