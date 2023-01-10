;
let todos = [
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
];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    for (let index = 0; index < todos.length; index++) {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todos[index].checked + "'><i class='fas fa-check'></i></span>"
            + todos[index].text +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }
    updateCounter();
}
function updateCounter() {
    counterDOMElement.innerHTML = todos.length + " in total";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        const newtodo = {
            text: inputDOMElement.value,
            checked: false,
        };
        todos.unshift(newtodo);
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    todos[index].checked = !todos[index].checked;
    drawListToDOM();
}
function deleteTodo(index) {
    todos.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=script.js.map