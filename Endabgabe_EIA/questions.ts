class Question {
    constructor(public topic: string, public question: string, public answer: string, public definition: string, public choices: string[]) { }
}




const htmlQuestions: Question[] = [
    new Question("html", "Wie kann man einen Link in HTML erstellen?", "&lt;a&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://de.w3docs.com/html-lernen/html-links.html' target='_blank'>Lösung</a></p>", [`<a>`, `<link>`, `<img>`]),
    new Question("html", "Wie kann man ein Bild in HTML einfügen?", "&lt;img&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://www.computerbild.de/artikel/cb-Tipps-Internet-html-bilder-einfuegen-30918285.html' target='_blank'>Lösung</a></p>", [`<a>`, `<img>`, `<navi>`]),
    new Question("html", "Wie kann man eine Liste in HTML erstellen?", "&lt;ul&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://praxistipps.chip.de/html-aufzaehlungen-und-listen-einfuegen_46540#:~:text=Aufzählungspunkte%20in%20HTML%20einfügen,Tag%20(s.html' target='_blank'>Lösung</a></p>", [`<ul>`, `<form>`, `<a>`]),
    new Question("html", "Wie kann man eine Tabelle in HTML erstellen?", "&lt;table&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://wiki.selfhtml.org/wiki/HTML/Tabellen/Aufbau_einer_Tabelle#:~:text=leitet%20eine%20Tabelle%20ein,Tag%20notiert.html' target='_blank'>Lösung</a></p>", [`<a>`, `<link>`, `<table>`]),
    new Question("html", "Wie kann man ein Formular in HTML erstellen?", "&lt;form&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://www.html-seminar.de/formulare.html' target='_blank'>Lösung</a></p>", [`<ul>`, `<form>`, `<navi>`]),
];

const cssQuestions: Question[] = [
    new Question("css", "Wie kann man einen Hintergrundfarbe eines Elements in CSS festlegen?", "&lt;background-color&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://wiki.selfhtml.org/wiki/CSS/Tutorials/Hintergrund/Gestaltung_mit_CSS#:~:text=background-color%5BBearbeiten%5D,Element%20eine%20Hintergrundfarbe%20zugewiesen%20werden.&text=In%20diesem%20Beispiel%20erhält%20der,hingegen%20ist%20keine%20Hintergrundfarbe%20festgelegt.html' target='_blank'>Lösung</a></p>", [`<background-color>`, `<font-family>`, `<text-align>`]),
    new Question("css", "Wie kann man die Schriftart eines Elements in CSS festlegen?", "&lt;font-family&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://www.edv-lehrgang.de/css-font-family/#:~:text=Die%20Schriftart%20wird%20in%20CSS,mit%20einem%20Komma%20getrennt%20werden.html' target='_blank'>Lösung</a></p>", [`<background-color>`, `<font-family>`, `<text-align>`]),
    new Question("css", "Wie kann man die Abstände eines Elements in CSS festlegen?", "&lt;margin&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://www.mediaevent.de/css/margin.html#:~:text=Das%20Boxmodell%20definiert%20CSS%20margin,den%20Abstand%20vom%20umfassenden%20Element.html' target='_blank'>Lösung</a></p>", [`<background-color>`, `<font-family>`, `<margin>`]),
    new Question("css", "Wie kann man die Ausrichtung eines Elements in CSS festlegen?", "&lt;text-align&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://wiki.selfhtml.org/wiki/CSS/Tutorials/Ausrichtung/position' target='_blank'>Lösung</a></p>", [`<background-color>`, `<font-family>`, `<text-align>`]),
    new Question("css", "Wie kann man die Auswahl von Elementen in CSS einschränken?", "&lt;class&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://www.mediaevent.de/css/css-selektor-kontextselektor.html' target='_blank'>Lösung</a></p>", [`<class>`, `<font-family>`, `<text-align>`]),
];

