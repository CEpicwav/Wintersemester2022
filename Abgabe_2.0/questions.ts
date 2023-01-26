interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
  }
  
  const quiz: Question[] = [
    {
      question: "What does HTML stand for?",
      options: ["Hypertext Markup Language", "Hyperlink Text Markup Language", "Hypermedia Markup Language"],
      correctAnswer: "Hypertext Markup Language"
    },
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "What is TypeScript?",
      options: ["A programming language", "A text editor", "A web framework"],
      correctAnswer: "A programming language"
    }
  ];
  
  const quizForm = document.getElementById("quiz-form");
  const submitButton = document.getElementById("submit-button");
  const result = document.getElementById("result");
  
  for (let i = 0; i < quiz.length; i++) {
    const question = quiz[i];
    const questionText = document.createElement("p");
    questionText.innerText = question.question;
    quizForm.appendChild(questionText);
  
    for (let j = 0; j < question.options.length; j++) {
      const option = question.options[j];
      const optionInput = document.createElement("input);
      optionInput.type = "radio";
      optionInput.name = question${i};
      optionInput.value = option;
      const optionLabel = document.createElement("label");
      optionLabel.innerText = option;
      quizForm.appendChild(optionInput);
      quizForm.appendChild(optionLabel);
      quizForm.appendChild(document.createElement("br"));
      }
      }
      
      submitButton.addEventListener("click", () => {
      let correctAnswers = 0;
      for (let i = 0; i < quiz.length; i++) {
      const question = quiz[i];
      const selectedOption = document.querySelector(input[name="question${i}"]:checked);
      if (selectedOption && selectedOption.value === question.correctAnswer) {
      correctAnswers++;
      }
      }
      result.innerText = You got ${correctAnswers} out of ${quiz.length} correct!;
      });
      
      