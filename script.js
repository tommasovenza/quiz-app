const btnStart = document.querySelector(".btn-start")
const questionContainer = document.querySelector("#questions-container")
const singleQuestion = document.querySelector("#single-question")
const answerContainer = document.querySelector("#answers-container .flex")

btnStart.addEventListener("click", () => {
  btnStart.classList.add("hide")
  questionContainer.classList.remove("hide")

  const currentQuestion = randomQuestion(allQuestions)

  // printing Title
  singleQuestion.innerHTML = currentQuestion.question

  const answers = currentQuestion.answer

  answers.forEach((answer) => {
    const newAnswer = document.createElement("button")
    newAnswer.classList.add("btn")
    newAnswer.innerHTML = answer.text
    // console.log(newAnswer)
    answerContainer.appendChild(newAnswer)
  })
})

function randomQuestion(items) {
  const randomItem = items[Math.floor(Math.random() * items.length)]
  return randomItem
}

// all the questions wrapped inside an array
const allQuestions = [
  {
    question: "Quanto fa 2 x 2?",
    answer: [
      { text: "4", correct: true },
      { text: "22", correct: false },
    ],
  },
  {
    question: "Chi era il cantante dei Led Zeppelin?",
    answer: [
      { text: "Robert Plant", correct: true },
      { text: "Jimmy Page", correct: false },
    ],
  },
]
