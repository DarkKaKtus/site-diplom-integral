// Объект с данными тестов — два варианта, по 10 вопросов в каждом
const testsData = {
  variant1: {
    title: "Вариант 1. Основной тест по интегралам",
    questions: [
      {
        id: 1,
        question: "Что такое определённый интеграл?",
        choices: [
          "Предел суммы Римана при разбиении отрезка",
          "Метод нахождения первообразной",
          "Сумма бесконечно малых изменений функции",
          "Площадь области под кривой"
        ],
        answer: 0
      },
      {
        id: 2,
        question: "Какое свойство интеграла позволяет разделить интеграл по [a, b] на отрезки [a, c] и [c, b]?",
        choices: [
          "Линейность",
          "Аддитивность по промежутку",
          "Монотонность",
          "Дифференцируемость"
        ],
        answer: 1
      },
      {
        id: 3,
        question: "Что такое первообразная функции?",
        choices: [
          "Функция, производная которой равна данной функции",
          "Интеграл функции",
          "Обратная функция",
          "Функция, равная постоянной"
        ],
        answer: 0
      },
      {
        id: 4,
        question: "Какой метод используется для вычисления интеграла сложной функции?",
        choices: [
          "Метод интегрирования по частям",
          "Метод подстановки",
          "Метод деления",
          "Метод вероятностей"
        ],
        answer: 1
      },
      {
        id: 5,
        question: "Что означает линейность интеграла?",
        choices: [
          "Интеграл суммы равен сумме интегралов",
          "Интеграл произведения равен произведению интегралов",
          "Интеграл функции равен функции интеграла",
          "Интеграл константы равен нулю"
        ],
        answer: 0
      },
      {
        id: 6,
        question: "Какова роль теоремы Фундамента в интегральном исчислении?",
        choices: [
          "Связывает дифференцирование и интегрирование",
          "Обеспечивает правило замены переменной",
          "Гарантирует существование интеграла",
          "Делит область интегрирования"
        ],
        answer: 0
      },
      {
        id: 7,
        question: "Что является интерпретацией определённого интеграла в геометрии?",
        choices: [
          "Длина участка кривой",
          "Площадь под графиком",
          "Объём тела",
          "Центр масс"
        ],
        answer: 1
      },
      {
        id: 8,
        question: "При каких условиях выполняется теорема о среднем значении интеграла?",
        choices: [
          "Функция непрерывна на [a, b]",
          "Функция дифференцируема на [a, b]",
          "Функция равна нулю",
          "Функция ограничена"
        ],
        answer: 0
      },
      {
        id: 9,
        question: "Что такое неопределённый интеграл?",
        choices: [
          "Функция, производная которой равна данной, плюс константа",
          "Интеграл без указания пределов",
          "Интеграл с неопределёнными пределами",
          "Предел сумм Римана"
        ],
        answer: 0
      },
      {
        id: 10,
        question: "Какой принцип лежит в основе интегрирования по частям?",
        choices: [
          "Замена переменной",
          "Правило произведения для производных",
          "Правило суммы",
          "Элементарная функция"
        ],
        answer: 1
      }
    ]
  },
  variant2: {
    title: "Вариант 2. Дополнительный тест по интегралам",
    questions: [
      {
        id: 1,
        question: "Что иллюстрирует определённый интеграл?",
        choices: [
          "Площадь области под графиком",
          "Объём тела",
          "Длину дуги",
          "Предел суммы Римана"
        ],
        answer: 0
      },
      {
        id: 2,
        question: "Что такое первообразная функции?",
        choices: [
          "Функция, производная которой равна исходной",
          "Функция-решение дифференциального уравнения",
          "Результат интегрирования",
          "Функция, обратная исходной"
        ],
        answer: 0
      },
      {
        id: 3,
        question: "Какой метод упрощает вычисление сложных интегралов?",
        choices: [
          "Метод интегрирования по частям",
          "Метод подстановки",
          "Метод деления",
          "Метод экстраполяции"
        ],
        answer: 1
      },
      {
        id: 4,
        question: "Что означает свойство монотонности интеграла?",
        choices: [
          "Если функция неотрицательна, интеграл неотрицателен",
          "Интеграл суммы равен сумме интегралов",
          "Интеграл произведения равен произведению интегралов",
          "Ничего из перечисленного"
        ],
        answer: 0
      },
      {
        id: 5,
        question: "Как вычисляется интеграл функции, равной константе?",
        choices: [
          "Константа умноженная на длину интервала",
          "Константа плюс длина интервала",
          "Неверно",
          "Константа возводится в степень"
        ],
        answer: 0
      },
      {
        id: 6,
        question: "Какую роль играет аддитивность в интегральном исчислении?",
        choices: [
          "Разделение интервала интегрирования",
          "Сложение функций",
          "Объединение пределов",
          "Умножение интегралов"
        ],
        answer: 0
      },
      {
        id: 7,
        question: "Что показывает теорема Фундамента анализа?",
        choices: [
          "Связь интегрирования и дифференцирования",
          "Замена переменной",
          "Метод частного дифференцирования",
          "Интегральное уравнение"
        ],
        answer: 0
      },
      {
        id: 8,
        question: "Как называется интеграл без указания пределов интегрирования?",
        choices: [
          "Неопределённый интеграл",
          "Определённый интеграл",
          "Локализованный интеграл",
          "Инфинитезимальный интеграл"
        ],
        answer: 0
      },
      {
        id: 9,
        question: "Какова геометрическая интерпретация определённого интеграла?",
        choices: [
          "Площадь под кривой",
          "Объём твердого тела",
          "Длина линии",
          "Угловая мера"
        ],
        answer: 0
      },
      {
        id: 10,
        question: "Что позволяет применять метод интегрирования по частям?",
        choices: [
          "Выделить сложное произведение функций",
          "Найти первообразную",
          "Разделить интеграл на две части",
          "Определить константу интегрирования"
        ],
        answer: 0
      }
    ]
  }
};