const typescriptQuestions: Question[] = [
    new Question("typescript", "Was ist der Unterschied zwischen var, let und const in TypeScript?", "&lt;var = globalen Scope, let und const = lokalen Scope&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://memucho.de/var-let-const-Sichtbarkeit-von-Variablen-in-Javasc/609#:~:text=Variablen%2FKonstanten%2C%20die%20mit%20let,sichtbar%2C%20wo%20sie%20deklariert%20werden.&text=Eine%20neue%20Zuweisung%20einer%20Variable,den%20Block%20der%20neuen%20Variable.' target='_blank'>Lösung</a></p>", [`<interface interfacename {}>`, `<var = globalen Scope, let und const = lokalen Scope>`, `<try {} catch(error) {}>`]),
    new Question("typescript", "Wie kann man eine Funktion in TypeScript erstellen?", "&lt;function funktionsname() {}&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://runebook.dev/de/docs/typescript/functions' target='_blank'>Lösung</a></p>", [`<function funktionsname() >`, `<var = globalen Scope, let und const = lokalen Scope>`, `<try {} catch(error) {}>`]),
    new Question("typescript", "Wie kann man ein Interface in TypeScript erstellen?", "&lt;interface interfacename {}&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://runebook.dev/de/docs/typescript/interfaces' target='_blank'>Lösung</a></p>", [`<interface interfacename {}>`, `<var = globalen Scope, let und const = lokalen Scope>`, `<try {} catch(error) {}>`]),
    new Question("typescript", "Wie kann man eine Klasse in TypeScript erstellen?", "&lt;class classname {}&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://www.youtube.com/watch?v=TitI78lrqPs' target='_blank'>Lösung</a></p>", [`<interface interfacename {}>`, `<var = globalen Scope, let und const = lokalen Scope>`, `<class classname {}>`]),
    new Question("typescript", "Wie kann man einen Fehler in TypeScript abfangen?", "&lt;try {} catch(error) {}&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://entwickler.de/javascript/error-handling-in-javascript' target='_blank'>Lösung</a></p>", [`<interface interfacename {}>`, `<try {} catch(error) {}>`, `<try {} catch(error) {}>`]),
];


