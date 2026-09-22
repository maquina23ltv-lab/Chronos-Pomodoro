import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  starDate: number;
  completeDate: number | null;
  interruptDate: number | null;
  type: keyof TaskStateModel["config"];
};
