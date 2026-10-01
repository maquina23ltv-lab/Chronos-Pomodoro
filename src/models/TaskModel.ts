import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  title?: string;
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null;
  interruptDate: number | null;
  type: keyof TaskStateModel["config"];
};
