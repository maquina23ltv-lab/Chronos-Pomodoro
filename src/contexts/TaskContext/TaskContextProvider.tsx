import { useEffect, useReducer } from "react";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { initialTaskState } from "./initialTaskState";
import { taskReducer } from "./taskReducer";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  // Registra o handler de resposta do worker apenas uma vez
  useEffect(() => {
    const worker = TimerWorkerManager.getInstance();

    worker.onmessage((e) => {
      const countDownSeconds = e.data;
      console.log(countDownSeconds);

      if (countDownSeconds <= 0) {
        console.log("Worker COMPLETED");
        worker.terminate();
      }
    });

    return () => {
      console.log("Worker terminado no cleanup do componente");
      worker.terminate();
    };
  }, []);

  // Reage a mudanças no state para enviar mensagens ao worker
  useEffect(() => {
    const worker = TimerWorkerManager.getInstance();

    if (!state.activeTask) {
      console.log("Worker terminado por falta de activeTask");
      worker.terminate();
      return;
    }

    worker.postMessage(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
