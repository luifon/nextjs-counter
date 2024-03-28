// contexts/TaskContext.tsx

import TaskModel, { Status } from '@/models/Task.model';
import React, { createContext, useContext, useState } from 'react';

type TaskContextType = {
  tasks: TaskModel[];
  addTask: (task: TaskModel) => void;
  deleteTask: (taskId: number) => void;
  moveTask: (taskId: number, status: Status) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const addTask = (task: TaskModel) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const moveTask = (taskId: number, status: Status) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            status: status,
          };
        }
        return task;
      })
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, moveTask }}>
      {children}
    </TaskContext.Provider>
  );
};
