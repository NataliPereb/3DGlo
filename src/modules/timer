const timer = (deadline) => {
    const timerHours = document.querySelector("#timer-hours");
    const timerMinutes = document.querySelector("#timer-minutes");
    const timerSeconds = document.querySelector("#timer-seconds");

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        //let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        let fHours = hours < 10 ? "0" + hours : hours;
        let fMinutes = minutes < 10 ? "0" + minutes : minutes;
        let fSecond = seconds < 10 ? "0" + seconds : seconds;

        return { timeRemaining, fHours, fMinutes, fSecond };
    };

    const upDateClock = () => {
        let getTime = getTimeRemaining();
        timerHours.textContent = getTime.fHours;
        timerSeconds.textContent = getTime.fSecond;
        timerMinutes.textContent = getTime.fMinutes;

        if (getTime.timeRemaining <= 0) {
            timerHours.textContent = "00";
            timerSeconds.textContent = "00";
            timerMinutes.textContent = "00";
            clearInterval(interval);
        }
    };

    let interval = setInterval(upDateClock, 1000);

    upDateClock();
};

export default timer;
