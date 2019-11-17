//Questions and Answers

const STORE = [


  //Question 1
  {
    question: "While most cats will avoid this thing, Maine Coon cats, known for their gentle and playful personalities, actually tend to love it!",
    choices: [
      'Milk',
      'Water',
      'Snow',
      'Bubbles'
    ],
    correctAnswer:
      'Water'
  },

 //Question 2
 {
  question: "Stewie, an 8-year-old Maine Coon, held the Guinness World Record for world's longest domestic cat. When fully stretched out, Stewie measured how many inches from the tip of his nose to the end of his tail bone?",
  choices: [
    '49',
    '31',
    '120',
    '8'
  ],
  correctAnswer:
    '49'
},

//Question 3
{
  question: "The Maine Coon cat, known for its intelligence, gentle demeanor, and 'dog-like' characteristics, are also known for making what kind of noises:",
  choices: [
    'Chirping',
    'Barking',
    'Mooing',
    'Speaking English'
  ],
  correctAnswer:
    'Chirping'
},

//Question 4
{
  question: "Early in the breed’s development, Maine Coons were often polydactyls, meaning they were born with:",
  choices: [
    'Wings',
    'Extra legs',
    'Two tails',
    'Extra toes'
  ],
  correctAnswer:
    'Extra toes'
},

//Question 5
{
  question: "What was the name of Argus Filch’s Maine Coon cat in the Harry Potter series? ",
  choices: [
    'Mrs. Jones',
    'Mrs. Granger',
    'Mrs. Norris',
    'Mrs. Robinson'
  ],
  correctAnswer:
    'Mrs. Norris'
  }

];



//Variables to store quiz score and question number
let score = 0;
let questionNumber = 0;


//Function to generate the questions
function generateQuestion(index) {
  $(".questionBox").html(STORE[index].question);
  $(".answerChoiceBox").html(STORE[index].choices);
  console.log("test");
}
generateQuestion(0);


/*

TO DO NEXT

//Function to update to the next question number
function updateQuestionNumber() {
  questionNumber++;
  $('.questionNumber').text(questionNumber + 1);
}

updateQuestionNumber();


//Function to update the score number
function updateScore() {
 
}





//Function to set the text value of the "question number" 
//and "score" variables and updates their repective 
//text in the quiz view
function resetStats() {

}


//Function to start the quiz
function startQuiz() {

}

/*

//Function to submit and check answer 
function submitAnswer() {

}


//Function for feedback for correct answer
function correctAnswer() {

}


//Function for feedback for wrong answer
function wrongAnswer() {

}


//Function to generate next question 
function nextQuestion() {

}


//Function to determine the final score and feedback
function finalScore() {

}


//Function to restart the quiz 
function restartQuiz() {

}





//Calls the functions
function handleQuizApp() {
 
}

$(handleQuizApp);

*/
