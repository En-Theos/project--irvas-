export default function timer(deadline, idTimer) {
    const timer = document.querySelector(idTimer);
    const boxDays = timer.querySelector("#days"),
        boxHours = timer.querySelector("#hours"),
        boxMinutes = timer.querySelector("#minutes"),
        boxSeconds = timer.querySelector("#seconds");

    const repeatCode = setInterval(setDataForTimer, 1000);
    function setDataForTimer() {
        const remainderTime = Date.parse(deadline) - new Date();
        const remainderDays = Math.round(remainderTime / (1000 * 60 * 60 * 24)),
            remainderHours = Math.round(remainderTime / (1000 * 60 * 60) % 24),
            remainderMinutes = Math.round(remainderTime / (1000 * 60) % 60),
            remainderSeconds = Math.round(remainderTime / 1000 % 60);

        boxDays.textContent = getZero(remainderDays);
        boxHours.textContent = getZero(remainderHours);
        boxMinutes.textContent = getZero(remainderMinutes);
        boxSeconds.textContent = getZero(remainderSeconds);

        if (remainderTime <= 0) {
            clearInterval(repeatCode);
        }
    }
    setDataForTimer();
}

function getZero(number) {
    if (number < 10 && number > 0) {
        return `0${number}`;
    } else if (number < 0) {
        return "00";
    } else {
        return number;
    }
}