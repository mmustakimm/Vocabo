const questions = [
    {
      question: "What is the meaning of abase?",
      answer: [
        { text: "To inspire deeply", correct: false },
        { text: "To humiliate or degrade", correct: true },
        { text: "To make wealthy", correct: false },
        { text: "To encourage openly", correct: false },
      ],
    },
    {
      question: "What is the meaning of abash?",
      answer: [
        { text: "To support bravely", correct: false },
        { text: "To persuade someone", correct: false },
        { text: "To excite with energy", correct: false },
        { text: "To embarrass or make ashamed", correct: true },
      ],
    },
    {
      question: "What is the meaning of abate?",
      answer: [
        { text: "To increase dramatically", correct: false },
        { text: "To argue endlessly", correct: false },
         { text: "To lessen in intensity or degree", correct: true },
        { text: "To support a decision", correct: false },
      ],
    },
    {
      question: "What is the meaning of abdicate?",
      answer: [
        { text: "To step down from a position of power", correct: true },
        { text: "To gain power", correct: false },
        { text: "To lead a mission", correct: false },
        { text: "To speak with authority", correct: false },
      ],
    },
    {
      question: "What is the meaning of aberration?",
      answer: [
        { text: "A standard procedure", correct: false },
        { text: "A kind of celebration", correct: false },
        { text: "Something not typical; deviation", correct: true },
        { text: "A humorous incident", correct: false },
      ],
    },
    {
      question: "What is the meaning of abet?",
      answer: [
        { text: "To hinder progress", correct: false },
        { text: "To manage a task", correct: false },
        { text: "To study attentively", correct: false },
        { text: "To support or encourage wrongdoing", correct: true },
      ],
    },
    {
      question: "What is the meaning of abeyance?",
      answer: [
        { text: "Excitement", correct: false },
        { text: "Suspension or temporary inactivity", correct: true },
        { text: "Growth", correct: false },
        { text: "Decline", correct: false },
      ],
    },
    {
      question: "What is the meaning of abhor?",
      answer: [
        { text: "To hate intensely", correct: true },
        { text: "To respect deeply", correct: false },
        { text: "To teach thoroughly", correct: false },
        { text: "To avoid slightly", correct: false },
      ],
    },
    {
      question: "What is the meaning of abject?",
      answer: [
        { text: "Joyful", correct: false },
        { text: "Hopeless or wretched", correct: true },
        { text: "Confident", correct: false },
        { text: "Sneaky", correct: false },
      ],
    },
    {
      question: "What is the meaning of abjure?",
      answer: [
        { text: "To accept openly", correct: false },
        { text: "To discuss openly", correct: false },
        { text: "To renounce or refrain from", correct: true },
        { text: "To accuse boldly", correct: false },
      ],
    },
    {
      question: "What is the meaning of abnegate?",
      answer: [
        { text: "To welcome", correct: false },
        { text: "To resolve", correct: false },
        { text: "To elaborate", correct: false },
        { text: "To deny or reject", correct: true },
      ],
    },
    {
      question: "What is the meaning of abomination?",
      answer: [
        { text: "Something delightful", correct: false },
        { text: "A charming habit", correct: false },
        { text: "A common occurrence", correct: false },
        { text: "Something with extreme hatred", correct: true },
      ],
    },
    {
      question: "What is the meaning of aboriginal?",
      answer: [
        { text: "Native", correct: true },
        { text: "Foreign", correct: false },
        { text: "Imported", correct: false },
        { text: "Decorative", correct: false },
      ],
    },
    {
      question: "What is the meaning of abortive?",
      answer: [
        { text: "Successful", correct: false },
        { text: "Traditional", correct: false },
        { text: "Unsuccessful", correct: true },
        { text: "Immediate", correct: false },
      ],
    },
    {
      question: "What is the meaning of abound?",
      answer: [
        { text: "To be limited", correct: false },
        { text: "To be very numerous", correct: true },
        { text: "To scatter slowly", correct: false },
        { text: "To focus sharply", correct: false },
      ],
    },
    {
      question: "What is the meaning of abridge?",
      answer: [
        { text: "To shorten", correct: true },
        { text: "To expand", correct: false },
        { text: "To clarify", correct: false },
        { text: "To complicate", correct: false },
      ],
    },
    {
      question: "What is the meaning of abrogate?",
      answer: [
        { text: "To validate", correct: false },
        { text: "To enhance", correct: false },
        { text: "To ignore", correct: false },
        { text: "To abolish or nullify", correct: true },
      ],
    },
    {
      question: "What is the meaning of absolute?",
      answer: [
        { text: "Partial", correct: false },
        { text: "Flexible", correct: false },
        { text: "Total or complete", correct: true },
        { text: "Transparent", correct: false },
      ],
    },
    {
      question: "What is the meaning of absolve?",
      answer: [
        { text: "To blame", correct: false },
        { text: "To reject", correct: false },
        { text: "To question", correct: false },
        { text: "To free from guilt or blame", correct: true },
      ],
    },
    {
      question: "What is the meaning of abstinent?",
      answer: [
        { text: "Indulging often", correct: false },
        { text: "Focusing deeply", correct: false },
        { text: "Voluntarily avoiding something", correct: true },
        { text: "Drifting aimlessly", correct: false },
      ],
    },
    {
      question: "What is the meaning of abstract?",
      answer: [
        { text: "Practical", correct: false },
        { text: "Theoretical or not concrete", correct: true },
        { text: "Visual", correct: false },
        { text: "Friendly", correct: false },
      ],
    },
     {
      question: "What is the meaning of abstruse?",
      answer: [
        { text: "Difficult to understand", correct: true },
        { text: "Easy to understand", correct: false },
        { text: "Inspiring", correct: false },
        { text: "Related to money", correct: false },
      ],
    },
     {
      question: "What is the meaning of abysmal?",
      answer: [
        { text: "Pleasant", correct: false },
        { text: "Generous", correct: false },
        { text: "Helpful", correct: false },
        { text: "Extremely hopeless or bottomless", correct: true },
      ],
    },
    {
      question: "What is the meaning of accede?",
      answer: [
        { text: "To give in or agree", correct: true },
        { text: "To review carefully", correct: false },
        { text: "To disagree openly", correct: false },
        { text: "To resist firmly", correct: false },
      ],
    },
    {
      question: "What is the meaning of accentuate?",
      answer: [
        { text: "To diminish", correct: false },
        { text: "To emphasize", correct: true },
        { text: "To dispute", correct: false },
        { text: "To question", correct: false },
      ],
    },
    {
      question: "What is the meaning of access?",
      answer: [
        { text: "To remove something", correct: false },
        { text: "To obscure intentionally", correct: false },
        { text: "To destroy completely", correct: false },
        { text: "The ability to enter or use something", correct: true },
      ],
    },
    {
    question: "What is the meaning of acclaim?",
    answer: [
      { text: "To avoid notice", correct: false },
      { text: "To question sharply", correct: false },
      { text: "To praise enthusiastically and publicly", correct: true },
      { text: "To respond negatively", correct: false },
    ],
  },
  {
    question: "What is the meaning of accolade?",
    answer: [
      { text: "An honor or award", correct: true },
      { text: "A minor error", correct: false },
      { text: "A complaint", correct: false },
      { text: "A difficult choice", correct: false },
    ],
  },
  {
    question: "What is the meaning of accord?",
    answer: [
      { text: "To argue", correct: false },
      { text: "To agree or give harmony", correct: true },
      { text: "To delay", correct: false },
      { text: "To entertain", correct: false },
    ],
  },
  {
    question: "What is the meaning of accost?",
    answer: [
      { text: "To ignore completely", correct: false },
      { text: "To laugh at", correct: false },
      { text: "To follow closely", correct: false },
      { text: "To approach and speak to", correct: true },
    ],
  },
  {
    question: "What is the meaning of accouterments?",
    answer: [
      { text: "Essential qualities", correct: false },
      { text: "Special diets", correct: false },
      { text: "Personal accessories or equipment", correct: true },
      { text: "Types of fabrics", correct: false },
    ],
  },
  {
    question: "What is the meaning of accrue?",
    answer: [
      { text: "To lose gradually", correct: false },
      { text: "To accumulate over time", correct: true },
      { text: "To wash away", correct: false },
      { text: "To challenge authority", correct: false },
    ],
  },
  {
    question: "What is the meaning of acerbic?",
    answer: [
      { text: "Sweet and gentle", correct: false },
      { text: "Bitter, sour, or severe", correct: true },
      { text: "Polite and formal", correct: false },
      { text: "Dull and boring", correct: false },
    ],
  },
  {
    question: "What is the meaning of acquiesce?",
    answer: [
      { text: "To object strongly", correct: false },
      { text: "To argue logically", correct: false },
      { text: "To comply passively", correct: true },
      { text: "To escape quickly", correct: false },
    ],
  },
  {
    question: "What is the meaning of acquisitive?",
    answer: [
      { text: "Generous", correct: false },
      { text: "Hesitant", correct: false },
      { text: "Greedy for material gain", correct: true },
      { text: "Inattentive", correct: false },
    ],
  },
  {
    question: "What is the meaning of acquit?",
    answer: [
      { text: "To find not guilty", correct: true },
      { text: "To scold severely", correct: false },
      { text: "To charge with a crime", correct: false },
      { text: "To delay a decision", correct: false },
    ],
  },
  {
    question: "What is the meaning of acrid?",
    answer: [
      { text: "Mild in taste", correct: false },
      { text: "Cool and refreshing", correct: false },
      { text: "Warm and soothing", correct: false },
      { text: "Harsh or bitter", correct: true },
    ],
  },
  {
    question: "What is the meaning of acrimonious?",
    answer: [
      { text: "Polite", correct: false },
      { text: "Joyful", correct: false },
      { text: "Sympathetic", correct: false },
       { text: "Bitter or angry", correct: true },
    ],
  },
   {
    question: "What is the meaning of acronym?",
    answer: [
      { text: "A type of poem", correct: false },
      { text: "An ancient symbol", correct: false },
      { text: "A word formed from initials", correct: true },
      { text: "A secret message", correct: false },
    ],
  }, 
  {
    question: "What is the meaning of acumen?",
    answer: [
      { text: "Physical strength", correct: false },
      { text: "Mental sharpness", correct: true },
      { text: "Quietness", correct: false },
      { text: "Artistic style", correct: false },
    ],
  },
  {
    question: "What is the meaning of acute?",
    answer: [
      { text: "Dull or slow", correct: false },
      { text: "Broad or wide", correct: false },
      { text: "Hesitant", correct: false },
      { text: "Sharp or intense", correct: true },
    ],
  },
  {
    question: "What is the meaning of ad-lib?",
    answer: [
      { text: "To improvise", correct: true },
      { text: "To memorize", correct: false },
      { text: "To summarize", correct: false },
      { text: "To argue", correct: false },
    ],
  },
   {
    question: "What is the meaning of adage?",
    answer: [
      { text: "A question", correct: false },
      { text: "A guess", correct: false },
      { text: "A complaint", correct: false },
      { text: "A proverb or wise saying", correct: true },
    ],
  },
  {
    question: "What is the meaning of adamant?",
    answer: [
      { text: "Easily persuaded", correct: false },
      { text: "Calm and quiet", correct: false },
      { text: "Stubborn and unyielding", correct: true },
      { text: "Careful and slow", correct: false },
    ],
  },
  {
    question: "What is the meaning of address?",
    answer: [
      { text: "To ignore a problem", correct: false },
      { text: "To delay", correct: false },
      { text: "To speak to or direct attention to", correct: true },
      { text: "To repeat a phrase", correct: false },
    ],
  },
  {
    question: "What is the meaning of adduce?",
    answer: [
      { text: "To hide evidence", correct: false },
      { text: "To ignore a claim", correct: false },
      { text: "To demand an answer", correct: false },
      { text: "To offer as proof", correct: true },
    ],
  },
  {
    question: "What is the meaning of adherent?",
    answer: [
      { text: "Opponent", correct: false },
      { text: "Supporter or follower", correct: true },
      { text: "Stranger", correct: false },
      { text: "Adviser", correct: false },
    ],
  },
  {
    question: "What is the meaning of adjourn?",
    answer: [
      { text: "To cancel permanently", correct: false },
      { text: "To postpone or suspend", correct: true },
      { text: "To speed up", correct: false },
      { text: "To finalize", correct: false },
    ],
  },
  {
    question: "What is the meaning of adjunct?",
    answer: [
      { text: "Something added or connected", correct: true },
      { text: "A contradiction", correct: false },
      { text: "A replacement", correct: false },
      { text: "A limitation", correct: false },
    ],
  },
  {
    question: "What is the meaning of admonish?",
    answer: [
      { text: "To reward", correct: false },
      { text: "To warn or criticize gently", correct: true },
      { text: "To praise highly", correct: false },
      { text: "To welcome", correct: false },
    ],
  },
  {
    question: "What is the meaning of adroit?",
    answer: [
      { text: "Clumsy", correct: false },
      { text: "Confused", correct: false },
      { text: "Aggressive", correct: false },
      { text: "Skillful or clever", correct: true },
    ],
  },
  {
    question: "What is the meaning of advent?",
    answer: [
      { text: "Departure", correct: false },
      { text: "Sudden disappearance", correct: false },
      { text: "Arrival or beginning", correct: true },
      { text: "Prolonged delay", correct: false },
    ],
  },
  {
    question: "What is the meaning of adventitious?",
    answer: [
      { text: "Accidental or unplanned", correct: true },
      { text: "Traditional", correct: false },
      { text: "Carefully timed", correct: false },
      { text: "Expected", correct: false },
    ],
  },
  {
    question: "What is the meaning of advocate?",
    answer: [
      { text: "Opponent", correct: false },
      { text: "A person who argues in favor", correct: true },
      { text: "Bystander", correct: false },
      { text: "Critic", correct: false },
    ],
  },
  {
    question: "What is the meaning of affidavit?",
    answer: [
      { text: "Oral argument", correct: false },
      { text: "A sworn written statement", correct: true },
      { text: "Rumor", correct: false },
      { text: "Threat", correct: false },
    ],
  },
  {
    question: "What is the meaning of affiliate?",
    answer: [
      { text: "To distance from", correct: false },
      { text: "To eliminate", correct: false },
      { text: "To oppose strongly", correct: false },
      { text: "To become closely associated", correct: true },
    ],
  },
  {
    question: "What is the meaning of affliction?",
    answer: [
      { text: "Blessing", correct: false },
      { text: "Pleasure", correct: false },
      { text: "Misery or suffering", correct: true },
      { text: "Vacation", correct: false },
    ],
  },
  {
    question: "What is the meaning of afford?",
    answer: [
      { text: "To take away", correct: false },
      { text: "To supply or provide", correct: true },
      { text: "To demand", correct: false },
      { text: "To deny", correct: false },
    ],
  },
  {
    question: "What is the meaning of affront?",
    answer: [
      { text: "A compliment", correct: false },
      { text: "A respectful nod", correct: false },
      { text: "A deliberate act of disrespect", correct: true },
      { text: "A polite gesture", correct: false },
    ],
  },
  {
    question: "What is the meaning of aftermath?",
    answer: [
      { text: "Preparation", correct: false },
      { text: "Beginning", correct: false },
      { text: "Consequence or result", correct: true },
      { text: "Idea", correct: false },
    ],
  },
  {
    question: "What is the meaning of aggrandize?",
    answer: [
      { text: "To exaggerate or make greater", correct: true },
      { text: "To diminish", correct: false },
      { text: "To simplify", correct: false },
      { text: "To analyze", correct: false },
    ],
  },
  {
    question: "What is the meaning of aggrieve?",
    answer: [
      { text: "To treat kindly", correct: false },
      { text: "To mistreat or distress", correct: true },
      { text: "To entertain", correct: false },
      { text: "To praise", correct: false },
    ],
  },
  {
    question: "What is the meaning of aghast?",
    answer: [
      { text: "Excited", correct: false },
      { text: "Joyful", correct: false },
      { text: "Sleepy", correct: false },
      { text: "Terrified or horrified", correct: true },
    ],
  },
  {
    question: "What is the meaning of alacrity?",
    answer: [
      { text: "Hesitation", correct: false },
      { text: "Cheerful readiness", correct: true },
      { text: "Annoyance", correct: false },
      { text: "Indifference", correct: false },
    ],
  },
  {
    question: "What is the meaning of alchemy?",
    answer: [
      { text: "Basic science", correct: false },
      { text: "Political ideology", correct: false },
      { text: "A magical transformation", correct: true },
      { text: "Logical reasoning", correct: false },
    ],
  },
  {
    question: "What is the meaning of alienate?",
    answer: [
      { text: "To bring closer", correct: false },
      { text: "To estrange or isolate", correct: true },
      { text: "To make happy", correct: false },
      { text: "To compliment", correct: false },
    ],
  },
  {
    question: "What is the meaning of allege?",
    answer: [
      { text: "To assert without proof", correct: true },
      { text: "To prove", correct: false },
      { text: "To explain deeply", correct: false },
      { text: "To confess", correct: false },
    ],
  },
  {
    question: "What is the meaning of allegiance?",
    answer: [
      { text: "Disloyalty", correct: false },
      { text: "Loyalty or commitment", correct: true },
      { text: "Ignorance", correct: false },
      { text: "Disinterest", correct: false },
    ],
  },
  {
    question: "What is the meaning of allegory?",
    answer: [
      { text: "A factual report", correct: false },
      { text: "A random essay", correct: false },
      { text: "An advertisement", correct: false },
      { text: "A symbolic story with deeper meaning", correct: true },
    ],
  },
  {
    question: "What is the meaning of alleviate?",
    answer: [
      { text: "To worsen", correct: false },
      { text: "To relieve or ease", correct: true },
      { text: "To ignore", correct: false },
      { text: "To increase", correct: false },
    ],
  },
  {
    question: "What is the meaning of allocate?",
    answer: [
      { text: "To distribute or assign", correct: true },
      { text: "To destroy", correct: false },
      { text: "To hide", correct: false },
      { text: "To combine", correct: false },
    ],
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
