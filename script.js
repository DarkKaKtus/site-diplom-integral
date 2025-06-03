function checkAnswer(button, status) {
    if (status === 'correct') {
        button.style.backgroundColor = 'green';
    } else {
        button.style.backgroundColor = 'red';
    }
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    if (event.target.tagName === "UL") {
        event.target.appendChild(draggedElement);
    } else if (event.target.tagName === "LI") {
        event.target.parentNode.insertBefore(draggedElement, event.target.nextSibling);
    }
}

// Новый порядок для проверки перетаскивания (Task 4)
function checkTask4() {
    const items = document.querySelectorAll("#sortable li");
    const correctOrder = ["drag2", "drag1", "drag3"]; // Новый правильный порядок

    const isCorrect = Array.from(items).every((item, index) => item.id === correctOrder[index]);
    const feedback = document.getElementById("task4Feedback");

    if (isCorrect) {
        feedback.textContent = "Правильный порядок!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Неверный порядок, попробуйте снова.";
        feedback.style.color = "red";
    }
}

// Проверка выбора нескольких правильных вариантов (Task 5)
function checkTask5() {
    const option1 = document.getElementById("option1").checked;
    const option2 = document.getElementById("option2").checked;
    const option3 = document.getElementById("option3").checked;
    const option4 = document.getElementById("option4").checked;
    const feedback = document.getElementById("task5Feedback");

    if (option1 && option3 && option4 && !option2) {
        feedback.textContent = "Верно!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Неправильно, попробуйте ещё раз.";
        feedback.style.color = "red";
    }
}

let currentTaskIndex = 0;
const tasks = document.querySelectorAll(".task");

// Новый переход между заданиями + анимация
function showNextTask() {
    if (currentTaskIndex < tasks.length - 1) {
        tasks[currentTaskIndex].classList.add("hidden");
        currentTaskIndex++;
        tasks[currentTaskIndex].classList.remove("hidden");
        animateTask(tasks[currentTaskIndex]);
        scrollToTop();
        updateNavigationButtons();
    } else {
        alert("Вы завершили все задания!");
    }
}

function showPrevTask() {
    if (currentTaskIndex > 0) {
        tasks[currentTaskIndex].classList.add("hidden");
        currentTaskIndex--;
        tasks[currentTaskIndex].classList.remove("hidden");
        animateTask(tasks[currentTaskIndex]);
        scrollToTop();
        updateNavigationButtons();
    } else {
        alert("Это первое задание!");
    }
}

// Анимация появления задания
function animateTask(task) {
    task.style.opacity = 0;
    setTimeout(() => {
        task.style.transition = "opacity 0.6s ease";
        task.style.opacity = 1;
    }, 100);
}

// Плавная прокрутка наверх
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

let selectedItem = null;
let connections = [];

function selectItem(element) {
    if (selectedItem) {
        if (selectedItem.dataset.side === element.dataset.side) {
            // Если выбраны элементы с одной стороны, сбрасываем выбор
            selectedItem = element;
            return;
        }

        connectItems(selectedItem, element);
        selectedItem = null;
    } else {
        selectedItem = element;
    }
}

function connectItems(fromElement, toElement) {
    if (fromElement.dataset.side === "left") {
        var leftElement = fromElement;
        var rightElement = toElement;
    } else {
        var leftElement = toElement;
        var rightElement = fromElement;
    }

    // Удалить старую связь, если она есть для этого элемента
    connections = connections.filter(conn => conn.left !== leftElement.id);

    // Добавить новую связь
    connections.push({ left: leftElement.id, right: rightElement.id });

    drawConnections();
}

