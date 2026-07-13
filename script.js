const modules = [
  {
    title: "Foundations of Systems Administration",
    summary: "Systems theory, operating systems, enterprise infrastructure, and AWS foundations.",
    topics: [
      "Systems Theory",
      "Computer Systems and IT Infrastructure",
      "Operating Systems Fundamentals",
      "Client-Server Architecture",
      "Roles and Responsibilities of Systems Administrators",
      "AWS Global Infrastructure",
      "AWS Shared Responsibility Model"
    ],
    checks: [
      "Explain the principles, functions, and responsibilities of systems administration based on systems theory and operating system concepts.",
      "Differentiate traditional on-premises infrastructure from cloud-based infrastructure using AWS Global Infrastructure.",
      "Describe how AWS Regions and Availability Zones support distributed and resilient computing.",
      "Explain the AWS Shared Responsibility Model and its implications for cloud administration."
    ],
    quiz: {
      question: "What does the AWS Shared Responsibility Model define?",
      options: [
        "How security and operational responsibilities are divided between AWS and the customer",
        "How all security tasks are handled entirely by AWS",
        "How only on-premises infrastructure should be administered"
      ],
      answer: "How security and operational responsibilities are divided between AWS and the customer"
    }
  },
  {
    title: "Cloud Computing and Virtualization Fundamentals",
    summary: "Cloud models, distributed systems, virtualization, compute options, and AWS cost basics.",
    topics: [
      "Cloud Computing Models",
      "Distributed Systems",
      "Virtualization Theory",
      "Hypervisors",
      "Containers vs Virtual Machines",
      "AWS Compute Overview",
      "AWS Pricing and Billing"
    ],
    checks: [
      "Explain how distributed systems and virtualization enable cloud computing.",
      "Compare public, private, hybrid, and multi-cloud deployment models.",
      "Differentiate Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS) using AWS services.",
      "Analyze the organizational benefits, limitations, and trade-offs of cloud adoption.",
      "Interpret AWS pricing models and their implications for infrastructure planning."
    ],
    quiz: {
      question: "Which statement best distinguishes containers from virtual machines?",
      options: [
        "Containers share the host OS kernel, while virtual machines emulate full guest environments",
        "Virtual machines always cost less than containers",
        "Containers require their own hypervisor hardware"
      ],
      answer: "Containers share the host OS kernel, while virtual machines emulate full guest environments"
    }
  }
];

const flashcards = [
  {
    question: "What does the AWS Shared Responsibility Model define?",
    answer: "It divides security and operational responsibilities between AWS and the customer."
  },
  {
    question: "Why do Availability Zones matter?",
    answer: "They support resilience by distributing workloads across separate physical locations in a region."
  },
  {
    question: "How do virtualization and distributed systems support cloud computing?",
    answer: "They allow shared infrastructure, elastic scaling, and service delivery across many connected resources."
  },
  {
    question: "What is a key difference between containers and virtual machines?",
    answer: "Containers share the host OS kernel, while virtual machines run full guest operating systems."
  }
];

const progressKey = "sam10-progress";
const moduleList = document.querySelector("#module-list");
const moduleTemplate = document.querySelector("#module-template");
const searchInput = document.querySelector("#module-search");
const resetProgressButton = document.querySelector("#reset-progress");
const moduleCount = document.querySelector("#module-count");
const topicCount = document.querySelector("#topic-count");
const completionCount = document.querySelector("#completion-count");
const progressFill = document.querySelector("#progress-fill");
const flashcard = document.querySelector("#flashcard");
const flashcardQuestion = flashcard ? flashcard.querySelector(".flashcard-question") : null;
const flashcardAnswer = flashcard ? flashcard.querySelector(".flashcard-answer") : null;
const flipCardButton = document.querySelector("#flip-card");
const nextCardButton = document.querySelector("#next-card");

let currentFlashcard = 0;

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(progressKey)) || {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(progressKey, JSON.stringify(progress));
}

function countTotals() {
  return {
    modules: modules.length,
    topics: modules.reduce((total, module) => total + module.topics.length, 0),
    checks: modules.reduce((total, module) => total + module.checks.length, 0)
  };
}

function renderStats(progress) {
  const totals = countTotals();
  const completedChecks = Object.values(progress).flat().filter(Boolean).length;
  const percent = totals.checks ? Math.round((completedChecks / totals.checks) * 100) : 0;

  moduleCount.textContent = String(totals.modules);
  topicCount.textContent = String(totals.topics);
  completionCount.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
}

function createChecklist(moduleIndex, checks, progress) {
  const list = document.createDocumentFragment();
  const completed = progress[moduleIndex] || [];

  checks.forEach((item, checkIndex) => {
    const li = document.createElement("li");
    li.className = "check-item";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = Boolean(completed[checkIndex]);
    input.addEventListener("change", () => {
      const next = loadProgress();
      next[moduleIndex] = next[moduleIndex] || [];
      next[moduleIndex][checkIndex] = input.checked;
      saveProgress(next);
      updateProgressDisplays(next);
    });

    const label = document.createElement("label");
    label.textContent = item;

    li.append(input, label);
    list.append(li);
  });

  return list;
}

