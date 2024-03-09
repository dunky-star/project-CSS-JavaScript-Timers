'use strict';

let textRain = document.querySelector('.text--rain');
let htmlSpans = textRain.innerText
  .split('')
  .map((letter, i) => {
    return `<span style= "animation-duration: ${
      Math.random() * 5
    }s; filter: hue-rotate(${i * 50}deg">${letter}</span>`;
  })
  .join('');

textRain.innerHTML = htmlSpans;

//hide greeting message
function hideMessage() {
  document.getElementsByTagName('h3')[0].style.display = 'none';
  document.getElementsByClassName('lightbar')[0].style.display = 'none';
}
setTimeout(hideMessage, 10000);

//hide raining
function hideRaining() {
  document.getElementsByClassName('rain')[0].style.backgroundImage = "url('')";
}
setTimeout(hideRaining, 12000);

//hide raining alert message
function hideAlertMessage() {
  document.getElementsByTagName('h2')[0].style.display = 'none';
}
setTimeout(hideAlertMessage, 13000);

//show raining
function showRaining() {
  document.getElementsByClassName('rain')[0].style.backgroundImage =
    "url('./images/rain.png')";
}
setTimeout(showRaining, 17000);

//show raining alert message
function showAlertMessage() {
  document.getElementsByTagName('h2')[0].style.display = 'block';
}
setTimeout(showAlertMessage, 18000);

setTimeout(hideRaining, 22000);
setTimeout(hideAlertMessage, 23000);
setTimeout(showRaining, 27000);
setTimeout(showAlertMessage, 28000);

setTimeout(showRaining, 35000);
setTimeout(showAlertMessage, 36000);
