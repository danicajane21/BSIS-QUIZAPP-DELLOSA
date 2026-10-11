import { useState } from 'react'
import './Quiz.css'

type Question = {
  idnum: number
  question: string
  options: string[]
  answer: string
}
const quizQuestions: Question[] = [
  {
    idnum: 1,
    question: "Which part is called the 'brain' of the computer?",
    options: ['Monitor', 'CPU'],
    answer: 'CPU',
  },
  {
    idnum: 2,
    question: "What part of the computer shows pictures and what you're doing on screen?",
    options: ['Monitor', 'Keyboard'],
    answer: 'Monitor',
  },
  {
    idnum: 3,
    question: 'What do we use to type letters and numbers?',
    options: ['Mouse', 'Keyboard'],
    answer: 'Keyboard',
  },
  {
    idnum: 4,
    question: 'What part of the computer do we use to click on things?',
    options: ['Mouse', 'Arrow keys'],
    answer: 'Mouse',
  },
  {
    idnum: 5,
    question: 'What part of the computer do we use to store information?',
    options: ['Hard Drive', 'Monitor'],
    answer: 'Hard Drive',
  },
]

function FrontendComponents() {
  const [isQuizApp, setIsQuizApp] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const totalQuestions = quizQuestions.length
  const currentQuizQuestion = quizQuestions[currentQuestion]

  const handleAnswerOptionClick = (selectedOption: string) => {
    setSelectedAnswer(selectedOption)
  }

  const handleNextQuestion = () => {
    if (!selectedAnswer) return

    if (selectedAnswer === currentQuizQuestion.answer) {
      setScore((prevScore) => prevScore + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion)
      setSelectedAnswer(null)
    } else {
      setShowScore(true)
    }
  }

  const resetQuiz = () => {
    setIsQuizApp(false)
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedAnswer(null)
  }

  return (
    <div className="App">
      {!isQuizApp ? (
        <div>
          <h1>Welcome to the Frontend Quiz App</h1>
          <p>You've got this!</p>
          <p>See your score at the end of the quiz!</p>
          <button onClick={() => setIsQuizApp(true)}>Start</button>
        </div>
      ) : showScore ? (
        <div>
          <h1>
            You scored {score} out of {quizQuestions.length}
          </h1>
          <p>Great Job!</p>
          <button onClick={() => setIsQuizApp(false)}>Back to Home</button>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <div className="header">
            <span>Question {currentQuestion + 1}/{totalQuestions}</span>
          </div>
          <h2>{currentQuizQuestion.question}</h2>
          {currentQuizQuestion.options.map((option) => (
            <label
              key={option}
              className="option"
            >
              <input
                type="radio"
                name={`option-${currentQuizQuestion.idnum}`}
                checked={selectedAnswer === option}
                onChange={() => handleAnswerOptionClick(option)}
              />
              <span>{option}</span>
            </label>
          ))}

          <div className="Next">
            <button onClick={handleNextQuestion} disabled={!selectedAnswer}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FrontendComponents