function drawConnections() {
    const svg = document.getElementById("connections");
    svg.innerHTML = ""; // Очищаем все старые линии

    connections.forEach(({ left, right }) => {
        const fromElement = document.getElementById(left);
        const toElement = document.getElementById(right);

        if (fromElement && toElement) {
            const fromRect = fromElement.getBoundingClientRect();
            const toRect = toElement.getBoundingClientRect();

            const fromX = fromRect.right + window.scrollX;
            const fromY = fromRect.top + fromRect.height / 2 + window.scrollY;
            const toX = toRect.left + window.scrollX;
            const toY = toRect.top + toRect.height / 2 + window.scrollY;

            const arrow = document.createElementNS("http://www.w3.org/2000/svg", "line");
            arrow.setAttribute("x1", fromX);
            arrow.setAttribute("y1", fromY);
            arrow.setAttribute("x2", toX);
            arrow.setAttribute("y2", toY);
            arrow.setAttribute("stroke", "#007bff");
            arrow.setAttribute("stroke-width", "2");
            svg.appendChild(arrow);
        }
    });
}

// Новая проверка правильности соединений
function checkTask2() {
    const correctConnections = [
        { left: "item1", right: "target1" },
        { left: "item2", right: "target2" },
        { left: "item3", right: "target3" }
    ];

    let isCorrect = correctConnections.every(expectedConn => {
        return connections.some(actualConn => actualConn.left === expectedConn.left && actualConn.right === expectedConn.right);
    });

    const feedback = document.getElementById("task2Feedback");
    if (isCorrect && connections.length === correctConnections.length) {
        feedback.textContent = "Соединено правильно!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Ошибки в соединении!";
        feedback.style.color = "red";
    }
}

// Сброс всех соединений
function resetConnections() {
    connections = [];
    const svg = document.getElementById("connections");
    svg.innerHTML = "";
}


// Проверка ввода численного значения для Task 3
function checkTask3() {
    const userInput = document.getElementById("task3Input").value.trim();
    const correctAnswer = "1"; // Результат интеграла ∫₀¹ 3x² dx = 1
    const feedback = document.getElementById("task3Feedback");

    if (userInput === correctAnswer) {
        feedback.textContent = "Верно!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Неверно, попробуйте ещё раз.";
        feedback.style.color = "red";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const pageTitle = document.getElementById("pageTitle");
    const pageIcon = document.getElementById("pageIcon");
    const pageName = document.getElementById("pageName");

    const pages = {
        "zadaniya.html": { title: "Задания", icon: "icons/zadaniya.png" },
        "theory.html": { title: "Теория", icon: "icons/theory.png" },
        "tests.html": { title: "Тесты", icon: "icons/exam.png" },
        "info.html": { title: "О тетради", icon: "icons/tetrad.png" },
        "glossary.html": { title: "Глоссарий", icon: "icons/dictionary.png" },
        "videos.html": { title: "Видео", icon: "icons/video.png" }
    };

    const currentPage = window.location.pathname.split("/").pop().split("?")[0];


    if (pages[currentPage]) {
        pageIcon.src = pages[currentPage].icon;
        pageName.textContent = pages[currentPage].title;
    } else {
        pageIcon.src = "icons/main.png";
        pageName.textContent = "Главная";
    }

    setTimeout(() => {
        pageTitle.classList.add("show");
    }, 200);

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            pageTitle.classList.add("hidden");
        } else {
            pageTitle.classList.remove("hidden");
        }
        lastScrollY = window.scrollY;
    });

    updateNavigationButtons();
});

function updateNavigationButtons() {
    const prevButton = document.getElementById("prevTaskButton");
    const nextButton = document.getElementById("nextTaskButton");

    if (currentTaskIndex === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (currentTaskIndex === tasks.length - 1) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("introOverlay");
    const startButton = document.getElementById("startButton");
    const introContent = document.querySelector(".intro-content");

    // Добавляем класс animate-in с задержкой, чтобы сработал transition
    setTimeout(() => {
        introContent.classList.add("animate-in");
    }, 100);

    startButton.addEventListener("click", () => {
        overlay.classList.add("slide-out");

        setTimeout(() => {
            overlay.style.display = "none";
        }, 1300);
    });
});


