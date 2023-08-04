let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

const getHole = index => document.getElementById(`hole${index}`)

function clear() {
    dead.textContent = 0;
    lost.textContent = 0;
}

for (let i = 1; i <= 9 ; i ++) {
    getHole(i).onclick = function () {
        if (dead.textContent == 10) {
            alert("Победа!");
            clear();
        } else if (lost.textContent == 5) {
            alert("Вы проиграли!");
            clear();
        } else {
            if (getHole(i).className.includes("hole_has-mole")) {
                dead.textContent ++;
            } else {
                lost.textContent ++;
            }
        }
    }
}