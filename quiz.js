const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const submitButton = document.getElementById('submit-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const btns = answerButtonsElement.getElementsByClassName('btn')
const heading = document.getElementById('heading')

let shuffledQuestions, currentQuestionIndex

// Starts Game when clicking
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

// Hiding uneccessary buttons
function startGame() {
  startButton.classList.add('hide')
  submitButton.classList.add('hide')
  answerButtonsElement.classList.remove('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

// Next Question
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

// Shows next question
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

// Reset when next question is asked
function resetState() {
  nextButton.classList.add('hide')
  submitButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

// Allows user to choose an answer
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)

  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    heading.innerText = "Congratulations, you've finished the game!"

    // This should allow user to submit their results
    submitButton.innerText = 'Submit'
    submitButton.classList.remove('hide')

    // Restart Game
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')  
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Where was St. Patrick born?',
    answers: [
      { text: 'Ireland', correct: false },
      { text: 'Britain', correct: true },
      { text: 'Wales', correct: false },
      { text: 'Scotland', correct: false }
    ]
  },
  {
    question: "In the 1600s the first St.Patrick's day celebrated - but where was it held?",
    answers: [
      { text: 'St. Augustine, Florida', correct: true },
      { text: 'Boston', correct: false },
      { text: 'New York City', correct: false },
      { text: 'Dublin', correct: false }
    ]
  },
  {
    question: 'What plant or leaf did St.Patrick use as a metaphor for Christianity?',
    answers: [
      { text: 'Neem', correct: false },
      { text: 'Maple Leaf', correct: false },
      { text: 'Shamrock', correct: true },
      { text: 'Oxalis', correct: false }
    ]
  },
  {
    question: "What was St.Patrick's original name (name at birth)?",
    answers: [
      { text: 'Robert Scitte', correct: false },
      { text: 'Patricae Fulton', correct: false },
      { text: 'Patricious Eastaughffe', correct: false },
      { text: 'Maewyn Succat', correct: true }
    ]
  },
  {
    question: "What kind of snake lived in Ireland during San Patrick time?",
    answers: [
      { text: 'Python', correct: false },
      { text: 'Viper', correct: false },
      { text: 'Anaconda', correct: false },
      { text: 'None', correct: true }
    ]
  },
  {
    question: "What does Patrick mean?",
    answers: [
      { text: 'Young', correct: false },
      { text: 'Brave', correct: false },
      { text: 'Man of wisdom', correct: false },
      { text: 'Nobleman', correct: true }
    ]
  }
]