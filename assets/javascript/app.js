function check() {

    var question1 = document.trivia.question1.value;
    var question2 = document.trivia.question2.value;
    var question3 = document.trivia.question3.value;
    var question4 = document.trivia.question4.value;

    var correct = 0;

    if (question1 == "Broncos") {
        correct++;
    }
    if (question2 == "Rockies") {
        correct++;
    }
    if (question3 == "Nuggets") {
        correct++;
    }
    if (question4 == "Avalanche") {
        correct++;
    }

    var message = ["Well done!", "Good effort", "Are you a sports fan?"];
    var picture = ["img/Well_done.gif", "img/Good_Effort.gif", "img/Lost.gif"];

    var range;
    if (correct < 1) {
        range = 2;
    }
    if (correct > 0 && correct < 3) {
        range = 1;
    }
    if (correct > 2) {
        range = 0;
    }

    document.getElementById("submit_clicked").style.visibility = "visible";

    document.getElementById("message").innerHTML = message[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = picture[range];

}

var countDownDate = new Time("00:10").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    var now = new Time().getTime();

    // Find the distance between now and the count down date
    // var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
    //     minutes + "m " + seconds + "s ";
    document.getElementById("timer").innerHTML = seconds + "s ";
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Times Up!";
    }
}, 1000);

// Why will this only work if I insert it in the html "head" with a  script in javascript?
// var score;
// score = 0;
// alert("Colorado Team Trivia!")
// var q1;
// q1 = prompt("What is the name of Colorado's NFL team?")
// if (q1 == "Broncos") {
//     score++;
//     alert("Correct!")
// } else {
//     alert("Incorrect")
// };

// var triviaContainer = document.getElementById('trivia');
// var resultsContainer = document.getElementById('results');
// var submitButton = document.getElementById('submit');

// function triviaGame() {}

// function showResults() {}

// triviaGame();

// submitButton.addEventListener('click', showResults);

// var myQuestions = [{
//         question: "What is the name of Colorado's NFL team?",
//         answers: {
//             a: "Donkies",
//             b: "Rockies",
//             c: "Broncos",
//             d: "Nuggets"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "What is the name of Colorado's MLB team?",
//         answers: {
//             a: "Dinger",
//             b: "Rocks",
//             c: "Nuggets",
//             d: "Rockies"
//         },
//         correctAnswer: "d"
//     },
//     {
//         question: "What is the name of Colorado's NBA team?",
//         answers: {
//             a: "Rocky",
//             b: "Rockies",
//             c: "Miners",
//             d: "Nuggets"
//         },
//         correctAnswer: "d"
//     },
//     {
//         question: "What is the name of Colorado's NHL team?",
//         answers: {
//             a: "Avalanche",
//             b: "Rockies",
//             c: "Pioneers",
//             d: "Mammoth"
//         },
//         correctAnswer: "a"
//     },
//     {
//         question: "What is the name of Colorado's MLS team?",
//         answers: {
//             a: "Rockies",
//             b: "Rapids",
//             c: "Avalanche",
//             d: "Mammoth"
//         },
//         correctAnswer: "b"
//     },
//     {
//         question: "What is the name of Colorado's Outdoor Lacrosse team?",
//         answers: {
//             a: "Mammoth",
//             b: "Pioneers",
//             c: "Outlaws",
//             d: "Rapids"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "What is the name of Colorado's Indoor Lacrosse team?",
//         answers: {
//             a: "Mammoth",
//             b: "Pioneers",
//             c: "Outlaws",
//             d: "Rapids"
//         },
//         correctAnswer: "a"
//     },
//     {
//         question: "Who is the mascot for Colorado's NBA team?",
//         answers: {
//             a: "Dinger",
//             b: "Miles",
//             c: "Bernie",
//             d: "Rocky"
//         },
//         correctAnswer: "d"
//     },
//     {
//         question: "Who is the mascot for Colorado's NFL team?",
//         answers: {
//             a: "Dinger",
//             b: "Miles",
//             c: "Bernie",
//             d: "Rocky"
//         },
//         correctAnswer: "b"
//     },
//     {
//         question: "Who is the mascot for Colorado's MLB team?",
//         answers: {
//             a: "Dinger",
//             b: "Miles",
//             c: "Bernie",
//             d: "Rocky"
//         },
//         correctAnswer: "a"
//     },
//     {
//         question: "Who is the mascot for Colorado's NHL team?",
//         answers: {
//             a: "Dinger",
//             b: "Miles",
//             c: "Bernie",
//             d: "Rocky"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "Who was the original mascot for Colorado's NHL team?",
//         answers: {
//             a: "Miles",
//             b: "Bernie",
//             c: "Howler",
//             d: "Rocky"
//         },
//         correctAnswer: "c"
//     },

// ];

// function triviaGame(){

//     var output = [];

//     myQuestions.forEach(
//       (currentQuestion, questionNumber) {


//         var answers = ["Avalanche", "Broncos", "Nuggets", "Rockies", "Rapids", "Mammoth", "Outlaws", "Bernie", "Miles", "Rocky", "Dinger", "Howler"];

//for loop to catch the answers with their questions