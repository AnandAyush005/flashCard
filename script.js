// ---------------- SECTION A - TAKING INPUT ----------------

let form = document.getElementById("quizForm");

let topic =
document.getElementById("topic_select");

let number_of_questions =
document.getElementById("questionCount");

let sub_btn =
document.getElementById("sub_btn");

let taking_input =
document.querySelector(".taking_input");


// ---------------- SECTION B - CARDS ----------------

let section_cards =
document.querySelector(".cards");

let flip =
document.querySelector(".card");

let card_heading =
document.querySelector(".card_heading");

let front =
document.querySelector(".front");

let back =
document.querySelector(".back");

let cor_btn =
document.querySelector(".correct_btn");

let wro_btn =
document.querySelector(".wrong_btn");


// ---------------- SECTION C - RESULT SCREEN ----------------

let result =
document.querySelector(".result_screen");

let score =
document.querySelector(".score");

let restart =
document.querySelector(".restart_btn");


// ---------------- APP STATE ----------------

let selectedQuestions = [];

let currentQuestionIndex = 0;

let totalScore = 0;


// ---------------- QUESTIONS DATA ----------------

const flashcards = {

    html: [
        {
            question: "What is HTML?",
            answer:
            "HTML stands for HyperText Markup Language."
        },

        {
            question:
            "What tag creates paragraph?",

            answer:
            "<p> tag"
        },

        {
            question:
            "What tag creates links?",

            answer:
            "<a> tag"
        }
    ],

    css: [
        {
            question:
            "What is CSS?",

            answer:
            "CSS styles webpages."
        },

        {
            question:
            "What is Flexbox?",

            answer:
            "Flexbox is a one-dimensional layout system."
        },

        {
            question:
            "What is CSS Grid?",

            answer:
            "CSS Grid is a two-dimensional layout system."
        }
    ],

    javascript: [
        {
            question:
            "What is JavaScript?",

            answer:
            "JavaScript makes websites interactive."
        },

        {
            question:
            "What is DOM?",

            answer:
            "DOM stands for Document Object Model."
        },

        {
            question:
            "What is a function?",

            answer:
            "A function is a reusable block of code."
        }
    ]
};


// ---------------- FORM SUBMIT ----------------

sub_btn.addEventListener("click", (e)=>{

    e.preventDefault();

    let userTopic = topic.value;

    let n =
    Number(number_of_questions.value);


    // Validation

    if(!userTopic){

        alert("Please select a topic");

        return;
    }

    if(n < 1){

        alert("Please enter valid question count");

        return;
    }


    // Reset state before new quiz

    currentQuestionIndex = 0;

    totalScore = 0;


    // Select questions

    selectedQuestions =
    flashcards[userTopic].slice(0,n);


    // Hide form screen

    taking_input.style.display =
    "none";


    // Show card screen

    section_cards.style.display =
    "flex";


    // Render first question

    renderQuestion();

});


// ---------------- RENDER QUESTION ----------------

function renderQuestion(){

    let currentQuestion =
    selectedQuestions[currentQuestionIndex];


    card_heading.textContent =
    `Question ${
        currentQuestionIndex + 1
    } / ${selectedQuestions.length}`;


    front.textContent =
    currentQuestion.question;


    back.textContent =
    currentQuestion.answer;


    // Reset card flip

    flip.classList.remove("flip");
}


// ---------------- CARD FLIP ----------------

flip.addEventListener("click", ()=>{

    flip.classList.toggle("flip");

});


// ---------------- CORRECT BUTTON ----------------

cor_btn.addEventListener("click", ()=>{

    totalScore++;

    nextQuestion();

});


// ---------------- WRONG BUTTON ----------------

wro_btn.addEventListener("click", ()=>{

    nextQuestion();

});


// ---------------- NEXT QUESTION ----------------

function nextQuestion(){

    currentQuestionIndex++;

    if(
        currentQuestionIndex <
        selectedQuestions.length
    ){

        renderQuestion();
    }

    else{

        showResult();
    }
}


// ---------------- SHOW RESULT ----------------

function showResult(){

    section_cards.style.display =
    "none";

    result.style.display =
    "flex";


    score.textContent =
    `${totalScore} / ${selectedQuestions.length}`;
}


// ---------------- RESTART ----------------

restart.addEventListener("click", ()=>{

    // Reset state

    selectedQuestions = [];

    currentQuestionIndex = 0;

    totalScore = 0;


    // Hide result

    result.style.display =
    "none";


    // Hide cards

    section_cards.style.display =
    "none";


    // Show form

    taking_input.style.display =
    "flex";


    // Reset form

    form.reset();

});