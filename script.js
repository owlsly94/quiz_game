const questionsUrl = 'questions.json';
let newGameButton = document.getElementById("new-game-btn");
let playAgainButton = document.getElementById("play-again-btn");
let playAgainVictoryButton = document.getElementById("play-again-victory-btn");
let saveScoreButton = document.getElementById("save-score-btn");
let victoryContainer = document.getElementById("victory-container");
let finalScore = document.getElementById("final-score");
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startNewGame() {
    newGameButton.style.display = 'none';
    playAgainButton.style.display = 'none';
    playAgainVictoryButton.style.display = 'none';
    saveScoreButton.style.display = 'none';
    victoryContainer.style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    document.getElementById("start-container").style.display = 'none';
    startQuiz();
}

async function fetchQuestions() {
    try {
        const response = await fetch(questionsUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching questions:', error);
        return [];
    }
}

async function startQuiz() {
    questions = await fetchQuestions();
    if (questions.length === 0) {
        alert('Unable to fetch questions. Please check the JSON file.');
        return;
    }

    shuffleQuestions();
    loadQuestion();
}

function shuffleQuestions() {
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
}

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const answerContainer = document.getElementById("answer-container");
    const scoreCounter = document.getElementById("score-counter");

    questionContainer.innerHTML = `<h2>${shuffledQuestions[currentQuestionIndex].question}</h2>`;

    scoreCounter.textContent = `Rezultat: ${score}`;

    answerContainer.innerHTML = shuffledQuestions[currentQuestionIndex].options.map((option, index) => `
        <div class="answer-option" onclick="selectAnswer(${index})">${option}</div>
    `).join('');
}

function selectAnswer(index) {
    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach(option => option.classList.remove('selected-answer'));
    answerOptions[index].classList.add('selected-answer');
}

function checkAnswer() {
    const selectedOption = document.querySelector('.selected-answer');
    const messageContainer = document.getElementById("message-container");
    if (!selectedOption) {
        showMessage("Molimo Vas, izaberite odgovor!");
        return;
    }

    const isCorrect = selectedOption.textContent === shuffledQuestions[currentQuestionIndex].correctAnswer;
    selectedOption.classList.add(isCorrect ? 'correct-answer' : 'wrong-answer');

    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach(option => option.style.pointerEvents = 'none');

    document.getElementById("check-btn").disabled = true;

    if (isCorrect) {
        score++;
        setTimeout(() => {
            nextQuestion();
        }, 1000);
    } else {
        const correctIndex = shuffledQuestions[currentQuestionIndex].options.findIndex(option => option === shuffledQuestions[currentQuestionIndex].correctAnswer);
        const correctOption = document.querySelectorAll('.answer-option')[correctIndex];
        correctOption.classList.add('correct-answer');
        playAgainButton.style.display = 'block';
        playAgainVictoryButton.style.display = 'block';
    }
}

function showMessage(message) {
    const messageContainer = document.getElementById("message-container");
    messageContainer.textContent = message;

    messageContainer.style.display = 'block';
    setTimeout(() => {
        messageContainer.style.display = 'none';
    }, 2000);
}

function nextQuestion() {
    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach(option => {
        option.classList.remove('selected-answer', 'correct-answer', 'wrong-answer');
        option.style.pointerEvents = 'auto';
    });

    document.getElementById("check-btn").disabled = false;
    playAgainButton.style.display = 'none';
    playAgainVictoryButton.style.display = 'none';
    saveScoreButton.style.display = 'none';

    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
    } else {
        showVictory();
    }
}

function showVictory() {
    finalScore.textContent = score;
    document.querySelector('.quiz-container').style.display = 'none';
    victoryContainer.style.display = 'block';
    playAgainVictoryButton.style.display = 'block';
}

function playAgain() {
    currentQuestionIndex = 0;
    score = 0;
    shuffleQuestions();
    loadQuestion();
    document.getElementById("check-btn").disabled = false;
    playAgainButton.style.display = 'none';
    playAgainVictoryButton.style.display = 'none';
    saveScoreButton.style.display = 'none';
    victoryContainer.style.display = 'none';
}

function playAgainVictory() {
    location.reload();
}

newGameButton.style.display = 'block';
playAgainButton.style.display = 'none';
playAgainVictoryButton.style.display = 'none';
victoryContainer.style.display = 'none';
