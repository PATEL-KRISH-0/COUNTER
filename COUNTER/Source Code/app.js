document.querySelector(".cont-Number").innerHTML = 0;
var num = 0;

function Increase() {
    let lol = document.querySelector(".cont-Number");
    num = num + 1;
    lol.innerHTML = num
}

function Decrease() {
    let lol = document.querySelector(".cont-Number");
    num = num - 1;
    lol.innerHTML = num
}

function reset() {
    let lol = document.querySelector(".cont-Number");
    lol.innerHTML = 0
    num = 0
}
