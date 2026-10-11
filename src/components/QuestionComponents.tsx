import ChoiceComponents from './choiceComponents.tsx'

type Question = {
  idnum: number
  question: string
  options: string[]
  answer: string
}

type QuestionProps = {
  question: Question
  questionNumber: number
  onAnswerSelected: (selectedOption: string) => void
  selectedAnswer: string | null
}

function QuestionComponent({
  question,
  questionNumber,
  onAnswerSelected,
  selectedAnswer,
}: QuestionProps) {
  return (
    <div className="question-container">
      <p className="question-text">{question.question}</p>
      <div className="options-container">
        {question.options.map((option) => (
          <ChoiceComponents
            key={option}
            option={option}
            questionNumber={questionNumber}
            isSelected={selectedAnswer === option}
            onSelect={onAnswerSelected}
          />
        ))}
      </div>

      <button
      className="next-button"
      onClick={() => {
        if (selectedAnswer) {
          onAnswerSelected(selectedAnswer)
        }
      }}
    >
      Next
    </button>
    </div>
  ) 
}

export default QuestionComponent