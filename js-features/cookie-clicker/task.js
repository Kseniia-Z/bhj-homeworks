let cookie = document.getElementById("cookie");
let clickerCounter = document.getElementById("clicker__counter");
cookie.onclick = function() {
    clickerCounter.textContent ++;
    if (clickerCounter.textContent % 2 === 0) {
        cookie.width = 200;
    } else {
        cookie.width = 230;
    }
}