const randomQuestions: Question[] = [
    new Question("random", "Wie kann man einen Link in HTML erstellen?", "&lt;a&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://de.w3docs.com/html-lernen/html-links.html' target='_blank'>Lösung</a></p>", [`<a>`, `<link>`, `<img>`]),
    new Question("random", "Wie kann man ein Bild in HTML einfügen?", "&lt;img&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://www.computerbild.de/artikel/cb-Tipps-Internet-html-bilder-einfuegen-30918285.html' target='_blank'>Lösung</a></p>", [`<a>`, `<img>`, `<navi>`]),
    new Question("random", "Wie kann man eine Liste in HTML erstellen?", "&lt;ul&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://praxistipps.chip.de/html-aufzaehlungen-und-listen-einfuegen_46540#:~:text=Aufzählungspunkte%20in%20HTML%20einfügen,Tag%20(s.html' target='_blank'>Lösung</a></p>", [`<ul>`, `<form>`, `<a>`]),
    new Question("random", "Wie kann man eine Tabelle in HTML erstellen?", "&lt;table&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://wiki.selfhtml.org/wiki/HTML/Tabellen/Aufbau_einer_Tabelle#:~:text=leitet%20eine%20Tabelle%20ein,Tag%20notiert.html' target='_blank'>Lösung</a></p>", [`<a>`, `<link>`, `<table>`]),
    new Question("random", "Wie kann man ein Formular in HTML erstellen?", "&lt;form&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://www.html-seminar.de/formulare.html' target='_blank'>Lösung</a></p>", [`<ul>`, `<form>`, `<navi>`]),
    new Question("random", "Wie kann man einen Hintergrundfarbe eines Elements in CSS festlegen?", "&lt;background-color&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://wiki.selfhtml.org/wiki/CSS/Tutorials/Hintergrund/Gestaltung_mit_CSS#:~:text=background-color%5BBearbeiten%5D,Element%20eine%20Hintergrundfarbe%20zugewiesen%20werden.&text=In%20diesem%20Beispiel%20erhält%20der,hingegen%20ist%20keine%20Hintergrundfarbe%20festgelegt.html' target='_blank'>Lösung</a></p>", [`<background-color>`, `<font-family>`, `<text-align>`]),
    new Question("random", "Wie kann man die Schriftart eines Elements in CSS festlegen?", "&lt;font-family&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://www.edv-lehrgang.de/css-font-family/#:~:text=Die%20Schriftart%20wird%20in%20CSS,mit%20einem%20Komma%20getrennt%20werden.html' target='_blank'>Lösung</a></p>", [`<background-color>`, `<font-family>`, `<text-align>`]),
    new Question("random", "Wie kann man die Abstände eines Elements in CSS festlegen?", "&lt;margin&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://www.mediaevent.de/css/margin.html#:~:text=Das%20Boxmodell%20definiert%20CSS%20margin,den%20Abstand%20vom%20umfassenden%20Element.html' target='_blank'>Lösung</a></p>", [`<background-color>`, `<font-family>`, `<margin>`]),
    new Question("random", "Wie kann man die Ausrichtung eines Elements in CSS festlegen?", "&lt;text-align&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://wiki.selfhtml.org/wiki/CSS/Tutorials/Ausrichtung/position' target='_blank'>Lösung</a></p>", [`<background-color>`, `<font-family>`, `<text-align>`]),
    new Question("random", "Wie kann man die Auswahl von Elementen in CSS einschränken?", "&lt;class&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://www.mediaevent.de/css/css-selektor-kontextselektor.html' target='_blank'>Lösung</a></p>", [`<class>`, `<font-family>`, `<text-align>`]),
    new Question("random", "Was ist der Unterschied zwischen var, let und const in TypeScript?", "&lt;var = globalen Scope, let und const = lokalen Scope&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://memucho.de/var-let-const-Sichtbarkeit-von-Variablen-in-Javasc/609#:~:text=Variablen%2FKonstanten%2C%20die%20mit%20let,sichtbar%2C%20wo%20sie%20deklariert%20werden.&text=Eine%20neue%20Zuweisung%20einer%20Variable,den%20Block%20der%20neuen%20Variable.' target='_blank'>Lösung</a></p>", [`<interface interfacename {}>`, `<var = globalen Scope, let und const = lokalen Scope>`, `<try {} catch(error) {}>`]),
    new Question("random", "Wie kann man eine Funktion in TypeScript erstellen?", "&lt;function funktionsname() {}&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://runebook.dev/de/docs/typescript/functions' target='_blank'>Lösung</a></p>", [`<function funktionsname() >`, `<var = globalen Scope, let und const = lokalen Scope>`, `<try {} catch(error) {}>`]),
    new Question("random", "Wie kann man ein Interface in TypeScript erstellen?", "&lt;interface interfacename {}&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://runebook.dev/de/docs/typescript/interfaces' target='_blank'>Lösung</a></p>", [`<interface interfacename {}>`, `<var = globalen Scope, let und const = lokalen Scope>`, `<try {} catch(error) {}>`]),
    new Question("random", "Wie kann man eine Klasse in TypeScript erstellen?", "&lt;class classname {}&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://www.youtube.com/watch?v=TitI78lrqPs' target='_blank'>Lösung</a></p>", [`<interface interfacename {}>`, `<var = globalen Scope, let und const = lokalen Scope>`, `<class classname {}>`]),
    new Question("random", "Wie kann man einen Fehler in TypeScript abfangen?", "&lt;try {} catch(error) {}&gt;", "<p>Das hier ist eine Erklärung mit einem Link: <a href='https://entwickler.de/javascript/error-handling-in-javascript' target='_blank'>Lösung</a></p>", [`<interface interfacename {}>`, `<try {} catch(error) {}>`, `<try {} catch(error) {}>`]),
];


