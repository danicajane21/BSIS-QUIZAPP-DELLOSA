type choiceComponentsProps = {
    option: string;
    isSelected: boolean;
    questionNumber: number;
    onSelect: (option: string) => void;
};

function choiceComponents({
    option,
    isSelected,
    questionNumber,
    onSelect,
}: choiceComponentsProps) {
    return (
        <label className={`option ${isSelected ? 'selected' : ''}`}>
            <input
                type="radio"
                name={`question-${questionNumber}`}
                value={option}
                checked={isSelected}
                onChange={(event) => onSelect(event.target.value)}
                />
               <span className="radio-circle"></span>
               <span>{option}</span>
               </label>
    );
}

export default choiceComponents;