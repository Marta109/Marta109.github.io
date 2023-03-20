function timer(id, dedline) {
  //! Timer

  let getTimeRemaining = function (endTime) {
    const t = Date.parse(endTime) - new Date(),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  let addZeroForTimer = function (date) {
    if (date >= 0 && date < 10) {
      return `0${date}`;
    } else {
      return date;
    }
  };

  let setClock = function (selector, endTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endTime);

      if (t.total > 0) {
        days.textContent = addZeroForTimer(t.days);
        hours.textContent = addZeroForTimer(t.hours);
        minutes.textContent = addZeroForTimer(t.minutes);
        seconds.textContent = addZeroForTimer(t.seconds);
      } else {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  };

  setClock(id, dedline);
}

export default timer;
