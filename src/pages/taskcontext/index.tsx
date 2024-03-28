// pages/index.tsx

import TaskFormContext from '@/components/taskcontext/TaskFormContext';
import TaskListContext from '@/components/taskcontext/TaskListContext';
import { TaskProvider } from '@/context/TaskContext';
import TaskModel, { Status } from '@/models/Task.model';
import React from 'react';

const TasksContext: React.FC = () => {
  const [tasks, setTasks] = React.useState<TaskModel[]>([]);

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
        <TaskFormContext />
        <TaskListContext />
      </main>
    </div>
  );
};

const TasksPage: React.FC = () => {
  return (
    <TaskProvider>
      <TasksContext />
    </TaskProvider>
  );
};

export default TasksPage;
