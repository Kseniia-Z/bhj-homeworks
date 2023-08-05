let cookie = document.getElementById("cookie");
let clickerCounter = document.getElementById("clicker__counter");
cookie.onclick = function () {
    clickerCounter.textContent ++;
    cookie.width = clickerCounter.textContent % 2 === 0 ? 200 : 230;
}