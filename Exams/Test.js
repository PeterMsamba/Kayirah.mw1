let submitButton = document.getElementById('submit');
let resultElement = document.getElementById('result');
let errorElement = document.getElementById('error');
let answersElement = document.querySelector('.answers');
let retakeButton = document.getElementById('retake');
let nextButton = document.getElementById('next');

let questions = [
    { question: 'q1', correct: 'Paris' },
    { question: 'q2', correct: 'Jupiter' },
    { question: 'q3', correct: '4' },
    { question: 'q4', correct: 'Lion' },
    { question: 'q5', correct: 'H2O' },
    { question: 'q6', correct: 'Pacific' },
    { question: 'q7', correct: '7' },
    { question: 'q8', correct: 'Leonardo da Vinci' },
    { question: 'q9', correct: 'Tokyo' },
    { question: 'q10', correct: '12' },
];

let score = 0;

submitButton.addEventListener('click', () => {
    let allAnswered = true;
    score = 0; // Reset score before calculating
    questions.forEach((question) => {
        let answer = document.querySelector(`input[name="${question.question}"]:checked`);
        if (!answer) {
            allAnswered = false;
        } else if (answer.value === question.correct) {
            score++;
        }
    });

    if (!allAnswered) {
        errorElement.textContent = 'Please answer all questions before submitting.';
    } else {
        resultElement.textContent = `Your score is ${score} out of ${questions.length}.`;
        answersElement.classList.add('disabled');
        submitButton.style.display = 'none';
        retakeButton.style.display = 'inline-block';
        nextButton.style.display = 'inline-block';
        errorElement.textContent = '';
    }
});

retakeButton.addEventListener('click', () => {
    questions.forEach((question) => {
        let radios = document.querySelectorAll(`input[name="${question.question}"]`);
        radios.forEach((radio) => {
            radio.checked = false;
        });
    });
    answersElement.classList.remove('disabled');
    submitButton.style.display = 'inline-block';
    retakeButton.style.display = 'none';
    nextButton.style.display = 'none';
    resultElement.textContent = '';
    score = 0;
});

nextButton.addEventListener('click', () => {
    // Add logic to move to the next level of questions here.
    // For example, you could load a new set of questions.
    //alert("Next level functionality to be implemented here.");
    alert("Still working on it.");
    // reset the game like retake, or load new questions.
    questions.forEach((question) => {
        let radios = document.querySelectorAll(`input[name="${question.question}"]`);
        radios.forEach((radio) => {
            radio.checked = false;
        });
    });
    answersElement.classList.remove('disabled');
    submitButton.style.display = 'inline-block';
    retakeButton.style.display = 'none';
    nextButton.style.display = 'none';
    resultElement.textContent = '';
    score = 0;

});
