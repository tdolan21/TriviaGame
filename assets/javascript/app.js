//Global variables
var intervalId;
var timeCount = 10;
var clockRunning= false;
var correctAnswers = [];

// I know these seem out of order but jS starts with 0!

var questions = {
    question: "when was javascript created?",
    choices: ["1995","2002", "1924"],
    answer: ["1995"],
}
var questionOne = {
    question: "what is the main benefit from using jQuery?",
    choices: ["DOM Manipulation","stylying your page", "jQuery isn't real"],
    answer: ["DOM Manipulation"],
}
var questionTwo = {
question: "if you  want to use a library what technology would you most likely use?",
choices: ["HTML","Bootstrap","CSS","None of the above"],
answer: ["Bootstrap"]

}
var questionThree = {
    question: "what do human need to read AJAX more easily?",
    choices: ["JSON", "a computer", "eyes","glasses"],
    answer: ["JSON"],
}

//doument ready function
$(document).ready(function() {
    // question one
$("#questionOne").text(questions.question);
$("#choices").text(questions.choices);
//question two
$("#questionTwo").text(questionOne.question)
$("#choices2").text(questionOne.choices)
//question 3
$("#questionThree").text(questionTwo.question);
$("#answer3").text(questionTwo.choices);
//question 4
$("#questionFour").text(questionThree.question);
$("#answer4").text(questionThree.choices);
//  butto funtctions
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

if (timeCount === 0) {
    stop();
}
//stop and restart function
function stop(){
    timeCount=null;
    clearInterval(timeCount)
    alert("you lose");
}
function restart(){
    $("#timeRemain").text(timeCount);
    timeCount=60;
    clearInterval(intervalId)
    intervalId;
}
if (timeCount === -1) {

    restart();
}
//  function deployQuestions(){
//      $("#answerContent1").text(`
//     <form>
    
//     <input type="radio" name="same" checked="checked">
//     "1995"
//     <input type="radio" name="same" checked="checked">
//     "2002"
//     <input type="radio" name="same" checked="checked">
//     "what is js"
//     </form>
//     `)
// }
// start of the click functions for each question

});
