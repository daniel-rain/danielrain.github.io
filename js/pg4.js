/////   https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_typewriter


var i = 0;
var txt = 'The japanese earthquakes of 2011 was no coincidence.';
var speed = 50;
// var delayInMilliseconds = 1000;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
}