

interface todo{
    text: string;
    checked: boolean;
};

let todos: todo [] = [
    { text: "Lorem",
    checked: true,
},
{
    text: "Ipsum",
    checked: false,
},
{
    text: "Dolor",
    checked: false,
},
]


var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;


window.addEventListener("load", function(): void {


    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");


    addButtonDOMElement.addEventListener("click", addTodo);


    drawListToDOM();
});

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";


    for (let index: number = 0; index < todos.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + todos[index].checked + "'><i class='fas fa-check'></i></span>"
                            + todos[index].text +
                            "<span class='trash fas fa-trash-alt'></span>";


        todo.querySelector(".check").addEventListener("click", function(): void {

            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {

            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = todos.length + " in total";
}

function addTodo(): void {
    if (inputDOMElement.value != "") {
        const newtodo: todo ={
            text: inputDOMElement.value,
            checked: false,

        };
        todos.unshift(newtodo);
        inputDOMElement.value = "";

        
        drawListToDOM();
    }
}


function toggleCheckState(index: number): void {


    todos[index].checked = !todos[index].checked;

    
    drawListToDOM();
}

function deleteTodo(index: number): void {
    todos.splice(index, 1);
    drawListToDOM();
}