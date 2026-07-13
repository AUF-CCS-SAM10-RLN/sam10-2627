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
    title: "Operating Systems Fundamentals",
    summary: "Core OS concepts, installation paths, filesystems, and startup behavior.",
    topics: [
      "Client and server operating systems",
      "Boot process and startup services",
      "File systems and partitions",
      "Resource usage: CPU, memory, and storage"
    ],
    checks: [
      "Compare workstation and server operating systems.",
      "Trace the startup process from power-on to login.",
      "Recognize the purpose of file systems and partitions."
    ],
    quiz: {
      question: "What is the main purpose of a file system?",
      options: ["Run network packets", "Organize and manage stored data", "Power the BIOS"],
      answer: "Organize and manage stored data"
    }
  },
  {
    title: "User and Permission Management",
    summary: "Accounts, groups, access levels, and least-privilege administration.",
    topics: [
      "Creating and disabling user accounts",
      "Groups, roles, and delegated access",
      "Authentication basics",
      "File permissions and ownership"
    ],
    checks: [
      "Create an access model using users and groups.",
      "Explain the principle of least privilege.",
      "Identify permission issues that block normal use."
    ],
    quiz: {
      question: "What does least privilege mean?",
      options: [
        "Users receive only the access needed for their tasks",
        "All users have administrator rights",
        "Permissions are assigned randomly"
      ],
      answer: "Users receive only the access needed for their tasks"
    }
  },
  {
    title: "Networking Basics for Administrators",
    summary: "Addressing, connectivity, and the network concepts needed to support systems.",
    topics: [
      "IP addressing and subnet basics",
      "DNS, DHCP, and gateways",
      "Testing connectivity with standard tools",
      "Common causes of network failure"
    ],
    checks: [
      "Explain how a device gets network settings.",
      "Use diagnostic logic to isolate connectivity faults.",
      "Describe the role of DNS in system access."
    ],
    quiz: {
      question: "Which service translates names like `server.local` into IP addresses?",
      options: ["DNS", "DHCP", "NTP"],
      answer: "DNS"
    }
  },
  {
    title: "System Maintenance and Updates",
    summary: "Preventive maintenance, patch cycles, performance checks, and housekeeping.",
    topics: [
      "Patch management routines",
      "Disk cleanup and storage monitoring",
      "Performance baselines and alerts",
      "Maintenance windows and rollback thinking"
    ],
    checks: [
      "Plan a routine maintenance schedule.",
      "Explain why updates should be verified after installation.",
      "Recognize signs that a system is degrading over time."
    ],
    quiz: {
      question: "Why should updates be scheduled and documented?",
      options: [
        "To reduce risk and make rollback possible",
        "To slow down maintenance work",
        "To avoid all testing"
      ],
      answer: "To reduce risk and make rollback possible"
    }
  },
  {
    title: "Backup and Recovery",
    summary: "Data protection strategies, backup types, and recovery validation.",
    topics: [
      "Full, incremental, and differential backups",
      "Backup schedules and retention",
      "Recovery point and recovery time concepts",
      "Restore testing"
    ],
    checks: [
      "Choose an appropriate backup type for a scenario.",
      "Explain the difference between backup and recovery.",
      "State why restore testing is mandatory."
    ],
    quiz: {
      question: "What proves a backup strategy actually works?",
      options: ["Large storage space", "Successful restore testing", "Naming files carefully"],
      answer: "Successful restore testing"
    }
  },
  {
    title: "Security and Hardening",
    summary: "Access control, patching, malware defense, and secure system practices.",
    topics: [
      "Security baselines and hardening checklists",
      "Antivirus, anti-malware, and endpoint controls",
      "Password policy and multifactor basics",
      "Logs, alerts, and suspicious activity"
    ],
    checks: [
      "List baseline steps used to harden a system.",
      "Explain why patching is part of security, not just maintenance.",
      "Recognize indicators that a system may be compromised."
    ],
    quiz: {
      question: "Which action is part of hardening?",
      options: ["Removing unnecessary services", "Sharing admin passwords", "Ignoring logs"],
      answer: "Removing unnecessary services"
    }
  },
  {
    title: "Troubleshooting and Support",
    summary: "Structured diagnosis, event logs, remote support, and escalation practice.",
    topics: [
      "Troubleshooting methodology",
      "Using logs and system messages",
      "Remote assistance tools",
      "Escalation and incident reporting"
    ],
    checks: [
      "Follow a repeatable troubleshooting process.",
      "Use logs to support a diagnosis instead of guessing.",
      "Document findings for escalation or handoff."
    ],
    quiz: {
      question: "What should happen before escalating an unresolved issue?",
      options: [
        "Record symptoms, actions, and evidence",
        "Delete the logs",
        "Restart random services without notes"
      ],
      answer: "Record symptoms, actions, and evidence"
    }
  }
];

const flashcards = [
  {
    question: "What is preventive maintenance?",
    answer: "Planned work that keeps systems stable before failures occur."
  },
  {
    question: "Why is DNS important in administration?",
    answer: "It maps human-readable names to IP addresses so users and services can find systems."
  },
  {
    question: "What is the principle of least privilege?",
    answer: "Give users only the access required to perform their tasks."
  },
  {
    question: "Why test backups?",
    answer: "A backup is only trustworthy if data can actually be restored from it."
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
const flashcardQuestion = flashcard.querySelector(".flashcard-question");
const flashcardAnswer = flashcard.querySelector(".flashcard-answer");
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
}

function filterModules() {
  const query = searchInput.value.trim().toLowerCase();

  document.querySelectorAll(".module-card").forEach((card) => {
    const matches = !query || card.dataset.search.includes(query);
    card.classList.toggle("is-hidden", !matches);
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

searchInput.addEventListener("input", filterModules);

resetProgressButton.addEventListener("click", () => {
  localStorage.removeItem(progressKey);
  renderModules();
});

flipCardButton.addEventListener("click", flipFlashcard);
nextCardButton.addEventListener("click", () => {
  currentFlashcard = (currentFlashcard + 1) % flashcards.length;
  renderFlashcard(currentFlashcard);
});

flashcard.addEventListener("click", flipFlashcard);
flashcard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    flipFlashcard();
  }
});

renderModules();
renderFlashcard(currentFlashcard);
