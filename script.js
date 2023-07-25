let val1 = document.getElementById("value1");
let val2 = document.getElementById("value2");
let val3 = document.getElementById("value3");

// let initialInterval = 300;
// let interval = initialInterval;

let values = ["🤑", "😁", "👍", "👎", "😭", "💥"];
let doChange = false;
function randomValue() {
  return "" + values[parseInt(Math.random() * values.length)];
}
let start = false;
let circle = document.getElementById("circle");
circle.style.transform = "translateY(-120px)";
let rect = document.getElementById("rect");
rect.style.transform = "translateY(-120px)";
const element = document.querySelectorAll(".slot > .value");
let changeValues;

function listener() {
  circle.style.animationIterationCount = "0";
  rect.style.animationIterationCount = "0";
}
// rect.addEventListener("animationend", listener, false);
let yyy = null;
circle.onclick = function () {
  start = !start;
  if (start) {
    // interval = initialInterval;
    circle.style.animationIterationCount = "infinite";
    rect.style.animationIterationCount = "infinite";

    lyyy = setTimeout(() => {
      listener();
    }, 800);

    for (let i = 0; i < element.length; i++) {
      element[i].style.animationDuration = 0.1 * (element.length - i) + "s";
      element[i].style.animationIterationCount = "infinite";
    }
    changeValues1 = setInterval(() => {
      val1.innerText = randomValue();
    }, 300);
    changeValues2 = setInterval(() => {
      val2.innerText = randomValue();
    }, 200);
    changeValues3 = setInterval(() => {
      val3.innerText = randomValue();
    }, 100);
  } else {
    for (let i = 0; i < element.length; i++) {
      element[i].style.animationIterationCount = 0;
    }
    clearTimeout(yyy);
    clearInterval(changeValues1);
    clearInterval(changeValues2);
    clearInterval(changeValues3);
  }
};
