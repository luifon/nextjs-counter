// components/TaskForm.tsx

import TaskModel from '@/models/Task.model';
import React, { useState } from 'react';
import Button from '../shared/Button';

type TaskFormProps = {
  onAddTask: (newTask: TaskModel) => void;
};

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (taskTitle.trim() !== '') {
      const newTask: TaskModel = {
        id: Date.now(), // Generate unique ID for the new task
        title: taskTitle.trim(),
        status: 'todo',
      };
      onAddTask(newTask); // Call the onAddTask function passed down from the parent component
      setTaskTitle('');
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Task</h2>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={taskTitle}
          onChange={handleInputChange}
          placeholder="Enter task title"
          className="flex-1 text-gray-900 appearance-none border border-gray-300 rounded py-2 px-4 mr-2 focus:outline-none focus:border-blue-500"
        />
        <Button onClick={handleSubmit} type="primary" text="Add"></Button>
      </form>
    </div>
  );
};

export default TaskForm;
