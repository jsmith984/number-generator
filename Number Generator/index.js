const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min = 1;
const max = 10;
let randomNum1;


myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
}
