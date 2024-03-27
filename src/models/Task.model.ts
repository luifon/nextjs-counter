// models/Task.ts

export type Status = 'todo' | 'doing' | 'done';

type Task = {
  id: number;
  title: string;
  status: Status;
};

export default Task;