// Данные с примерами заданий (можно заменить или расширить)
const allVariants = {
    1: [
        `<div class="task" data-type="match" data-answers="a1-1,a2-2,a3-3">
            <p>Соедините интегралы с их значениями:</p>
            <div class="match-task">
                <div class="match-left">
                    <div class="match-item" data-id="a1">∫x dx</div>
                    <div class="match-item" data-id="a2">∫cos(x) dx</div>
                    <div class="match-item" data-id="a3">∫1/x dx</div>
                </div>
                <div class="match-right">
                    <div class="match-item" data-id="1">x²/2 + C</div>
                    <div class="match-item" data-id="2">sin(x) + C</div>
                    <div class="match-item" data-id="3">ln|x| + C</div>
                </div>
        </div></div>`,

        `<div class="task" data-type="choice" data-answers="b2">
            <p>Чему равен неопределённый интеграл ∫2x dx?</p>
            <div class="choice-options">
                <label><input type="radio" name="b" value="b1"> x² + C</label><br>
                <label><input type="radio" name="b" value="b2"> x² + C</label><br>
                <label><input type="radio" name="b" value="b3"> 2x² + C</label>
            </div>
        </div>`,

        `<div class="task" data-type="order" data-answers="c1,c2,c3">
            <p>Упорядочите шаги вычисления ∫(3x² + 2x + 1) dx:</p>
            <ul class="order-task" data-id="c">
                <li data-id="c2">Интегрируем каждый член: ∫3x² dx + ∫2x dx + ∫1 dx</li>
                <li data-id="c3">Находим первообразные: x³ + x² + x + C</li>
                <li data-id="c1">Записываем исходный интеграл</li>
            </ul>
        </div>`,

        `<div class="task" data-type="multi" data-answers="d1,d3">
            <p>Какие из следующих выражений являются первообразными функции f(x) = x?</p>
            <div class="multi-options">
                <label><input type="checkbox" value="d1"> x²/2 + C</label><br>
                <label><input type="checkbox" value="d2"> x³/3 + C</label><br>
                <label><input type="checkbox" value="d3"> ∫x dx</label>
            </div>
        </div>`,

        `<div class="task" data-type="choice" data-answers="e1">
            <p>Чему равен интеграл ∫0^π sin(x) dx?</p>
            <div class="choice-options">
                <label><input type="radio" name="e" value="e1"> 2</label><br>
                <label><input type="radio" name="e" value="e2"> 0</label><br>
                <label><input type="radio" name="e" value="e3"> 1</label>
            </div>
        </div>`
    ]
    ,2: [
        `<div class="task" data-type="match" data-answers="a1-1,a2-2,a3-3">
  <p>Соедините интегралы с их значениями:</p>
  <div class="match-task">
    <div class="match-left">
      <div class="match-item" data-id="a1" draggable="true" ondragstart="dragStart(event)">∫x dx</div>
      <div class="match-item" data-id="a2" draggable="true" ondragstart="dragStart(event)">∫cos(x) dx</div>
      <div class="match-item" data-id="a3" draggable="true" ondragstart="dragStart(event)">∫1/x dx</div>
    </div>
    <div class="match-right">
      <div class="match-item" data-id="1" ondrop="drop(event)" ondragover="allowDrop(event)">x²/2 + C</div>
      <div class="match-item" data-id="2" ondrop="drop(event)" ondragover="allowDrop(event)">sin(x) + C</div>
      <div class="match-item" data-id="3" ondrop="drop(event)" ondragover="allowDrop(event)">ln|x| + C</div>
    </div>
  </div>
</div>
`,

        `<div class="task" data-type="choice" data-answers="b2">
            <p>Чему равен неопределённый интеграл ∫2x dx?</p>
            <div class="choice-options">
                <label><input type="radio" name="b" value="b1"> x² + C</label><br>
                <label><input type="radio" name="b" value="b2"> x² + C</label><br>
                <label><input type="radio" name="b" value="b3"> 2x² + C</label>
            </div>
        </div>`,

        `<div class="task" data-type="order" data-answers="c1,c2,c3">
            <p>Упорядочите шаги вычисления ∫(3x² + 2x + 1) dx:</p>
            <ul class="order-task" data-id="c">
                <li data-id="c2">Интегрируем каждый член: ∫3x² dx + ∫2x dx + ∫1 dx</li>
                <li data-id="c3">Находим первообразные: x³ + x² + x + C</li>
                <li data-id="c1">Записываем исходный интеграл</li>
            </ul>
        </div>`,

        `<div class="task" data-type="multi" data-answers="d1,d3">
            <p>Какие из следующих выражений являются первообразными функции f(x) = x?</p>
            <div class="multi-options">
                <label><input type="checkbox" value="d1"> x²/2 + C</label><br>
                <label><input type="checkbox" value="d2"> x³/3 + C</label><br>
                <label><input type="checkbox" value="d3"> ∫x dx</label>
            </div>
        </div>`,

        `<div class="task" data-type="choice" data-answers="e1">
            <p>Чему равен интеграл ∫0^π sin(x) dx?</p>
            <div class="choice-options">
                <label><input type="radio" name="e" value="e1"> 2</label><br>
                <label><input type="radio" name="e" value="e2"> 0</label><br>
                <label><input type="radio" name="e" value="e3"> 1</label>
            </div>
        </div>`
    ]   
};

