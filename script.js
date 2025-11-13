// DOM Eleemnts

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// Questions

const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrid", correct: false },
        ],
    },
    {
        questions: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
        ],
    },
    {
        questions: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Artic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
        ],
    },
    {
        questions: "Which of these is NOT a programming language?",
        answers: [
            { text: "Java", correct: false },
            { text: "Python", correct: false },
            { text: "Waffles", correct: true },
            { text: "JavaScript", correct: false },
        ],
    },
    {
        questions: "What is the last month of the year?",
        answers: [
            { text: "May", correct: false },
            { text: "Feburary", correct: false },
            { text: "December", correct: true },
            { text: "April", correct: false },
        ],
    },
];