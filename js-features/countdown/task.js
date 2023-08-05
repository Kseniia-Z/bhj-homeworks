let timer = document.getElementById("timer");
const timerInterval = setInterval(() => {
    if(timer.textContent > 0) {
        timer.textContent --;
    } else {
        alert("Вы победили в конкурсе");
        clearInterval(timerInterval);
    }
},1000);