function selectVariant(num) {
    document.getElementById("variantSelection").style.display = "none";
    document.getElementById("pageTitle").style.display = "none";
    document.getElementById("variantTasks").style.display = "block";

    const container = document.getElementById("tasksContainer");
    container.innerHTML = ""; // очищаем

    const tasks = allVariants[num];
    tasks.forEach((text, index) => {
        const div = document.createElement("div");
        div.className = "task-card";
        div.innerHTML = `<h3>Задание ${index + 1}</h3><p>${text}</p>`;
        container.appendChild(div);
    });

    // Добавляем кнопку ОДИН РАЗ после всех заданий
    const checkButton = document.createElement("button");
    checkButton.textContent = "Проверить ответы";
    checkButton.onclick = checkAnswers;
    checkButton.className = "check-button"; // для стилей
    container.appendChild(checkButton);

    enableInteractions();
    function allowDrop(event) {
    event.preventDefault();
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.dataset.id);
    event.dataTransfer.setData("source", "left");
}

function drop(event) {
    event.preventDefault();
    const sourceId = event.dataTransfer.getData("text");
    const sourceSide = event.dataTransfer.getData("source");

    if (sourceSide === "left") {
        const target = event.target;
        if (!target.classList.contains("match-item")) return;

        const leftItem = document.querySelector(`.match-left .match-item[data-id="${sourceId}"]`);
        if (leftItem) {
            // Удалим старые связи
            const allLeftItems = document.querySelectorAll(".match-left .match-item");
            allLeftItems.forEach(item => {
                if (item.dataset.match === target.dataset.id) {
                    delete item.dataset.match;
                }
            });

            // Назначим связь
            leftItem.dataset.match = target.dataset.id;

            // Обновим визуально
            target.innerHTML = target.textContent + ` <span class="linked">(← ${leftItem.textContent})</span>`;
        }
    }
}

}


function backToVariants() {
    document.getElementById("variantSelection").style.display = "block";
    document.getElementById("pageTitle").style.display = "block";
    document.getElementById("variantTasks").style.display = "none";
}

