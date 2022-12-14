//lets check How much js you know
var readLine = require('readline-sync');
var name = readLine.question("What is your name ?\n");
console.log(`Welcome ${name}
let's check how much you know me!!
.........................................................
Please enter the scores as they are suggested.(consider uppercases and LowerCases)
..........................................................`);

var score = 0;
var fscore = 0;


var questionArray = [
  {
    question: "What is my full name  (Mohd Ameen or Muhammad Ameen)",
    ans: "Muhammad Ameen"
  },
  {
    question: "Where from am I (j&k or Delhi)",
    ans: "j&k"
  },
  {
    question: "What am I (Engineer or Doctor)",
    ans: "Engineer"
  },
  {
    question: "What is my favv Game (Cricket or Football)",
    ans: "Cricket"
  },
  {
    question: "Am i single (yes/no)",
    ans: "yes"
  }
]
function check(question, answer) {
  var userAns = readLine.question(question + "\n");
  if (userAns == answer) {
    console.log("Cool go Ahead");
    score = score + 1;
  }
  else {
    console.log("your answer is wrong");
    if (score <= 0) {
      score = 0;
    }
    else {
      score = score - 1;

    }

  }

  console.log("Your score is " + score);
  console.log("..........................................................")
  fscore = score;
}

for (let ques = 0; ques < questionArray.length; ques++) {
  var currques = questionArray[ques];
  check(currques.question, currques.ans);
}
if (fscore >= 3) {
  console.log("Well you know me!! Congrats")
}
else {
  console.log("\n Sorry \n you don't know me well...")
}
