let running = false;
let intervalId;
let startTime;

function startTimer() {
    if (!running) {
        startTime = new Date();
        intervalId = setInterval(function () {
            let now = new Date();
            let elapsedTime = (now - startTime) / 1000;

            let hours = Math.floor(elapsedTime / 3600);
            let minutes = Math.floor((elapsedTime % 3600) / 60);
            let seconds = Math.floor(elapsedTime % 60);
            let milliseconds = Math.floor((elapsedTime * 1000) % 1000);

            let time =
                pad(hours) +
                ":" +
                pad(minutes) +
                ":" +
                pad(seconds) +
                "." +
                pad(milliseconds, 3);

            document.querySelector("#timer").innerHTML = time;
        }, 50);
        running = true;
    }
}

function stopTimer() {
    if (running) {
        clearInterval(intervalId);
        running = false;
    }
}

function resetTimer() {
    stopTimer();
    document.querySelector("#timer").innerHTML = "00:00:00.000";
}

function pad(value, size = 2) {
    let s = String(value);
    while (s.length < size) {
        s = "0" + s;
    }
    return s;
}