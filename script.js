

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
    `<iframe src="https://learningapps.org/watch?v=pvy8327gj25" style="border:0;width:100%;height:500px" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>`
  ],
  2: [
    `<iframe src="https://learningapps.org/watch?app=16240158" style="border:0px;width:100%;height:500px" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>`
  ],
    3: [
    `<iframe src="https://learningapps.org/watch?app=16240158" style="border:0px;width:100%;height:500px" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>`
  ],
    4: [
    `<iframe src="https://learningapps.org/watch?app=16240158" style="border:0px;width:100%;height:500px" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>`
  ],
    3: [
    `<iframe src="https://learningapps.org/watch?app=16240158" style="border:0px;width:100%;height:500px" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>`
  ],
};

function selectVariant(num) {
  // Скрываем экран выбора вариантов и показываем контейнер с заданием
  document.getElementById("variantSelection").style.display = "none";
  document.getElementById("variantTasks").style.display = "block";

  const container = document.getElementById("tasksContainer");
  container.innerHTML = ""; // Очищаем контейнер заданий

// Удаляем возможную ранее добавленную кнопку "Следующее задание"
const variantTasks = document.getElementById("variantTasks");
const existingNextButton = document.getElementById("nextTaskButton");
if (existingNextButton) existingNextButton.remove();

const tasks = allVariants[num];
tasks.forEach((htmlContent, index) => {
  // Создаем карточку задания без надписи "Задание"
  const taskCard = document.createElement("div");
  taskCard.className = "task-card mb-4";
  taskCard.innerHTML = htmlContent;
  container.appendChild(taskCard);
});

  // Если для текущего номера существует следующий вариант, добавляем кнопку "Следующее задание"
  if (allVariants[num + 1]) {
    // Находим кнопку "Назад" внутри контейнера variantTasks
    const backButton = variantTasks.querySelector("button[onclick='backToVariants()']");
    if (backButton) {
      const nextButton = document.createElement("button");
      nextButton.id = "nextTaskButton";
      nextButton.textContent = "Следующее задание →";
      nextButton.className = "btn btn-secondary mb-3"; // Класс ms-2 добавляет отступ слева
      nextButton.onclick = function () {
        selectVariant(num + 1);
      };
      // Вставляем кнопку после кнопки "Назад"
      backButton.insertAdjacentElement("afterend", nextButton);
    }
  }
}

function backToVariants() {
  document.getElementById("variantSelection").style.display = "block";
  document.getElementById("variantTasks").style.display = "none";
}
