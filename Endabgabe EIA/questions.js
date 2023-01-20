class Question {
    topic;
    question;
    answer;
    constructor(topic, question, answer) {
        this.topic = topic;
        this.question = question;
        this.answer = answer;
    }
}
const questions = [
    new Question("html", "Wie kann man einen Link in HTML erstellen?", "<a>"),
    new Question("html", "Wie kann man ein Bild in HTML einfügen?", "<img>"),
    new Question("html", "Wie kann man eine Liste in HTML erstellen?", "<ul> oder <ol>"),
    new Question("html", "Wie kann man eine Tabelle in HTML erstellen?", "<table>"),
    new Question("html", "Wie kann man ein Formular in HTML erstellen?", "<form>"),
    new Question("css", "Wie kann man einen Hintergrundfarbe eines Elements in CSS festlegen?", "background-color"),
    new Question("css", "Wie kann man die Schriftart eines Elements in CSS festlegen?", "font-family"),
    new Question("css", "Wie kann man die Abstände eines Elements in CSS festlegen?", "padding, margin"),
    new Question("css", "Wie kann man die Ausrichtung eines Elements in CSS festlegen?", "text-align"),
    new Question("css", "Wie kann man die Auswahl von Elementen in CSS einschränken?", "Class, ID"),
    new Question("typescript", "Was ist der Unterschied zwischen var, let und const in TypeScript?", "var hat einen globalen Scope, let und const haben einen lokalen Scope"),
    new Question("typescript", "Wie kann man eine Funktion in TypeScript erstellen?", "function funktionsname() {}"),
    new Question("typescript", "Wie kann man ein Interface in TypeScript erstellen?", "interface interfacename {}"),
    new Question("typescript", "Wie kann man eine Klasse in TypeScript erstellen?", "class classname {}"),
    new Question("typescript", "Wie kann man einen Fehler in TypeScript abfangen?", "try {} catch(error) {}"),
];
let score = 0;
let currentQuestion = null;
function getQuestion(topic) {
    const possibleQuestions = questions.filter(q => q.topic === topic);
    if (possibleQuestions.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * possibleQuestions.length);
    return possibleQuestions[randomIndex];
}
function displayQuestion(question) {
    const questionElement = document.getElementById("question");
    if (questionElement) {
        questionElement.innerText = question.question;
    }
}
function checkAnswer(answer) {
    if (!currentQuestion) {
        return;
    }
    if (answer === currentQuestion.answer) {
        score++;
        alert(`Richtig! Ihr aktueller Score ist ${score}`);
        updateScore();
        currentQuestion = getQuestion(currentQuestion.topic);
    }
    else {
        score = 0;
        alert("Falsch. Ihr Score wurde zurückgesetzt.");
        updateScore();
    }
}
function updateScore() {
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
        scoreElement.innerText = `${score}`;
    }
    const scoreBar = document.querySelector(".score-bar");
    if (scoreBar) {
        scoreBar.style.width = `${score}%`;
    }
}
//# sourceMappingURL=questions.js.map