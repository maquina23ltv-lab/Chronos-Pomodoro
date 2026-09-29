let isRunning = false;
let timerId = null;

self.onmessage = function (event) {
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

    if (countDownSeconds === 0) {
      clearTimeout(timerId);
      isRunning = false;
      return;
    }

    timerId = setTimeout(tick, 1000);
  }

  tick();
};
