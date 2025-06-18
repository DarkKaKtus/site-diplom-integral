const hero = document.getElementById("heroSection");

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


/* ---------- 1. Что рендерим ---------- */
const variantsMeta = [
  {id:1, tasks:1, title:"Вариант 1"},
  {id:2, tasks:1, title:"Вариант 2"},
  {id:3, tasks:1, title:"Вариант 3"},
  {id:4, tasks:1, title:"Вариант 4"},
  {id:5, tasks:1, title:"Вариант 5"},
  {id:6, tasks:1, title:"Вариант 6"},
  {id:7, tasks:1, title:"Вариант 7"},
  {id:8, tasks:1, title:"Вариант 8"},
  {id:9, tasks:1, title:"Вариант 9"},
  {id:10, tasks:1, title:"Вариант 10"},
];

/* ---------- 2. Карточки вместо кнопок ---------- */
function renderVariantCards(){
  const box=document.getElementById("variantSelection");
  variantsMeta.forEach(v=>{
    box.insertAdjacentHTML("beforeend",
    `<div class="col">
       <div class="card var-card h-100 border-0 shadow-sm card h-100 shadow-sm border-0 cursor-pointer"
            onclick="selectVariant(${v.id})">
         <div class="card-body d-flex flex-column justify-content-between">
           <h5 class="card-title mb-2">${v.title}</h5>
           <p class="small text-muted mb-0">${v.tasks} задан.</p>
         </div>
       </div>
     </div>`);
  });
}

/* ---------- 3. Ваш существующий код (чуть поправил) ---------- */
document.addEventListener("DOMContentLoaded", function(){
  /* … блок смены иконки страницы без изменений … */
  renderVariantCards();                 // ← добавили
  updateNavigationButtons();
});

/* ======== всё ниже – полностью ваш оригинальный код ========= */

function updateNavigationButtons() { /* … */ }

/* интро-overlay */ /* … без изменений … */

/* Данные с примерами заданий */
const allVariants = {
  1:[`<iframe src="tasks/number1/index.html"
              style="border:0;width:100%;height:500px" allowfullscreen></iframe>`],
  2:[`<iframe src="tasks/number2/index.html"
              style="border:0;width:100%;height:500px" allowfullscreen></iframe>`],
  3:[`<iframe src="tasks/number3/index.html"
              style="border:0;width:100%;height:500px" allowfullscreen></iframe>`],
  4:[`<iframe src="tasks/number4/index.html"
              style="border:0;width:100%;height:500px" allowfullscreen></iframe>`],
  5:[`<iframe src="tasks/number5/index.html"
              style="border:0;width:100%;height:500px" allowfullscreen></iframe>`],
  6:[`<iframe src="tasks/number6/index.html"
              style="border:0;width:100%;height:500px" allowfullscreen></iframe>`],
  7:[`<iframe src="tasks/number7/index.html"
              style="border:0;width:100%;height:500px" allowfullscreen></iframe>`],
  8:[`<iframe src="tasks/number8/index.html"
              style="border:0;width:100%;height:500px" allowfullscreen></iframe>`],
  9:[`<iframe src="tasks/number1/index.html"
              style="border:0;width:100%;height:500px" allowfullscreen></iframe>`],
  10:[`<iframe src="tasks/number2/index.html"
              style="border:0;width:100%;height:500px" allowfullscreen></iframe>`],
};

function selectVariant(num){
  hero.classList.add("d-none");
  document.getElementById("variantSelection").classList.add("visually-hidden");
  document.getElementById("variantTasks").classList.remove("visually-hidden");

  const container=document.getElementById("tasksContainer");
  container.innerHTML="";
  const tasks=allVariants[num]||[];

  // убираем старую кнопку «Следующее задание»
  const oldNext=document.getElementById("nextTaskButton");
  if(oldNext) oldNext.remove();

  tasks.forEach(html=>{
    const card=document.createElement("div");
    card.className="mb-4";
    card.innerHTML=html;
    container.appendChild(card);
  });

  // если есть ещё вариант – нарисуем «Следующее задание →»
  if(allVariants[num+1]){
    const backBtn=document.querySelector("#variantTasks button");
    const nextBtn=document.createElement("button");
    nextBtn.id="nextTaskButton";
    nextBtn.textContent="Следующее задание →";
    nextBtn.className="btn btn-secondary mb-3 ms-2";
    nextBtn.onclick=()=>selectVariant(num+1);
    backBtn.after(nextBtn);
  }
}

function backToVariants(){
  hero.classList.remove("d-none");
  document.getElementById("variantSelection").classList.remove("visually-hidden");
  document.getElementById("variantTasks").classList.add("visually-hidden");
}

/* плавный scroll по hash */
window.addEventListener("DOMContentLoaded",()=>{
  const hash=location.hash;
  if(hash){
    const t=document.querySelector(hash);
    if(t){
      t.scrollIntoView({behavior:"smooth"});
      t.style.backgroundColor="#ffffcc";
    }
  }
});