// Глобальные переменные для отслеживания текущего состояния теста
let currentTest;
let currentQuestionIndex = 0;
let score = 0;
// Массив для сохранения ответов пользователя
let userAnswers = [];

// Функция для запуска теста выбранного варианта
function startTest(variant) {
  currentTest = testsData[variant];
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  document.getElementById('variant-selection').style.display = 'none';
  const testContainer = document.getElementById('test-container');
  testContainer.style.display = 'block';
  showQuestion();
}

// Функция для отображения текущего вопроса
function showQuestion() {
  const testContainer = document.getElementById('test-container');
  const currentQuestion = currentTest.questions[currentQuestionIndex];
  
  let html = "";
  // Кнопка "Назад к выбору вариантов"
  html += `<button type="button" class="btn btn-secondary mb-3" onclick="backToVariants()">← Назад к выбору вариантов</button>`;
  // Заголовок теста и номер текущего вопроса
  html += `<h3 class="mb-4">${currentTest.title}</h3>`;
  html += `<form id="questionForm">`;
  html += `<div class="mb-4">`;
  html += `<p><strong>Вопрос ${currentQuestionIndex + 1} из ${currentTest.questions.length}.</strong> ${currentQuestion.question}</p>`;
  
  currentQuestion.choices.forEach((choice, cIndex) => {
    const radioId = `q${currentQuestionIndex}_choice${cIndex}`;
    html += `<div class="form-check">
               <input class="form-check-input" type="radio" name="answer" id="${radioId}" value="${cIndex}">
               <label class="form-check-label" for="${radioId}">${choice}</label>
             </div>`;
  });
  
  html += `</div>`;
  // Если последний вопрос, меняем текст кнопки
  if (currentQuestionIndex < currentTest.questions.length - 1) {
    html += `<button type="submit" class="btn btn-primary">Далее</button>`;
  } else {
    html += `<button type="submit" class="btn btn-primary">Завершить тест</button>`;
  }
  html += `</form>`;
  
  testContainer.innerHTML = html;
  
  // Назначаем обработчик на форму вопроса
  document.getElementById('questionForm').addEventListener('submit', handleNext);
}

// Обработчик перехода к следующему вопросу
function handleNext(event) {
  event.preventDefault();
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert('Пожалуйста, выберите ответ');
    return;
  }
  
  const answer = parseInt(selected.value);
  // Сохраняем ответ пользователя для текущего вопроса
  userAnswers[currentQuestionIndex] = answer;
  
  // Проверка правильности ответа
  if (answer === currentTest.questions[currentQuestionIndex].answer) {
    score++;
  }
  
  currentQuestionIndex++;
  
  // Если ещё есть вопрос, показываем следующий, иначе — выводим результат
  if (currentQuestionIndex < currentTest.questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

// Функция для отображения результата теста и деталей неверных ответов
function showResults() {
  const testContainer = document.getElementById('test-container');
  let html = "";
  html += `<button type="button" class="btn btn-secondary mb-3" onclick="backToVariants()">← Назад к выбору вариантов</button>`;
  html += `<h3 class="mb-4">Результаты теста</h3>`;
  html += `<div class="alert alert-info">Ваш результат: ${score} из ${currentTest.questions.length}</div>`;
  
  // Перебираем вопросы и выводим информацию по тем, на которые ответили неверно
  let incorrectExists = false;
  html += `<div class="mt-4">`;
  html += `<h4>Ошибки:</h4>`;
  
  currentTest.questions.forEach((q, index) => {
    // Если ответ неверный (или не был дан)
    if (userAnswers[index] !== q.answer) {
      incorrectExists = true;
      // Определяем, какой вариант выбрал пользователь (если хоть что-то выбрано)
      const userChoice = (userAnswers[index] !== undefined) 
                         ? q.choices[userAnswers[index]] 
                         : "Без ответа";
      const correctChoice = q.choices[q.answer];
      
      html += `<div class="card mb-3">
                 <div class="card-body">
                   <p><strong>Вопрос ${index + 1}:</strong> ${q.question}</p>
                   <p><strong>Ваш ответ:</strong> ${userChoice}</p>
                   <p><strong>Правильный ответ:</strong> ${correctChoice}</p>
                 </div>
               </div>`;
    }
  });
  if (!incorrectExists) {
    html += `<p>Поздравляем, все ответы верны!</p>`;
  }
  html += `</div>`;
  
  testContainer.innerHTML = html;
}

// Функция возврата к выбору вариантов теста
function backToVariants() {
  document.getElementById('test-container').style.display = 'none';
  document.getElementById('variant-selection').style.display = 'block';
}
