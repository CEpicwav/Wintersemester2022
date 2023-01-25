class Question {
  constructor(public topic: string, public question: string, public answer: string, public definition: string, public choices: string[]) { }
}

let questionIndex = 0;


const questions: Question[] = [  
  new Question("html", "Wie kann man einen Link in HTML erstellen?", "<a>", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://de.w3docs.com/html-lernen/html-links.html'>Lösung</a></p>", [`<a>`, `<link>`, `<navi>`]),
  new Question("html", "Wie kann man ein Bild in HTML einfügen?", "<img>", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://www.computerbild.de/artikel/cb-Tipps-Internet-html-bilder-einfuegen-30918285.html'>Lösung</a></p>", [`<a>`, `<link>`, `<navi>`]),
  new Question("html", "Wie kann man eine Liste in HTML erstellen?", "<ul> oder <ol>", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://praxistipps.chip.de/html-aufzaehlungen-und-listen-einfuegen_46540#:~:text=Aufzählungspunkte%20in%20HTML%20einfügen,Tag%20(s.html'>Lösung</a></p>", [`<img>`, `<form>`, `<a>`]),
  new Question("html", "Wie kann man eine Tabelle in HTML erstellen?", "<table>", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://wiki.selfhtml.org/wiki/HTML/Tabellen/Aufbau_einer_Tabelle#:~:text=leitet%20eine%20Tabelle%20ein,Tag%20notiert.html'>Lösung</a></p>", [`<a>`, `<link>`, `<navi>`]),
  new Question("html", "Wie kann man ein Formular in HTML erstellen?", "<form>", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://www.html-seminar.de/formulare.html'>Lösung</a></p>", [`<a>`, `<link>`, `<navi>`]),
  new Question("css", "Wie kann man einen Hintergrundfarbe eines Elements in CSS festlegen?", "background-color", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://wiki.selfhtml.org/wiki/CSS/Tutorials/Hintergrund/Gestaltung_mit_CSS#:~:text=background-color%5BBearbeiten%5D,Element%20eine%20Hintergrundfarbe%20zugewiesen%20werden.&text=In%20diesem%20Beispiel%20erhält%20der,hingegen%20ist%20keine%20Hintergrundfarbe%20festgelegt.html'>Lösung</a></p>", [`<a>`, `<link>`, `<navi>`]),
  new Question("css", "Wie kann man die Schriftart eines Elements in CSS festlegen?", "font-family", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://www.edv-lehrgang.de/css-font-family/#:~:text=Die%20Schriftart%20wird%20in%20CSS,mit%20einem%20Komma%20getrennt%20werden.html'>Lösung</a></p>", [`<img>`, `<form>`, `<a>`]),
  new Question("css", "Wie kann man die Abstände eines Elements in CSS festlegen?", "padding, margin", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://www.mediaevent.de/css/margin.html#:~:text=Das%20Boxmodell%20definiert%20CSS%20margin,den%20Abstand%20vom%20umfassenden%20Element.html'>Lösung</a></p>", [`<img>`, `<form>`, `<a>`]),
  new Question("css", "Wie kann man die Ausrichtung eines Elements in CSS festlegen?", "text-align", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://wiki.selfhtml.org/wiki/CSS/Tutorials/Ausrichtung/position'>Lösung</a></p>", [`<img>`, `<form>`, `<a>`]),
  new Question("css", "Wie kann man die Auswahl von Elementen in CSS einschränken?", "Class, ID", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://www.mediaevent.de/css/css-selektor-kontextselektor.html'>Lösung</a></p>", [`<img>`, `<form>`, `<a>`]),
  new Question("typescript", "Was ist der Unterschied zwischen var, let und const in TypeScript?", "var hat einen globalen Scope, let und const haben einen lokalen Scope", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://memucho.de/var-let-const-Sichtbarkeit-von-Variablen-in-Javasc/609#:~:text=Variablen%2FKonstanten%2C%20die%20mit%20let,sichtbar%2C%20wo%20sie%20deklariert%20werden.&text=Eine%20neue%20Zuweisung%20einer%20Variable,den%20Block%20der%20neuen%20Variable.'>Lösung</a></p>", [`<a>`, `<link>`, `<navi>`]),
  new Question("typescript", "Wie kann man eine Funktion in TypeScript erstellen?", "function funktionsname() {}", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://runebook.dev/de/docs/typescript/functions'>Lösung</a></p>", [`<img>`, `<form>`, `<a>`]),
  new Question("typescript", "Wie kann man ein Interface in TypeScript erstellen?", "interface interfacename {}", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://runebook.dev/de/docs/typescript/interfaces'>Lösung</a></p>", [`<img>`, `<form>`, `<a>`]),
  new Question("typescript", "Wie kann man eine Klasse in TypeScript erstellen?", "class classname {}", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://www.youtube.com/watch?v=TitI78lrqPs'>Lösung</a></p>", [`<img>`, `<form>`, `<a>`]),
  new Question("typescript", "Wie kann man einen Fehler in TypeScript abfangen?", "try {} catch(error) {}", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://entwickler.de/javascript/error-handling-in-javascript'>Lösung</a></p>", [`<img>`, `<form>`, `<a>`]),
];

function displayQuestion(question: Question) {
  const questionElement = document.getElementById("question");
  questionElement.innerText = question.question;

  const definitionContainer = document.getElementById("definition-container");
  definitionContainer.style.display = "none";

  const choicesContainer = document.getElementById("choices-container");
  choicesContainer.innerHTML = "";
  for (const choice of question.choices) {
    const button = document.createElement("button");
    button.innerText = choice;
    button.addEventListener("click", function() {
      checkAnswer(choice);
    });
    choicesContainer.appendChild(button);
  }
  choicesContainer.style.display = "block";
}

let score = 0;
let currentQuestion: Question | null = null;
const scoreBar = document.getElementById("score");

function getQuestion(topic: string) {
  const possibleQuestions = questions.filter(q => q.topic === topic);
  if (possibleQuestions.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * possibleQuestions.length);
  return possibleQuestions[randomIndex];
}



function checkAnswer(answer: string) {
  if (!currentQuestion) {
    return;
  }
  if (answer === currentQuestion.answer) {
    score = score + 20;
    alert(`Richtig! Ihr aktueller Score ist ${score}`);
    document.getElementById("definition").innerHTML = "";
    updateScore();
    currentQuestion = getQuestion(currentQuestion.topic);
    displayQuestion(currentQuestion);
    let form: HTMLInputElement = <HTMLInputElement>document.getElementById('myform');
  } else {
    alert(`Falsch! Die richtige Antwort ist ${currentQuestion.answer}`);
    document.getElementById("definition").innerHTML = currentQuestion.definition;
    let goOnButton = document.createElement("button");
    goOnButton.innerHTML = "Weiter";
    goOnButton.onclick = function () {
      currentQuestion = getQuestion(currentQuestion.topic);
      displayQuestion(currentQuestion);
    }
    document.getElementById("button-container").appendChild(goOnButton);
  }
}

function changeQuestion(topic: string) {
  {
    const selectedTopicQuestions = questions.filter(question => question.topic === topic);
    questionIndex = 0; 
    displayQuestion(selectedTopicQuestions[questionIndex]);
  }
  console.log("here we go");
currentQuestion = questions[questionIndex];
document.getElementById("question").innerHTML = questions[questionIndex].question;
}


function updateScore() {
  const scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.innerText = `${score / 20}/5`;
  }
  const scoreBar: HTMLDivElement = document.querySelector(".score-bar");
  if (scoreBar) {
    scoreBar.style.width = `${score}%`;
  }
  if(score == 100) {
    alert(`Sie haben gewonnen!`);
  }
}

function resetTest() {
  score = 0;
  updateScore();
}

changeQuestion("html");