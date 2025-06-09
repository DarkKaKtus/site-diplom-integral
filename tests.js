const tests = {
    // Тест на основные свойства интегралов
    basic: [
        { 
            question: "Чему равен ∫ dx?", 
            answers: ["x + C", "1 + C", "C"], 
            correct: 0 
        },
        { 
            question: "Чему равен ∫ 2x dx?", 
            answers: ["x² + C", "2x + C", "x + C"], 
            correct: 0 
        },
        { 
            question: "Чему равен ∫ cos(x) dx?", 
            answers: ["sin(x) + C", "-sin(x) + C", "cos(x) + C"], 
            correct: 0 
        },
    ],
    
    // Тест на элементарные функции
    elementary: [
        { 
            question: "Чему равен ∫ e^x dx?", 
            answers: ["e^x + C", "ln(x) + C", "x e^x + C"], 
            correct: 0 
        },
        { 
            question: "Чему равен ∫ 1/x dx?", 
            answers: ["ln|x| + C", "x ln(x) + C", "x + C"], 
            correct: 0 
        },
        { 
            question: "Чему равен ∫ sin(x) dx?", 
            answers: ["-cos(x) + C", "cos(x) + C", "sin(x) + C"], 
            correct: 0 
        },
    ],

    // Тест на интегрирование по частям
    parts: [
        { 
            question: "Какой результат при интегрировании ∫ x * e^x dx?", 
            answers: ["x * e^x - e^x + C", "x * e^x + e^x + C", "e^x + x^2 + C"], 
            correct: 0 
        },
        { 
            question: "Какой результат при интегрировании ∫ x * sin(x) dx?", 
            answers: ["-x * cos(x) + sin(x) + C", "x * cos(x) - sin(x) + C", "x * cos(x) + sin(x) + C"], 
            correct: 0 
        },
    ],

    // Тест на замену переменных
    substitution: [
        { 
            question: "Чему равен ∫ (2x) * sqrt(1 + x^2) dx при замене t = 1 + x^2?", 
            answers: ["sqrt(1 + x^2)^3 / 3 + C", "(1 + x^2)^(3/2) / 3 + C", "(1 + x^2)^2 + C"], 
            correct: 1 
        },
        { 
            question: "Какое выражение поддается замене переменной в ∫ 2x / sqrt(1 + x^2) dx?", 
            answers: ["1 / sqrt(1 + x^2) + C", "ln(1 + x^2) + C", "sqrt(1 + x^2) + C"], 
            correct: 0 
        },
    ],

    // Тест на несобственные интегралы
    improper: [
        { 
            question: "Чему равен ∫(1/x) dx от 1 до ∞?", 
            answers: ["ln(x) от 1 до ∞", "lim x→∞ ln(x) - ln(1)", "∞"], 
            correct: 1 
        },
        { 
            question: "Как решить ∫ 1 / (x^2) dx от 1 до ∞?", 
            answers: ["lim x→∞ [-1/x] от 1 до ∞", "ln(x) от 1 до ∞", "lim x→∞ [-x^2] от 1 до ∞"], 
            correct: 0 
        },
    ],

    // Тест на двойные интегралы
    double: [
        { 
            question: "Как выглядит двойной интеграл для области, ограниченной x от 0 до 1 и y от 0 до x?", 
            answers: ["∫∫ 1 dy dx", "∫∫ x dy dx", "∫∫ x^2 dy dx"], 
            correct: 0 
        },
        { 
            question: "Как вычислить ∫∫ (x^2 + y^2) dxdy для области, ограниченной x от 0 до 1 и y от 0 до 1?", 
            answers: ["∫∫ (x^2 + y^2) dxdy = 1", "∫∫ (x^2 + y^2) dxdy = 1/3", "∫∫ (x^2 + y^2) dxdy = 2/3"], 
            correct: 2 
        },
    ],
};

let currentTest = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = [];

function startTest(testName) {
    // Скрыть выбор тестов
    document.getElementById("test-selection").classList.add("hidden");

    // Скрыть все тесты (кнопки выбора)
    document.querySelectorAll(".test-btn").forEach(button => {
        button.classList.add("hidden");
    });

    currentTest = tests[testName];
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = [];

    // Показать выбранный тест
    const testContainer = document.getElementById("test-container");
    testContainer.classList.remove("hidden");

    // Обновляем стили контейнера, чтобы он был по центру
    testContainer.style.display = "block"; // Гарантируем отображение

    showQuestion();
}

function showQuestion() {
    const questionData = currentTest[currentQuestionIndex];
    const questionDiv = document.getElementById("question");
    const answersDiv = document.getElementById("answers");
    const resultDiv = document.getElementById("result");

    questionDiv.innerHTML = questionData.question;
    answersDiv.innerHTML = "";
    resultDiv.classList.add("hidden");

    questionData.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.classList.add("answer");
        button.innerText = answer;
        button.onclick = () => checkAnswer(index);
        answersDiv.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const questionData = currentTest[currentQuestionIndex];
    const answerButtons = document.querySelectorAll(".answer");

    answerButtons.forEach((btn, index) => {
        if (index === questionData.correct) {
            btn.classList.add("correct");
        } 
        if (index === selectedIndex && index !== questionData.correct) {
            btn.classList.add("incorrect");
        }
        btn.onclick = null; // отключить дальнейшие клики
    });

    if (selectedIndex === questionData.correct) {
        correctAnswers++;
    } else {
        incorrectAnswers.push({
            question: questionData.question,
            correctAnswer: questionData.answers[questionData.correct],
        });
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentTest.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

function showResult() {
    document.getElementById("question").innerHTML = `Ваш результат: ${correctAnswers} из ${currentTest.length}`;
    document.getElementById("answers").innerHTML = "";

    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");

    let resultHTML = "<h3>Ошибки:</h3>";
    if (incorrectAnswers.length === 0) {
        resultHTML += "<p>Отлично! Все ответы правильные!</p>";
    } else {
        incorrectAnswers.forEach(item => {
            resultHTML += `<p><strong>Вопрос:</strong> ${item.question}<br><strong>Правильный ответ:</strong> ${item.correctAnswer}</p>`;
        });
    }

    resultDiv.innerHTML = resultHTML;

}

function startTest(testName) {
    // Скрыть все тесты
    document.querySelectorAll(".test-btn").forEach(button => {
        button.classList.add("hidden");
    });

    currentTest = tests[testName];
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = [];

    // Скрыть выбор тестов
    document.getElementById("test-selection").classList.add("hidden");

    // Показать выбранный тест
    const testContainer = document.getElementById("test-container");
    testContainer.classList.remove("hidden");

    // Обновляем стили контейнера, чтобы он был по центру
    testContainer.style.display = "block"; // Гарантируем отображение

    showQuestion();
}


