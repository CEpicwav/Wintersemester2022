window.addEventListener("load", function () {
    let index = 0;
    let input = document.querySelector("#textfield");
    document.querySelector("#btn").addEventListener("click", newTask);
    function newTask() {
        index++;
        document.querySelector("#todoAmount").innerHTML = String(index + " insgesamt");
        let eingabefeld = document.createElement("p");
        eingabefeld.innerHTML = input.value;
        input.value = "";
        let task = document.getElementById("task");
        let check = document.createElement("div");
        let trash = document.createElement("div");
        let wrapper = document.createElement("div");
        wrapper.textContent = "";
        task.appendChild(wrapper);
        wrapper.appendChild(eingabefeld);
        wrapper?.appendChild(check);
        wrapper?.appendChild(trash);
        task?.appendChild(wrapper);
        eingabefeld.id = "eingabe";
        wrapper.id = "neuesDiv";
        check.className = "far fa-circle";
        trash.className = "fas fa-trash";
        window.addEventListener("load", function () {
            inputDOMElement = document.querySelector("#inputTodo");
            addButtonDOMElement = document.querySelector("#addButton");
            todosDOMElement = document.querySelector("#todos");
            counterDOMElement = document.querySelector("#counter");
            addButtonDOMElement.addEventListener("click", addTodo);
            drawListToDOM();
        });
        check.addEventListener("click", erledigteToDos);
        function erledigteToDos() {
            if (check.getAttribute("class") == "far fa-check-circle") {
                check.setAttribute("class", "far fa-circle");
            }
            else {
                check.setAttribute("class", "far fa-check-circle");
            }
        }
        trash.addEventListener("click", deleteToDo);
        function deleteToDo() {
            wrapper.parentElement.removeChild(wrapper);
            index--;
            document.querySelector("#todoAmount").innerHTML = String(index + " in total");
        }
    }
    document.addEventListener("keydown", function (event) {
        if (event.key == "Enter") {
            newTask();
        }
    });
});
//# sourceMappingURL=script.js.map