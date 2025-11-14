Quiz App

A dynamic, interactive quiz application built with HTML, CSS, and JavaScript. Test your knowledge with multiple-choice questions and get instant feedback on your performance!

Features:

🎯 Start Screen

![Quiz Start Screen](/images/quizappStartscreen.png)

Welcome interface with an engaging title and description
Clear "Start Quiz" button to begin the assessment
Clean, modern design with a centered card layout

📝 Quiz Screen

![Quiz Start Screen](/images/quizappQuestions.png)

Multiple-choice questions presented one at a time
Question counter showing current progress (e.g., "Question 1 of 5")
Real-time score tracking displayed in the header
Four answer options per question with hover effects for better UX
Smooth transitions between questions

📊 Progress Bar

![Quiz Start Screen](/images/quizappProgressbar.png)

Visual progress indicator at the top of the quiz screen
Fills dynamically as you advance through questions
Provides clear visual feedback on quiz completion status
Animated transitions for a polished feel

🏆 Results Screen

![Quiz Start Screen](/images/quizappResults.png)

Final score display showing correct answers out of total questions
Personalized feedback messages based on performance:

Perfect score: "Perfect! You're a genius!"
High score: "Great job! You know your stuff!"
Good score: "Good effort! Keep learning!"
Low score: "Keep practicing! You'll improve!"

"Restart Quiz" button to retake the assessment
Progress bar shows 100% completion

Technologies Used

HTML5 - Semantic structure and content
CSS3 - Modern styling with smooth animations and transitions
JavaScript (ES6+) - Quiz logic, score calculation, and DOM manipulation

How It Works

Initialization: Questions are loaded from a predefined array with correct answers
Question Display: One question is shown at a time with randomizable answer order (if configured)
Answer Selection: Click an answer to submit and automatically advance
Score Calculation: Points awarded for correct answers (configurable per question)
Results: Personalized message generated based on final score
Restart: Reset functionality to take the quiz again

Project Structure
quiz-app/
├── index.html # Main HTML structure
├── style.css # Styling and animations
└── script.js # Quiz logic and interactivity
Sample Questions
The quiz includes diverse questions covering topics like:

Geography (capital cities, largest oceans)
Programming (languages, web technologies)
Science (planets, chemical symbols)
General knowledge

Customization

Easily customize the quiz by modifying the quizData array in script.js:
javascriptconst quizData = [
{
question: "Your question here?",
answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
correct: 2, // Index of correct answer
points: 2 // Points for this question
}
];



Key Features

✅ Responsive design that works on all devices
✅ Smooth animations and transitions
✅ Score tracking with weighted questions
✅ Dynamic progress visualization
✅ Personalized result messages
✅ Easy to customize and extend
