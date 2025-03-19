const questions = [
    {
        question: "Which of the following numbers comes next in the sequence:2, 4, 8, 16?",
        answers: [
            { text: "24", correct: false},
            { text: "30", correct: false},
            { text: "32", correct: true},
            { text: "48", correct: false},
        ]
    },
    {
        question: "Which word does NOT belong with the others?",
        answers: [
            { text: "Apple", correct: false},
            { text: "Banana", correct: false},
            { text: "Carrot", correct: true},
            { text: "Orange", correct: false},
        ]
    },
    {
        question: "If all Bloops are Floops, and some Floops are Gloops, which of the following MUST be true?",
        answers: [
            { text: "All Bloops are Gloops", correct: false},
            { text: "Some Bloops are Gloops", correct: false},
            { text: "Some GLoops are Bloops", correct: false},
            { text: "None of the above", correct: true},
        ]
    },
    {
        question: "Complete the following analogy:Cat is to Kitten as Dog is to:",
        answers: [
            { text: "Puppy", correct: true},
            { text: "Canine", correct: false},
            { text: "Feline", correct: false},
            { text: "Animal", correct: false},
        ]
    },
    {
        question: "what is the value of X in the following equation: 3x + 5 = 14?",
        answers: [
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ]
    },
    {
        question: "Which of the following shapes is the odd one out?",
        answers: [
            { text: "Square", correct: false},
            { text: "Triangle", correct: false},
            { text: "Pentagon", correct: false},
            { text: "Circle", correct: true},
        ]
    },
    {
        question: "If you rearrange the letters LISTEN you get",
        answers: [
            { text: "SILENT", correct: true},
            { text: "TINSEL", correct: false},
            { text: "ELITES", correct: false},
            { text: "SENTIL", correct: false},
        ]
    },
    {
        question: "A train travels at speed of 6 miles per hour. How far will it travel in 30 minutes?",
        answers: [
            { text: "15 miles", correct: false},
            { text: "20 miles", correct: false},
            { text: "30 miles", correct: true},
            { text: "120 miles", correct: false},
        ]
    },
    {
        question: "Identify the missing letter in the following series: A,C,F,J,O?",
        answers: [
            { text: "T", correct: false},
            { text: "U", correct: true},
            { text: "V", correct: false},
            { text: "W", correct: false},
        ]
    },
    {
        question: "Which of the following is a prime number?",
        answers: [
            { text: "9", correct: false},
            { text: "15", correct: false},
            { text: "21", correct: false},
            { text: "17", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }

}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();