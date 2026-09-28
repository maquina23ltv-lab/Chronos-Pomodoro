let isRunning = false;
let timerId = null;

self.onmessage = function (event) {
  console.log("Timer worker received message:", event.data);

  if (isRunning) return;
  isRunning = true;

  const state = event.data;
  const { activeTask, secondsRemaining } = state;
  const endDate = activeTask.startDate + secondsRemaining * 1000;

  function tick() {
    const countDownSeconds = Math.max(
      0,
      Math.ceil((endDate - Date.now()) / 1000),
    );

    self.postMessage(countDownSeconds);
    console.log("Timer worker tick:", countDownSeconds);

    if (countDownSeconds === 0) {
      console.log("Tarefa Encerrada");
      clearTimeout(timerId);
      isRunning = false;
      return;
    }

    timerId = setTimeout(tick, 1000);
  }

  tick();
};
