const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const questionContainerElement = document.getElementById('question-container');
const container = document.querySelector('.container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const btns = answerButtonsElement.getElementsByClassName('btn');
const heading = document.getElementById('heading');
const scoreCounter = document.getElementById('scoreCounter');
const postCardHeading = document.getElementById('postCard-Heading');


let shuffledQuestions, currentQuestionIndex;

// Starts Game when clicking
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

// Hiding uneccessary buttons
function startGame() {
  startButton.classList.add('hide');
  submitButton.classList.add('hide');
  answerButtonsElement.classList.remove('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  score = 0;
  scoreCounter.innerText = null;
  console.clear();
  questionContainerElement.classList.remove('hide');
  heading.innerText = "Welcome to our St.Patrick's themed quiz";
  setNextQuestion();

  if (!postCard.classList.contains('hide')){
      // Reset game
    resetPostCard();
  }
}

// Next Question
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  resetHeading();
}

// Changes heading randomly - for a more fun experience
function resetHeading() {
    headingOptions = [ "Let's see if you get this one right ;)",
                        "You got this one in the bag!",
                        "Easy work, you got this!",
                        "A guess is better than giving no answer",
                        "It might be tempting to Google the answer..."];

    let random = Math.floor(Math.random() * headingOptions.length);
    heading.innerText = headingOptions[random];
}

// Shows next question
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {

    // Create button for each answer
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');

    // If answer is correct, meaning true - set dataset to value 'true' 
    // If value is 'true' - Increase score by 1
    if (answer.correct) {
      button.dataset.correct = answer.correct;
      button.addEventListener('click',()=>{
        if (button.dataset.correct){
            heading.innerText = "Well Done!";
            score ++;
            console.log(score);
            scoreCounter.innerText = `Score: ${score}` ;
            button.classList.add('clicked');
        }
      });
    } 
    // If wrong answer is clicked - change heading
    if (answer.wrong) {
      button.dataset.wrong = answer.wrong;
      button.addEventListener('click',()=>{
        if (button.dataset.wrong){
            heading.innerText = "Wrong!";
        }
      });
    } 
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
});

// Reset when next question is asked
function resetState() {
  nextButton.classList.add('hide');
  submitButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// Allows user to choose an answer
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  const wrong = selectedButton.dataset.wrong;

  // Show correct answer
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    heading.innerText = "Congratulations, you've finished the game!";

    // This should allow user to submit their results
    submitButton.innerText = 'Submit';
    submitButton.classList.remove('hide');

    // Restart Game
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide')  ;
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);

  // Count Correct Answers and add style
  if (correct) {
    element.classList.add('correct');
    element.classList.add('clicked');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

// Shows Image Card based on score
function showCard(){
    let postCardQuote = document.getElementById('postCardQuote');
    let Quotes = [
        ` " Wherever you go and whatever you do, may the luck of the Irish be there with you. " `,
        ` " May misfortune follow you the rest of your life, and never catch up. " `,
        ` " The older the fiddle the sweeter the tune. " `,
    ];
    if(score === 0){
        postCard.classList.remove('hide');
        postCardHeading.classList.remove('hide');
        postCardHeading.innerText = "Unfortunately, you didn't score any points, thank you for trying though! Here's a postcard";
        postCard.classList.add('postCard-1');
        postCardQuote.classList.remove('hide');
    } else if(score === 1){
        postCard.classList.remove('hide');
        postCardHeading.classList.remove('hide');
        postCardHeading.innerText = "Thank you for playing! Here's your postcard";
        postCard.classList.add('postCard-1');
        postCardQuote.classList.remove('hide');
    } else if(score === 2){
        postCard.classList.remove('hide');
        postCardHeading.classList.remove('hide');
        postCardHeading.innerText = "Thank you for playing! Here's your postcard";
        postCard.classList.add('postCard-2');
        postCardQuote.classList.remove('hide');
    } else if(score === 3){
        postCard.classList.remove('hide');
        postCardHeading.classList.remove('hide');
        postCardHeading.innerText = "Thank you for playing! Here's your postcard";
        postCard.classList.add('postCard-3');
        postCardQuote.classList.remove('hide');
    } else if(score === 4){
        postCard.classList.remove('hide');
        postCardHeading.classList.remove('hide');
        postCardHeading.innerText = "Thank you for playing! Here's your postcard";
        postCard.classList.add('postCard-4');
        postCardQuote.classList.remove('hide');
    } else if(score === 5){
        postCard.classList.remove('hide');
        postCardHeading.classList.remove('hide');
        postCardHeading.innerText = "Thank you for playing! Here's your postcard";
        postCard.classList.add('postCard-5');
        postCardQuote.classList.remove('hide');
    } else {
        postCard.classList.remove('hide');
        postCardHeading.classList.remove('hide');
        postCardHeading.innerText = "Thank you for playing! Here's your postcard";
        postCard.classList.add('postCard-6');
        postCardQuote.classList.remove('hide');
    }
    //Reveal Quote
    let random = Math.floor(Math.random() * Quotes.length);
    postCardQuote.innerText = Quotes[random];
    container.classList.add('hide');
}   

// When user submits - page expands & shows postcard
submitButton.addEventListener('click',showCard);

// Reset PostCards
function resetPostCard(){
    postCard.classList.add('hide');
    postCardHeading.classList.add('hide');
    localStorage.clear();
    alert("Restarting...");
}

// Questions
const questions = [
  {
    question: 'Where was St. Patrick born?',
    answers: [
      { text: 'Ireland', correct: false, wrong: true },
      { text: 'Britain', correct: true, wrong: false },
      { text: 'Wales', correct: false, wrong: true },
      { text: 'Scotland', correct: false, wrong: true }
    ]
  },
  {
    question: "In the 1600s the first St.Patrick's day celebrated - but where was it held?",
    answers: [
      { text: 'St. Augustine, Florida', correct: true, wrong: false },
      { text: 'Boston', correct: false, wrong: true },
      { text: 'New York City', correct: false, wrong: true },
      { text: 'Dublin', correct: false, wrong: true }
    ]
  },
  {
    question: 'What plant or leaf did St.Patrick use as a metaphor for Christianity?',
    answers: [
      { text: 'Neem', correct: false, wrong: true },
      { text: 'Maple Leaf', correct: false, wrong: true },
      { text: 'Shamrock', correct: true, wrong: false },
      { text: 'Oxalis', correct: false, wrong: true }
    ]
  },
  {
    question: "What was St.Patrick's original name (name at birth)?",
    answers: [
      { text: 'Robert Scitte', correct: false, wrong: true },
      { text: 'Patricae Fulton', correct: false, wrong: true },
      { text: 'Patricious Eastaughffe', correct: false, wrong: true },
      { text: 'Maewyn Succat', correct: true, wrong: false }
    ]
  },
  {
    question: "What kind of snake lived in Ireland during St.Patrick's time?",
    answers: [
      { text: 'Python', correct: false, wrong: true },
      { text: 'Viper', correct: false, wrong: true },
      { text: 'Anaconda', correct: false, wrong: true },
      { text: 'None', correct: true, wrong: false }
    ]
  },
  {
    question: "What does Patrick mean?",
    answers: [
      { text: 'Young', correct: false, wrong: true },
      { text: 'Brave', correct: false, wrong: true },
      { text: 'Man of wisdom', correct: false, wrong: true },
      { text: 'Nobleman', correct: true, wrong: false }
    ]
  }
];
}