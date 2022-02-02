
// CUENTA REGRESIVA
const getRemainTime = (deadline) => {
    let now = Date.parse(new Date());
    let remainTime = (Date.parse(new Date(deadline)) - now) / 1000;
    let remainSecons = ("0" + Math.floor(remainTime % 60)).slice(-2);
    let remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2);
    let remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2);
    let remainDays = Math.floor(remainTime / (3600 * 24));
    return {
        remainTime,
        remainSecons,
        remainMinutes,
        remainHours,
        remainDays,
    };
};
const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);
    const timerUpdate = setInterval(() => {
        let t = getRemainTime(deadline);
        el.innerHTML = `${t.remainDays} Dias <br> ${t.remainHours} Horas <br>${t.remainMinutes} Minutos <br>${t.remainSecons} Segundos`;
        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }
    }, 1000);
};
countdown("Thu feb 11 2022 22:53:30 GMT-0300", "clock");

// FIN DE CUENTA REGRESIVA