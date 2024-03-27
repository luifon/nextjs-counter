// models/Task.ts

export type Status = 'todo' | 'doing' | 'done';

type TaskModel = {
  id: number;
  title: string;
  status: Status;
};

export default TaskModel;
