const questionText = document.querySelector("#questionText");
const answersText = document.querySelector("#answersText");
const feedback = document.querySelector("#feedback");
const scoreDisplay = document.querySelector("#scoreDisplay");

const nextBtn = document.querySelector("#nextBtn");

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
const quizQuestions = [
    {
      question: "What does HTML stand for?",
      answers: [
        "HAHAHA",
        "HEHEHE",
        "HOHOHO",
        "Hyper Text Markup Language"
      ],
      correctAnswer: "Hyper Text Markup Language"  
    },
    {
        question: "What is CSS used for?",
        answers: [
            "To decorate your home",
            "To be better",
            "To be to be",
            "Use to style your web page"
        ],
        correctAnswer: "Use to style your web page"
    },
    {
        question: "What can JavaScript do on a webpage?",
        answers: [
            "DODODO",
            "DEDEDE",
            "DUDUDU",
            "To give life to your web page"
        ],
        correctAnswer: "To give life to your web page"
    }
];

function displayQuestion(){
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answersText.innerHTML = "";

    
    for(let i= 0; i <currentQuestion.answers.length; i++){
        const button1 = document.createElement('button');
        button1.textContent = currentQuestion.answers[i];

        button1.addEventListener("click", ()=>{
            selectedAnswer = button1.textContent;
            if(button1.textContent === currentQuestion.correctAnswer){
                feedback.textContent = "correct";
                score++;
                scoreDisplay.textContent = `Score: ${score}`;
            }else{
                feedback.textContent = "incorrect";
            }

            for(const button of answersText.querySelectorAll('button')){
                button.disabled = true;
            }

        });

        answersText.appendChild(button1);
    }

}

nextBtn.addEventListener("click", ()=>{
    if(selectedAnswer === null){
        alert("please choose an answer")
        return;
    }
    currentQuestionIndex++;
    selectedAnswer = null;

    if(quizQuestions.length > currentQuestionIndex){
        feedback.textContent = "";
        displayQuestion();
    }else{
        questionText.textContent = "Quiz completed!";
        answersText.innerHTML = "";
        feedback.textContent = "";
        scoreDisplay.textContent = `Final Score: ${score} / ${quizQuestions.length}`;
        nextBtn.disabled = true;
    }
    


});
scoreDisplay.textContent = `Score: ${score}`;
displayQuestion();