function updateProgressDisplays(progress) {
  renderStats(progress);

  document.querySelectorAll(".module-card").forEach((card, moduleIndex) => {
    const checks = modules[moduleIndex].checks.length;
    const completed = (progress[moduleIndex] || []).filter(Boolean).length;
    const progressLabel = card.querySelector(".module-progress");
    progressLabel.textContent = `${completed}/${checks} done`;
  });
}

function createQuiz(module) {
  const wrapper = document.createElement("div");
  wrapper.className = "quiz-options";
  const feedback = document.createElement("p");
  feedback.className = "quiz-feedback";

  module.quiz.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => {
      wrapper.querySelectorAll(".quiz-option").forEach((item) => {
        item.disabled = true;
        item.classList.remove("correct", "wrong");
      });

      if (option === module.quiz.answer) {
        button.classList.add("correct");
        feedback.textContent = "Correct. That matches the key operational principle for this module.";
      } else {
        button.classList.add("wrong");
        feedback.textContent = `Not quite. Correct answer: ${module.quiz.answer}.`;
      }
    });
    wrapper.append(button);
  });

  return { wrapper, feedback };
}

function renderModules() {
  const progress = loadProgress();
  moduleList.textContent = "";

  modules.forEach((module, moduleIndex) => {
    const fragment = moduleTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".module-card");
    const toggle = fragment.querySelector(".module-toggle");
    const body = fragment.querySelector(".module-body");
    const title = fragment.querySelector(".module-title");
    const summary = fragment.querySelector(".module-summary");
    const order = fragment.querySelector(".module-order");
    const progressLabel = fragment.querySelector(".module-progress");
    const topicList = fragment.querySelector(".topic-list");
    const checkList = fragment.querySelector(".check-list");
    const question = fragment.querySelector(".quiz-question");
    const options = fragment.querySelector(".quiz-options");
    const feedbackSlot = fragment.querySelector(".quiz-feedback");

    card.id = `topic-${moduleIndex + 1}`;
    title.textContent = module.title;
    summary.textContent = module.summary;
    order.textContent = `M${String(moduleIndex + 1).padStart(2, "0")}`;
    question.textContent = module.quiz.question;

    module.topics.forEach((topic) => {
      const item = document.createElement("li");
      item.textContent = topic;
      topicList.append(item);
    });

    checkList.append(createChecklist(moduleIndex, module.checks, progress));

    const quiz = createQuiz(module);
    options.replaceWith(quiz.wrapper);
    feedbackSlot.replaceWith(quiz.feedback);

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      body.hidden = expanded;
    });

    card.dataset.search = [
      module.title,
      module.summary,
      ...module.topics,
      ...module.checks
    ].join(" ").toLowerCase();

    moduleList.append(fragment);
  });

  updateProgressDisplays(progress);
  syncHashTarget();
}

function filterModules() {
  const query = searchInput.value.trim().toLowerCase();

  document.querySelectorAll(".module-card").forEach((card) => {
    const matches = !query || card.dataset.search.includes(query);
    card.classList.toggle("is-hidden", !matches);
  });
}

function syncHashTarget() {
  const hash = window.location.hash;
  if (!hash || !hash.startsWith("#topic-")) {
    return;
  }

  const targetCard = document.querySelector(hash);
  if (!targetCard) {
    return;
  }

  const toggle = targetCard.querySelector(".module-toggle");
  const body = targetCard.querySelector(".module-body");

  if (toggle && body) {
    toggle.setAttribute("aria-expanded", "true");
    body.hidden = false;
  }

  requestAnimationFrame(() => {
    targetCard.scrollIntoView({ block: "start", behavior: "smooth" });
  });
}

function renderFlashcard(index) {
  const card = flashcards[index];
  flashcard.classList.remove("is-flipped");
  flashcardQuestion.textContent = card.question;
  flashcardAnswer.textContent = card.answer;
  flashcard.setAttribute("aria-pressed", "false");
}

function flipFlashcard() {
  const flipped = flashcard.classList.toggle("is-flipped");
  flashcard.setAttribute("aria-pressed", String(flipped));
}

if (searchInput) {
  searchInput.addEventListener("input", filterModules);
}

window.addEventListener("hashchange", syncHashTarget);

if (resetProgressButton) {
  resetProgressButton.addEventListener("click", () => {
    localStorage.removeItem(progressKey);
    renderModules();
  });
}

if (flipCardButton) {
  flipCardButton.addEventListener("click", flipFlashcard);
}

if (nextCardButton) {
  nextCardButton.addEventListener("click", () => {
    currentFlashcard = (currentFlashcard + 1) % flashcards.length;
    renderFlashcard(currentFlashcard);
  });
}

if (flashcard) {
  flashcard.addEventListener("click", flipFlashcard);
  flashcard.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      flipFlashcard();
    }
  });
}

if (moduleList && moduleTemplate) {
  renderModules();
}

if (flashcard) {
  renderFlashcard(currentFlashcard);
}
