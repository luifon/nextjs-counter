'use client'; // This is a client component 👈🏽
// pages/index.tsx

import React, { useState } from 'react';
import Head from 'next/head';
import TaskList from '../../components/task/TaskList';
import TaskForm from '../../components/task/TaskForm';
import TaskModel, { Status } from '@/models/Task.model';

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const handleAddTask = (newTask: TaskModel) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleMoveTask = (taskId: number, newStatus: Status) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      });
    });
  };

  return (
    <div className="container mx-auto">
      <main className="p-8">
        <TaskForm onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onMoveTask={handleMoveTask}
        />
      </main>
    </div>
  );
};

export default Tasks;
