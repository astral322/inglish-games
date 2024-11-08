const questions = [
    {
      question: "Which is the correct adjective order: 'He has a ___ dog'?",
      options: ["small black cute", "cute black small", "cute small black"],
      answer: "cute small black"
    },
    {
        question: "I wish I ___ play the guitar better.",
        options: ["can", "could", "am able to"],
        answer: "could"
      },
      {
        question: "Choose the correct passive form: 'The cake ___ by my mother.'",
        options: ["was baked", "bake", "is baking"],
        answer: "was baked"
      },
      {
        question: "Which is the correct adjective order: 'They live in a ___ house'?",
        options: ["old big wooden", "big old wooden", "wooden big old"],
        answer: "big old wooden"
      },
      {
        question: "I wish it ___ raining right now.",
        options: ["stops", "stop", "would stop"],
        answer: "would stop"
      },
      {
        question: "Choose the correct passive form: 'The song ___ by the artist last year.'",
        options: ["was sung", "sang", "is singing"],
        answer: "was sung"
      },
      {
        question: "Which is the correct adjective order: 'She has a ___ dress'?",
        options: ["beautiful long blue", "blue beautiful long", "long beautiful blue"],
        answer: "beautiful long blue"
      },
      {
        question: "I wish I ___ more languages.",
        options: ["know", "knew", "will know"],
        answer: "knew"
      },
      {
        question: "Choose the correct passive form: 'The report ___ tomorrow.'",
        options: ["will be presented", "will present", "presented"],
        answer: "will be presented"
      },
      {
        question: "Which is the correct adjective order: 'He drives a ___ car'?",
        options: ["black old Italian", "Italian black old", "old black Italian"],
        answer: "old black Italian"
      },
      {
        question: "I wish my friend ___ here with me.",
        options: ["is", "was", "are"],
        answer: "was"
      },
      {
        question: "Choose the correct passive form: 'The homework ___ by the students.'",
        options: ["is done", "do", "did"],
        answer: "is done"
      },
      {
        question: "Which is the correct adjective order: 'It was a ___ shirt'?",
        options: ["cotton white large", "large white cotton", "white large cotton"],
        answer: "large white cotton"
      },
      {
        question: "I wish I ___ in that meeting.",
        options: ["am", "were", "be"],
        answer: "were"
      },
      {
        question: "Choose the correct passive form: 'The emails ___ by the assistant yesterday.'",
        options: ["were sent", "send", "sends"],
        answer: "were sent"
      },
      {
        question: "Which is the correct adjective order: 'She wore a ___ scarf'?",
        options: ["woolen pretty yellow", "yellow woolen pretty", "pretty yellow woolen"],
        answer: "pretty yellow woolen"
      },
      {
        question: "I wish I ___ to the concert last night.",
        options: ["go", "had gone", "went"],
        answer: "had gone"
      },
      {
        question: "Choose the correct passive form: 'The movie ___ next month.'",
        options: ["will be released", "releases", "released"],
        answer: "will be released"
      },
      {
        question: "Which is the correct adjective order: 'He bought a ___ table'?",
        options: ["antique round wooden", "wooden round antique", "round wooden antique"],
        answer: "antique round wooden"
      },
      {
        question: "I wish it ___ so cold in winter.",
        options: ["doesn't get", "didn't get", "won't get"],
        answer: "didn't get"
      }
  ];
  
  let currentQuestionIndex = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const resultElement = document.getElementById("result");
  
    resultElement.textContent = "";
  
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    answersElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      answersElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedAnswer) {
    const resultElement = document.getElementById("result");
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedAnswer === currentQuestion.answer) {
      resultElement.textContent = "Correct!";
      resultElement.style.color = "green";
      triggerConfetti(); // Llamada a la función de confeti
    } else {
      resultElement.textContent = `Incorrect! The correct answer is: ${currentQuestion.answer}`;
      resultElement.style.color = "red";
    }
  }
  
  function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    displayQuestion();
  }
  
  // Función para la animación de confeti
  function triggerConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
  
  window.onload = displayQuestion;
  