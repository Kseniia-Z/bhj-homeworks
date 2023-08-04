let timer = document.getElementById("timer");
const TimerInterval = setInterval(() => {
    if(timer.textContent > 0) {
        timer.textContent --
    } else {
        alert("Вы победили в конкурсе");
    }
},1000);