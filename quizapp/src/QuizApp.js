import React, { useState } from "react";

function QuizApp() {
  const questions = [
    {
      questionText: " What is ReactJS?",
      answerOptions: [
        { answerText: "Server-side framework", isCorrect: false },
        { answerText: "user inteface framework", isCorrect: true },
        { answerText: "Both A and B", isCorrect: false },
        { answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionText: " What is the purpose of React Components?",
      answerOptions: [
        { answerText: "Managing database connections", isCorrect: false },
        { answerText: "Handling server-side logic", isCorrect: false },
        {
          answerText: "Building user interfaces into reusable pieces",
          isCorrect: true,
        },
        { answerText: "Controlling browser settings", isCorrect: false },
      ],
    },
    {
      questionText: "How is data passed between React components?",
      answerOptions: [
        { answerText: "Using global variables", isCorrect: false },
        { answerText: "Through function parameters", isCorrect: false },
        { answerText: "Via HTTP requests", isCorrect: false },
        { answerText: "Using props ", isCorrect: true },
      ],
    },
    {
      questionText: " Who created React.js?",
      answerOptions: [
        { answerText: "Jordan Mike", isCorrect: false },
        { answerText: "Jordan Walke", isCorrect: true },
        { answerText: "Time lee", isCorrect: false },
        { answerText: "Jordan lee", isCorrect: false },
      ],
    },
    {
      questionText: " In which language is React.js written?",
      answerOptions: [
        { answerText: "Python", isCorrect: false },
        { answerText: "JavaScript", isCorrect: true },
        { answerText: "Java", isCorrect: false },
        { answerText: "PHP", isCorrect: false },
      ],
    },
    {
      questionText: " What is Babel?",
      answerOptions: [
        { answerText: "JavaScript compiler", isCorrect: true },
        { answerText: "JavaScript interpreter", isCorrect: false },
        { answerText: "JavaScript transpiler", isCorrect: false },
        { answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionText: " What is the purpose of the useState hook in React?",
      answerOptions: [
        { answerText: "Fetching data from an API", isCorrect: false },
        {
          answerText: "Managing component state in functional components",
          isCorrect: true,
        },
        { answerText: "Defining global variables", isCorrect: false },
        { answerText: "Creating event listeners", isCorrect: false },
      ],
    },
    {
      questionText: " What is JSX in React?",
      answerOptions: [
        { answerText: "A styling language", isCorrect: false },
        { answerText: "A syntax extension for JavaScript ", isCorrect: true },
        { answerText: "A state management library", isCorrect: false },
        { answerText: " A templating engine", isCorrect: false },
      ],
    },
    {
      questionText: "  How can you conditionally render content in React?",
      answerOptions: [
        { answerText: "Using the if-else statement", isCorrect: false },
        { answerText: "With the renderIf function", isCorrect: false },
        { answerText: "Using the ternary operator (? :) ", isCorrect: true },
        { answerText: "Through the switch statement", isCorrect: false },
      ],
    },
    {
      questionText:
        " What is the purpose of the onClick event handler in React?",
      answerOptions: [
        { answerText: "Handling keyboard events", isCorrect: false },
        {
          answerText: "Triggering an action when a button is clicked",
          isCorrect: true,
        },
        { answerText: "Managing state changes", isCorrect: false },
        { answerText: "Controlling page navigation", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // State for the selected option of the current question
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null); // Reset selected option when moving to the next question
    }
  };

  const handlePreviousButtonClick = () => {
    const previousQuestion = currentQuestion - 1;
    if (previousQuestion >= 0) {
      setCurrentQuestion(previousQuestion);
      // setSelectedOption(null); // Reset selected option when moving to the previous question
    }
  };

  const handleStartQuiz = () => {
    setQuizStarted(true); // Start the quiz
  };

  const handleFinishQuiz = () => {
    setQuizCompleted(true); // Mark the quiz as completed
  };

  if (!quizStarted) {
    return (
      <div className="welcome-page">
        <h1>Welcome to the React</h1>
        <input
          onClick={handleStartQuiz}
          type="submit"
          value="Start Quiz"
          className="button2"
        ></input>
      </div>
    );
  }
  if (quizCompleted) {
    return (
      <div className="final">
        <h1>Thank You</h1>
        <h2>Your final score is: {score}</h2>
      </div>
    );
  }
  return (
    <div className="quiz">
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="question-text">
          <section class="common">
            {questions[currentQuestion].questionText}
          </section>
        </div>
      </div>
      <div className="answer-section">
        <section class="common">
          {questions[currentQuestion].answerOptions.map(
            (answerOption, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`option${index}`}
                  name={`answer${currentQuestion}`}
                  value={answerOption.isCorrect}
                  checked={selectedOption === index} // Check if the current option is selected
                  onChange={() => {
                    setSelectedOption(index); // Set the selected option
                    handleAnswerButtonClick(answerOption.isCorrect);
                  }}
                />
                <label htmlFor={`option${index}`}>
                  {answerOption.answerText}
                </label>
              </div>
            )
          )}
        </section>
      </div>
      <div className="navigation-buttons">
        <input
          onClick={handlePreviousButtonClick}
          disabled={currentQuestion === 0}
          type="submit"
          value="previuos"
          className="button1"
        ></input>
        {currentQuestion === questions.length - 1 ? (
          <input
            onClick={handleFinishQuiz}
            type="submit"
            value="finish"
            className="button"
          ></input>
        ) : (
          <input
            onClick={handleNextButtonClick}
            type="submit"
            value="Next"
            className="button"
          ></input>
        )}
      </div>
    </div>
  );
}

export default QuizApp;