const select = document.getElementById("select-options");
//verbindung zu der HTML Datei
const answerOptions: HTMLOptionElement[] = [
    document.createElement("option"),
    document.createElement("option"),
    document.createElement("option"),
]

let score = 0; //speichert Punktestand
let currentQuestion: Question | null = null; //speichert die aktuelle Frage
let currentQuestionnaire: Question[] | null = null;
const scoreBar = document.getElementById("score");
const definitionContainer = document.getElementById("definition-container");
const answerButton = document.getElementById("answer");


function displayQuestion(question: Question) {
    const questionElement = document.getElementById("question");
    questionElement.innerText = question.question;

    definitionContainer.style.display = "none";
    answerButton.style.display = "block";

    //zufällige Antwortmöglichkeiten (richtige Antwort wird nicht nochmal ausgegeben)
    const randomQuestionIndex = Math.floor(Math.random() * answerOptions.length);
    answerOptions[randomQuestionIndex].value = answerOptions[randomQuestionIndex].innerHTML = question.answer;
    select.appendChild(answerOptions[randomQuestionIndex]);
    for (let i = 0; i < answerOptions.length; i++) {
        if (i == randomQuestionIndex) {

        } else {

            let randomAnswerIndex = Math.floor(Math.random() * currentQuestionnaire.length);
            if (randomAnswerIndex == randomQuestionIndex) {
                randomAnswerIndex = randomAnswerIndex + 1;
                if (randomAnswerIndex >= currentQuestionnaire.length) {
                    randomAnswerIndex = 0;
                }
            }
            answerOptions[i].value = answerOptions[i].innerHTML = currentQuestionnaire[randomAnswerIndex].answer;
            select.appendChild(answerOptions[i]);
        }
    }
}

function getQuestion(topic: string) {
    let possibleQuestions: Question[];
    switch (topic) {
        case "random":
            possibleQuestions = randomQuestions;
            break;
        case "css":
            possibleQuestions = cssQuestions;
            break;
        case "typescript":
            possibleQuestions = typescriptQuestions;
            break;
        case "html":
            possibleQuestions = htmlQuestions;
            break;
        default:
            possibleQuestions = htmlQuestions;
            break;
    }
    if (possibleQuestions.length === 0) {
        console.log("Es gibt keine Fragen zu diesem Thema mehr");
        return null;
    }
    const randomIndex = Math.floor(Math.random() * possibleQuestions.length);
    currentQuestion = possibleQuestions[randomIndex];
    currentQuestionnaire = possibleQuestions;
    displayQuestion(possibleQuestions[randomIndex]);
}


function checkAnswer(answer: string) {
    if (!currentQuestion) {
        return;
    }
    if (answer === currentQuestion.answer) {
        score = score + 20;
        alert(`Richtig! Ihr aktueller Score ist ${score}`);
        if (updateScore() == true) {
            return;
        };

        // löschen der schon richtig beantworteten Frage aus dem Fragenkatalog
        removeQuestion(currentQuestionnaire, currentQuestion);

        // Get the next Question
        getQuestion(currentQuestion.topic);
    } else {
        alert(`Falsch! Die richtige Antwort ist ${currentQuestion.answer}`);
        document.getElementById("definition").innerHTML = currentQuestion.definition;
        definitionContainer.style.display = "block";
        answerButton.style.display = "none";
    }
}

function removeQuestion(_array: Question[], _question: Question) {
    const index = _array.indexOf(_question);
    _array.splice(index, 1);
}

/**
 * 
 * @returns gibt true zuück, wenn man gewonnen hat und false, wenn man noch keine 5 Punkte erreicht hat
 */
function updateScore(): boolean {
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
        scoreElement.innerText = `${score / 20}/5`;
    }
    const scoreBar: HTMLDivElement = document.querySelector(".score-bar");
    if (scoreBar) {
        scoreBar.style.width = `${score}%`;
    }
    if (score == 100) {
        alert(`Sie haben gewonnen!`);
        return true;
    }
    return false;
}

function resetTest() {
    score = 0;
    updateScore();
}

getQuestion("html");