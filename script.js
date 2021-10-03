const btnStart = document.querySelector(".btn-start")
const questionContainer = document.querySelector("#questions-container")
const singleQuestion = document.querySelector("#single-question")

btnStart.addEventListener("click", () => {
  btnStart.classList.add("hide")
  questionContainer.classList.remove("hide")

  allQuestions.forEach((question) => {
    singleQuestion.innerHTML = question.question
  })
})

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
