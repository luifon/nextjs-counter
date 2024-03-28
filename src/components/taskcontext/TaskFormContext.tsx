// components/TaskForm.tsx

import { useTaskContext } from '@/context/TaskContext';
import TaskModel from '@/models/Task.model';
import React, { useState } from 'react';
import Button from '../shared/Button';

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useTaskContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: TaskModel = {
      id: Math.floor(Math.random() * 1000), // Generate a random ID (for demo purposes)
      title,
      status: 'todo',
    };
    addTask(newTask);
    setTitle('');
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Task</h2>

      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className="flex-1 text-gray-900 appearance-none border border-gray-300 rounded py-2 px-4 mr-2 focus:outline-none focus:border-blue-500"
        />
        <Button onClick={handleSubmit} type="primary" text="Add"></Button>
      </form>
    </div>
  );
};

export default TaskForm;
