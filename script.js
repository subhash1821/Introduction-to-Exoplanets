// Define levels, study points, and questions

// Define levels, study points, and questions
const levels = [
    {
        title: "Level 1: Introduction to Exoplanets",
        studyPoints: [
            "Exoplanets are planets located outside our solar system.",
            "The first confirmed exoplanet was discovered in 1992.",
            "Exoplanets can vary widely in size, composition, and distance from their host stars.",
            "The term 'exoplanet' comes from 'extrasolar planet'.",
            "Most exoplanets are found using the transit method or radial velocity method."
        ],
        questions: [
            {
                question: "What are exoplanets?",
                options: ["Planets in our solar system", "Planets outside our solar system", "Moons of planets", "Stars orbiting planets"],
                answer: 1
            },
            {
                question: "When was the first confirmed exoplanet discovered?",
                options: ["1985", "1992", "2000", "2010"],
                answer: 1
            },
            {
                question: "What does 'extrasolar' refer to?",
                options: ["Solar system planets", "Outside our solar system", "Only moons", "Stars"],
                answer: 1
            },
            {
                question: "Which method is NOT commonly used to detect exoplanets?",
                options: ["Transit method", "Radial velocity method", "Gravitational lensing", "Direct imaging"],
                answer: 2
            },
            {
                question: "What is a characteristic of exoplanets?",
                options: ["They are always rocky.", "They can only exist in binary systems.", "They vary in size and composition.", "They have no atmosphere."],
                answer: 2
            }
        ]
    }
];

// Initialize variables
let currentLevel = 0;
let currentQuestion = 0;
let score = 0;

// Start game button event listener
document.getElementById("start-button").addEventListener("click", startGame);

// Start game function
function startGame() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("level-container").style.display = "block";
    showStudyMode();
}

// Show study mode function
function showStudyMode() {
    document.getElementById("study-mode").style.display = "block";
    document.getElementById("quiz-mode").style.display = "none";
    document.getElementById("level-title").innerHTML = levels[currentLevel].title;
    const studyPoints = document.getElementById("study-points");
    studyPoints.innerHTML = "";
    levels[currentLevel].studyPoints.forEach(point => {
        const li = document.createElement("li");
        li.innerHTML = point;
        studyPoints.appendChild(li);
    });
    document.getElementById("quiz-button").addEventListener("click", showQuizMode);
}

// Show quiz mode function
function showQuizMode() {
    document.getElementById("study-mode").style.display = "none";
    document.getElementById("quiz-mode").style.display = "block";
    showQuestion();
}

// Show question function
function showQuestion() {
    const question = document.getElementById("question");
    const options = document.getElementById("options");
    question.innerHTML = levels[currentLevel].questions[currentQuestion].question;
    options.innerHTML = "";
    levels[currentLevel].questions[currentQuestion].options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerHTML = option;
        li.addEventListener("click", () => {
            checkAnswer(index);
        });
        options.appendChild(li);
    });
}

// Check answer function
function checkAnswer(answer) {
    if (answer === levels[currentLevel].questions[currentQuestion].answer) {
        score++;
        document.getElementById("result").innerHTML = "Correct!";
    } else {
        document.getElementById("result").innerHTML = "Incorrect.";
    }
    currentQuestion++;
    if (currentQuestion >= levels[currentLevel].questions.length) {
        endLevel();
    } else {
        showQuestion();
    }
}

// End level function
function endLevel() {
    document.getElementById("quiz-mode").style.display = "none";
    document.getElementById("end-button-container").style.display = "block";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").innerHTML = `Level ${currentLevel + 1} Score: ${score}/${levels[currentLevel].questions.length}`;
    document.getElementById("end-button").addEventListener("click", nextLevel);
}

// Next level function
function nextLevel() {
    currentLevel++;
    currentQuestion = 0;
    score = 0;
    if (currentLevel >= levels.length) {
        alert("Congratulations, you've completed all levels!");
    } else {
        document.getElementById("end-button-container").style.display = "none";
        document.getElementById("score-container").style.display = "none";
        showStudyMode();
    }
}