const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1920", "1931", "1945"],
        correctAnswer: "1912"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Yen", "Won", "Ringgit"],
        correctAnswer: "Yen"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Osmium", "Oxygen", "Oganesson", "Olivine"],
        correctAnswer: "Oxygen"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Vietnam"],
        correctAnswer: "Japan"
    },
    {
        question: "In what year did World War II end?",
        options: ["1945", "1947", "1950", "1939"],
        correctAnswer: "1945"
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
        correctAnswer: "Brasília"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Monoxide", "Nitrogen", "Carbon Dioxide"],
        correctAnswer: "Carbon Dioxide"
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "J.D. Salinger", "Jane Austen"],
        correctAnswer: "F. Scott Fitzgerald"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Indian Ocean", "Arctic Ocean", "Atlantic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        correctAnswer: "Venus"
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"],
        correctAnswer: "George Washington"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Gobi Desert", "Sahara Desert", "Antarctica", "Arabian Desert"],
        correctAnswer: "Antarctica"
    },
    {
        question: "Which element is essential for human bones?",
        options: ["Calcium", "Iron", "Sodium", "Potassium"],
        correctAnswer: "Calcium"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["J.K. Rowling", "Harper Lee", "George Orwell", "J.D. Salinger"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "What is the capital of South Africa?",
        options: ["Johannesburg", "Cape Town", "Durban", "Pretoria"],
        correctAnswer: "Pretoria"
    },
    {
        question: "Which is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        correctAnswer: "2"
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Onion", "Avocado", "Lime"],
        correctAnswer: "Avocado"
    },
    {
        question: "Who wrote '1984'?",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
        correctAnswer: "George Orwell"
    },
    {
        question: "Which river is the longest in the world?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        correctAnswer: "Nile"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: "Canberra"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        correctAnswer: "Albert Einstein"
    },
    {
        question: "What is the largest bird in the world?",
        options: ["Ostrich", "Emu", "Albatross", "Condor"],
        correctAnswer: "Ostrich"
    },
    {
        question: "In which year did the Berlin Wall fall?",
        options: ["1985", "1989", "1991", "1995"],
        correctAnswer: "1989"
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Charles Dickens", "Jane Austen", "Emily Brontë", "Leo Tolstoy"],
        correctAnswer: "Jane Austen"
    },
    {
        question: "What is the currency of South Korea?",
        options: ["Yen", "Won", "Baht", "Won"],
        correctAnswer: "Won"
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Neptune"],
        correctAnswer: "Jupiter"
    },
    {
        question: "Who painted 'Starry Night'?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"],
        correctAnswer: "Vincent van Gogh"
    },
    {
        question: "What is the national flower of Japan?",
        options: ["Cherry Blossom", "Rose", "Lotus", "Tulip"],
        correctAnswer: "Cherry Blossom"
    },
    {
        question: "In which year did the Apollo 11 mission land on the moon?",
        options: ["1965", "1969", "1972", "1975"],
        correctAnswer: "1969"
    },
    {
        question: "Who is known as the 'Father of Computer Science'?",
        options: ["Alan Turing", "Charles Babbage", "Ada Lovelace", "Tim Berners-Lee"],
        correctAnswer: "Alan Turing"
    },
    {
        question: "Which continent is the driest and hottest?",
        options: ["Africa", "Asia", "Australia", "South America"],
        correctAnswer: "Australia"
    },
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
        correctAnswer: "300,000 km/s"
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "George Orwell"],
        correctAnswer: "J.D. Salinger"
    },
    {
        question: "Which is the largest island in the world?",
        options: ["Greenland", "Australia", "Borneo", "Iceland"],
        correctAnswer: "Greenland"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Mitochondria", "Nucleus", "Endoplasmic Reticulum", "Golgi Apparatus"],
        correctAnswer: "Mitochondria"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Joseph Lister"],
        correctAnswer: "Alexander Fleming"
    },
    {
        question: "Which is the longest river in Asia?",
        options: ["Ganges", "Mekong", "Yellow River", "Yangtze"],
        correctAnswer: "Yangtze"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Au", "Ag", "Fe"],
        correctAnswer: "Au"
    }
];

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function shuffleQuestions() {
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
}

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const answerContainer = document.getElementById("answer-container");
    const scoreCounter = document.getElementById("score-counter");

    questionContainer.innerHTML = `<h2>${shuffledQuestions[currentQuestionIndex].question}</h2>`;
    
    // Update the score counter
    scoreCounter.textContent = `Score: ${score}`;

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
    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    const isCorrect = selectedOption.textContent === shuffledQuestions[currentQuestionIndex].correctAnswer;
    selectedOption.classList.add(isCorrect ? 'correct-answer' : 'wrong-answer');

    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach(option => option.style.pointerEvents = 'none'); // Disable further clicks on answer options

    document.getElementById("check-btn").disabled = true;

    if (isCorrect) {
        score++; // Increment the score for correct answers
        setTimeout(() => {
            nextQuestion();
        }, 1000); // Automatically load next question after 1 second for a correct answer
    } else {
        const correctIndex = shuffledQuestions[currentQuestionIndex].options.findIndex(option => option === shuffledQuestions[currentQuestionIndex].correctAnswer);
        const correctOption = document.querySelectorAll('.answer-option')[correctIndex];
        correctOption.classList.add('correct-answer');
        document.getElementById("play-again-btn").style.display = 'block';
    }
}

function nextQuestion() {
    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach(option => {
        option.classList.remove('selected-answer', 'correct-answer', 'wrong-answer');
        option.style.pointerEvents = 'auto'; // Re-enable clicks on answer options
    });

    document.getElementById("check-btn").disabled = false;
    document.getElementById("play-again-btn").style.display = 'none';

    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
    } else {
        alert(`Quiz completed! Your final score is ${score}`);
        currentQuestionIndex = 0; // Reset the quiz
        score = 0; // Reset the score
        shuffleQuestions();
        loadQuestion();
    }
}

function playAgain() {
    currentQuestionIndex = 0;
    score = 0; // Reset the score
    shuffleQuestions();
    loadQuestion();
    document.getElementById("check-btn").disabled = false;
    document.getElementById("play-again-btn").style.display = 'none';
}

// Initial load
shuffleQuestions();
loadQuestion();