function checkAnswers() {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach(task => {
        task.classList.remove("correct", "incorrect");
        const type = task.dataset.type;
        const correct = task.dataset.answers.split(",");
        let userAnswer = [];

        if (type === "choice") {
            const selected = task.querySelector("input[type='radio']:checked");
            if (selected) userAnswer = [selected.value];
        }

        if (type === "multi") {
            const selected = task.querySelectorAll("input[type='checkbox']:checked");
            userAnswer = Array.from(selected).map(c => c.value).sort();
        }

        if (type === "order") {
            const items = task.querySelectorAll("ul.order-task li");
            userAnswer = Array.from(items).map(i => i.dataset.id);
        }

        if (type === "match") {
            const pairs = task.querySelectorAll(".match-left .match-item");
            userAnswer = Array.from(pairs).map(p => {
                const id = p.dataset.id;
                const match = p.getAttribute("data-match");
                return match ? `${id}-${match}` : "";
            }).filter(Boolean).sort();
        }


        const isCorrect = userAnswer.join(",") === correct.sort().join(",");
        task.classList.add(isCorrect ? "correct" : "incorrect");
    });
}
// Drag & Drop для match и order
function enableInteractions() {
    // MATCH: соединение
    const matchItemsLeft = document.querySelectorAll(".match-left .match-item");
    const matchItemsRight = document.querySelectorAll(".match-right .match-item");

    matchItemsRight.forEach(item => {
        item.setAttribute("draggable", "true");
        item.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text/plain", item.dataset.id);
        });
    });

    matchItemsLeft.forEach(item => {
        item.addEventListener("dragover", e => e.preventDefault());
        item.addEventListener("drop", e => {
            e.preventDefault();
            const matchId = e.dataTransfer.getData("text/plain");
            item.setAttribute("data-match", matchId);
            item.textContent = `${item.textContent.split(" ⟶")[0]} ⟶ ${document.querySelector(".match-right .match-item[data-id='" + matchId + "']").textContent}`;
        });
    });

    // ORDER: перетаскивание
    const orderLists = document.querySelectorAll(".order-task");
    orderLists.forEach(list => {
        list.querySelectorAll("li").forEach(li => {
            li.setAttribute("draggable", "true");
            li.addEventListener("dragstart", e => {
                e.dataTransfer.setData("text/plain", li.dataset.id);
                li.classList.add("dragging");
            });
            li.addEventListener("dragend", () => li.classList.remove("dragging"));
        });

        list.addEventListener("dragover", e => e.preventDefault());
        list.addEventListener("drop", e => {
            e.preventDefault();
            const draggingId = e.dataTransfer.getData("text/plain");
            const draggingEl = list.querySelector(`li[data-id='${draggingId}']`);
            const target = e.target.closest("li");
            if (target && target !== draggingEl) {
                const children = Array.from(list.children);
                const targetIndex = children.indexOf(target);
                const draggingIndex = children.indexOf(draggingEl);
                if (draggingIndex < targetIndex) {
                    list.insertBefore(draggingEl, target.nextSibling);
                } else {
                    list.insertBefore(draggingEl, target);
                }
            }
        });
    });
}

    document.addEventListener("DOMContentLoaded", function() {

      // Функция для получения значения куки по имени
      function getCookie(name) {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
      }

      // Функция для установки куки
      function setCookie(name, value, days) {
        let expires = "";
        if (days) {
          const date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
      }

      // Если куки установлено, скрываем блок introOverlay
      if (getCookie("introShown")) {
        const introOverlay = document.getElementById("introOverlay");
        if (introOverlay) {
          introOverlay.style.display = "none";
        }
      } else {
        // Если куки нет – назначаем обработчик на кнопку "Начать"
        const startButton = document.getElementById("startButton");
        if (startButton) {
          startButton.addEventListener("click", function() {
            const introOverlay = document.getElementById("introOverlay");
            if (introOverlay) {
              introOverlay.style.display = "none";
            }
            // Сохраняем куки, чтобы блок не показывался снова (на 30 дней)
            setCookie("introShown", "true", 30);
          });
        }
      }
    });