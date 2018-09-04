//Global variables
var intervalId;
var timeCount = 10;
var clockRunning= false;
var questionOne = []

//doument ready function
$(document).ready(function() {

$("#start").on("click", start)
$("#restart").on("click", restart)
$("#stop").on("click", stop)

// start function for the timer
function start(){
setInterval(decrement, 1000);


}
function decrement(){
timeCount--
console.log(timeCount)
$("#timeRemain").text(timeCount);
}

if (timeCount < 0) {
    stop()
}
//stop and restart function
function stop(){
    clearInterval(intervalId)
    alert("you lose");
}
function restart(){
    $("#timeRemain").text(timeCount);
    timeCount=60;
    intervalId;
}
if (timeCount < 1) {

    restart();
}
// start of the click functions for each question
});
