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
  },
  {
    title: "Identity, Access Management, and Governance",
    summary: "Authentication, authorization, access control models, IAM, MFA, federation, and governance.",
    topics: [
      "Authentication",
      "Authorization",
      "Role-Based Access Control (RBAC)",
      "Attribute-Based Access Control (ABAC)",
      "Principle of Least Privilege",
      "AWS IAM",
      "Multi-Factor Authentication",
      "Identity Federation"
    ],
    checks: [
      "Explain authentication and authorization mechanisms used in secure computing environments.",
      "Differentiate RBAC and ABAC access control models.",
      "Explain how AWS IAM implements secure identity and access management.",
      "Evaluate identity management policies using the principle of least privilege.",
      "Analyze governance practices that support secure cloud administration."
    ],
    quiz: {
      question: "Which statement best describes the principle of least privilege?",
      options: [
        "Grant only the permissions required to complete a task",
        "Grant administrator access to reduce configuration effort",
        "Use the same permissions for every identity"
      ],
      answer: "Grant only the permissions required to complete a task"
    }
  },
  {
    title: "Computer Networks and Cloud Networking",
    summary: "Networking models, routing, DNS, VPC design, gateways, and cloud network security controls.",
    topics: [
      "OSI Model",
      "TCP/IP",
      "Routing",
      "Switching",
      "DNS",
      "Firewalls",
      "Amazon VPC",
      "Subnets",
      "Route Tables",
      "Internet Gateway",
      "NAT Gateway",
      "Security Groups",
      "Network ACLs"
    ],
    checks: [
      "Explain networking concepts that underpin cloud infrastructure.",
      "Differentiate the functions of the OSI and TCP/IP networking models.",
      "Analyze the components of Amazon Virtual Private Cloud (VPC) in relation to traditional network architectures.",
      "Explain how routing, subnets, gateways, and DNS enable secure cloud communication.",
      "Evaluate cloud networking designs based on networking and security principles."
    ],
    quiz: {
      question: "What makes a subnet public in Amazon VPC?",
      options: [
        "Its route table sends internet-bound traffic to an internet gateway",
        "It has more IP addresses than a private subnet",
        "It automatically allows all inbound traffic"
      ],
      answer: "Its route table sends internet-bound traffic to an internet gateway"
    }
  },
  {
    title: "Compute Infrastructure Administration",
    summary: "EC2 provisioning, AMIs, instance sizing, launch templates, Elastic IP, and CloudFormation fundamentals.",
    topics: [
      "Amazon EC2",
      "Amazon Machine Images",
      "Instance Types",
      "Launch Templates",
      "Elastic IP",
      "Infrastructure Provisioning",
      "Introduction to Infrastructure as Code",
      "AWS CloudFormation Fundamentals"
    ],
    checks: [
      "Explain how virtualization supports modern cloud infrastructure.",
      "Differentiate virtual machines, containers, and elastic compute resources.",
      "Explain the role of Amazon EC2 in cloud infrastructure provisioning.",
      "Analyze factors affecting compute resource selection based on workload requirements.",
      "Explain the principles and benefits of Infrastructure as Code using AWS CloudFormation."
    ],
    quiz: {
      question: "What is a primary benefit of using a launch template with Amazon EC2?",
      options: [
        "It stores reusable instance launch parameters for consistent provisioning",
        "It replaces the need for an AMI entirely",
        "It automatically turns every instance into a container"
      ],
      answer: "It stores reusable instance launch parameters for consistent provisioning"
    }
  },
  {
    title: "Linux Systems Administration",
    summary: "Linux architecture, shell usage, file systems, identities, permissions, processes, packages, SSH, and Systems Manager.",
    topics: [
      "Linux Architecture",
      "Shell Environment",
      "File Systems",
      "Users and Groups",
      "Permissions",
      "Process Management",
      "Package Management",
      "SSH",
      "Systems Manager"
    ],
    checks: [
      "Explain the architecture and operational principles of the Linux operating system.",
      "Differentiate Linux file systems, processes, users, groups, and permission models.",
      "Analyze Linux system administration practices in cloud environments.",
      "Explain secure remote administration concepts using SSH and AWS Systems Manager.",
      "Evaluate Linux administration strategies for enterprise cloud systems."
    ],
    quiz: {
      question: "What is a primary advantage of AWS Systems Manager over direct SSH-only administration?",
      options: [
        "It can support managed administration workflows without relying only on direct inbound SSH access",
        "It replaces Linux permissions and user management entirely",
        "It prevents all package-management and process issues automatically"
      ],
      answer: "It can support managed administration workflows without relying only on direct inbound SSH access"
    }
  },
  {
    title: "Storage Administration",
    summary: "Storage hierarchy, enterprise storage models, RAID, performance, and AWS storage services.",
    topics: [
      "Storage Hierarchy",
      "Object Storage",
      "Block Storage",
      "File Storage",
      "RAID",
      "Storage Performance",
      "Amazon S3",
      "Amazon EBS",
      "Amazon EFS",
      "Storage Lifecycle Policies"
    ],
    checks: [
      "Differentiate block, object, and file storage architectures.",
      "Explain storage technologies used in enterprise cloud infrastructure.",
      "Analyze organizational storage requirements and appropriate storage solutions.",
      "Explain AWS storage services in relation to storage architecture principles.",
      "Evaluate storage strategies based on performance, availability, and cost considerations."
    ],
    quiz: {
      question: "Which AWS service is most directly aligned with scalable object storage?",
      options: [
        "Amazon S3",
        "Amazon EBS",
        "Amazon EC2"
      ],
      answer: "Amazon S3"
    }
  },
  {
    title: "Database Administration",
    summary: "Relational and NoSQL databases, ACID, CAP theorem, AWS managed database services, and backup strategy.",
    topics: [
      "Relational Databases",
      "NoSQL Databases",
      "ACID",
      "CAP Theorem",
      "Amazon RDS",
      "Amazon Aurora",
      "DynamoDB",
      "Database Backup"
    ],
    checks: [
      "Explain relational and NoSQL database architectures.",
      "Differentiate database management models based on application requirements.",
      "Explain the principles of managed database administration in cloud environments.",
      "Analyze AWS database services based on scalability, consistency, and availability.",
      "Evaluate database solutions appropriate for different organizational needs."
    ],
    quiz: {
      question: "Which AWS service is designed as a managed key-value and document NoSQL database?",
      options: [
        "Amazon DynamoDB",
        "Amazon RDS for MySQL",
        "Amazon EFS"
      ],
      answer: "Amazon DynamoDB"
    }
  },
  {
    title: "Web and Application Services",
    summary: "Multi-tier architecture, web and application delivery, reverse proxy, load balancing, DNS, certificates, and deployment.",
    topics: [
      "Multi-tier Architecture",
      "Web Servers",
      "Reverse Proxy",
      "Load Distribution",
      "Elastic Load Balancer",
      "Route 53",
      "AWS Certificate Manager",
      "Application Deployment"
    ],
    checks: [
      "Explain the principles of multi-tier application architecture.",
      "Differentiate the functions of web servers, application servers, and load balancers.",
      "Explain how AWS services support secure and scalable web application deployment.",
      "Analyze application architectures based on availability, scalability, and security requirements."
    ],
    quiz: {
      question: "What is a primary role of an Elastic Load Balancer in a multi-tier application?",
      options: [
        "It distributes traffic across healthy targets to improve availability and scalability",
        "It replaces DNS and certificate management entirely",
        "It stores application data as durable object storage"
      ],
      answer: "It distributes traffic across healthy targets to improve availability and scalability"
    }
  },
  {
    title: "Monitoring, Logging, and Performance Management",
    summary: "Monitoring, observability, metrics, tuning, logging, and AWS operational visibility services.",
    topics: [
      "Systems Monitoring",
      "Observability",
      "Performance Metrics",
      "Capacity Planning",
      "Performance Tuning",
      "Log Management",
      "Amazon CloudWatch",
      "CloudTrail",
      "AWS Config",
      "SNS"
    ],
    checks: [
      "Explain the role of monitoring and observability in systems administration.",
      "Differentiate monitoring, logging, and auditing functions.",
      "Analyze performance metrics to evaluate system health.",
      "Explain how AWS monitoring services support operational decision-making.",
      "Recommend monitoring strategies based on infrastructure requirements."
    ],
    quiz: {
      question: "Which AWS service is most directly used to collect metrics, create alarms, and visualize operational dashboards?",
      options: [
        "Amazon CloudWatch",
        "Amazon Route 53",
        "AWS Certificate Manager"
      ],
      answer: "Amazon CloudWatch"
    }
  },
  {
    title: "Cloud Security Administration",
    summary: "Layered cloud security, cryptography, risk management, and AWS security protection services.",
    topics: [
      "Information Security Principles",
      "Defense in Depth",
      "Cryptography",
      "Risk Management",
      "AWS KMS",
      "Secrets Manager",
      "GuardDuty",
      "AWS Inspector",
      "AWS WAF"
    ],
    checks: [
      "Explain the principles of cloud security and layered defense.",
      "Differentiate preventive, detective, and corrective security controls.",
      "Explain the functions of AWS security services in protecting cloud infrastructure.",
      "Analyze cloud security risks using established security principles.",
      "Evaluate organizational security practices in cloud environments."
    ],
    quiz: {
      question: "Which AWS service is primarily used to protect web applications from common web exploits?",
      options: [
        "AWS WAF",
        "Amazon SNS",
        "Amazon EFS"
      ],
      answer: "AWS WAF"
    }
  },
  {
    title: "High Availability, Scalability, and Reliability Engineering",
    summary: "Reliability engineering, scaling, fault tolerance, elasticity, health checks, and resilient AWS infrastructure design.",
    topics: [
      "Reliability Engineering",
      "Scalability",
      "Fault Tolerance",
      "Elasticity",
      "Auto Scaling",
      "Elastic Load Balancer",
      "Multi-AZ",
      "Health Checks",
      "Infrastructure Scaling Strategies"
    ],
    checks: [
      "Explain the principles of high availability, scalability, and fault tolerance.",
      "Differentiate vertical and horizontal scaling strategies.",
      "Explain how AWS services support reliable and resilient cloud infrastructures.",
      "Analyze cloud architectures with respect to availability and performance.",
      "Evaluate infrastructure designs using reliability engineering principles."
    ],
    quiz: {
      question: "What is a key difference between vertical and horizontal scaling?",
      options: [
        "Vertical scaling adds capacity to a single node, while horizontal scaling adds more nodes",
        "Vertical scaling always improves availability more than horizontal scaling",
        "Horizontal scaling removes the need for load balancing"
      ],
      answer: "Vertical scaling adds capacity to a single node, while horizontal scaling adds more nodes"
    }
  },
  {
    title: "Backup, Disaster Recovery, and Business Continuity",
    summary: "Business continuity, disaster recovery, RPO, RTO, backups, replication, versioning, and AWS data protection strategy.",
    topics: [
      "Business Continuity",
      "Disaster Recovery",
      "Recovery Point Objective (RPO)",
      "Recovery Time Objective (RTO)",
      "Backup Strategies",
      "AWS Backup",
      "Snapshots",
      "Cross-Region Replication",
      "Versioning"
    ],
    checks: [
      "Explain the principles of backup, disaster recovery, and business continuity.",
      "Differentiate backup strategies based on organizational requirements.",
      "Explain how AWS backup services support data protection and disaster recovery.",
      "Analyze disaster recovery plans using RPO and RTO metrics.",
      "Evaluate organizational continuity strategies for cloud environments."
    ],
    quiz: {
      question: "What does Recovery Time Objective (RTO) describe?",
      options: [
        "The target time to restore a service after disruption",
        "The amount of data that can be lost before backup is required",
        "The number of regions an application can run in"
      ],
      answer: "The target time to restore a service after disruption"
    }
  },
  {
    title: "Systems Maintenance, Automation, and IT Service Management",
    summary: "Maintenance strategy, service management, root cause analysis, operational runbooks, and AWS automation services.",
    topics: [
      "Preventive Maintenance",
      "Corrective Maintenance",
      "Patch Management",
      "Incident Management",
      "Problem Management",
      "Change Management",
      "Configuration Management",
      "Root Cause Analysis",
      "ITIL Fundamentals",
      "Service Level Agreements",
      "Operational Runbooks",
      "AWS Systems Manager",
      "Patch Manager",
      "Automation Documents",
      "Trusted Advisor"
    ],
    checks: [
      "Explain the principles of systems maintenance and IT service management.",
      "Differentiate maintenance strategies used throughout the systems lifecycle.",
      "Explain incident, problem, and change management processes.",
      "Analyze the role of automation in improving operational efficiency.",
      "Evaluate maintenance strategies based on organizational requirements."
    ],
    quiz: {
      question: "Which practice is most directly associated with identifying the underlying cause of recurring incidents?",
      options: [
        "Root Cause Analysis",
        "Elastic Load Balancing",
        "Versioning"
      ],
      answer: "Root Cause Analysis"
    }
  },
  {
    title: "Cloud Architecture, Infrastructure Optimization, and the AWS Well-Architected Framework",
    summary: "Architectural quality attributes, AWS Well-Architected pillars, optimization strategy, and cloud architecture evaluation.",
    topics: [
      "Software Architecture Principles",
      "Quality Attributes",
      "Operational Excellence",
      "Security",
      "Reliability",
      "Performance Efficiency",
      "Cost Optimization",
      "Sustainability",
      "AWS Well-Architected Framework",
      "AWS Well-Architected Tool",
      "AWS Cost Explorer",
      "Trusted Advisor"
    ],
    checks: [
      "Explain architectural quality attributes for cloud systems.",
      "Describe the six pillars of the AWS Well-Architected Framework.",
      "Analyze cloud architectures using established architectural principles.",
      "Recommend improvements for security, reliability, performance, operational excellence, cost optimization, and sustainability.",
      "Evaluate cloud solutions using the AWS Well-Architected Framework."
    ],
    quiz: {
      question: "Which AWS Well-Architected pillar focuses on reducing unnecessary expenses while meeting system requirements?",
      options: [
        "Cost Optimization",
        "Reliability",
        "Operational Excellence"
      ],
      answer: "Cost Optimization"
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
  },
  {
    question: "How is RBAC different from ABAC?",
    answer: "RBAC grants access based on roles, while ABAC uses attributes such as user, resource, or environment details."
  },
  {
    question: "What is the main purpose of a NAT gateway?",
    answer: "It allows resources in private subnets to reach the internet outbound without accepting unsolicited inbound connections."
  },
  {
    question: "What does Infrastructure as Code improve in cloud administration?",
    answer: "It makes provisioning repeatable, reviewable, and easier to automate across environments."
  },
  {
    question: "Why is AWS Systems Manager useful in Linux administration?",
    answer: "It supports secure remote management, automation, and operational control without depending only on direct SSH access."
  },
  {
    question: "How is object storage different from block storage?",
    answer: "Object storage manages data as discrete objects with metadata, while block storage presents raw volumes for attached operating systems and applications."
  },
  {
    question: "What is a practical difference between relational and NoSQL databases?",
    answer: "Relational databases emphasize structured schemas and transactional consistency, while NoSQL systems often prioritize flexible models and horizontal scalability."
  },
  {
    question: "Why is a multi-tier architecture useful for production web applications?",
    answer: "It separates presentation, application, and data responsibilities to improve scalability, security, and maintainability."
  },
  {
    question: "How is logging different from monitoring?",
    answer: "Monitoring tracks system state and performance over time, while logging records detailed event data that helps explain what happened."
  },
  {
    question: "What does defense in depth mean in cloud security?",
    answer: "It means using multiple layers of security controls so that one control failure does not fully expose the system."
  },
  {
    question: "Why are Multi-AZ and health checks important in resilient architectures?",
    answer: "They help workloads continue operating during failures by spreading resources and detecting unhealthy components for recovery or rerouting."
  },
  {
    question: "What is the difference between RPO and RTO?",
    answer: "RPO defines acceptable data loss measured in time, while RTO defines acceptable service recovery time after an outage."
  },
  {
    question: "How does automation improve systems maintenance?",
    answer: "Automation reduces manual repetition, improves consistency, speeds response, and helps enforce operational procedures at scale."
  },
  {
    question: "What is the purpose of the AWS Well-Architected Framework?",
    answer: "It provides a structured way to evaluate cloud architectures and improve them across operational excellence, security, reliability, performance, cost, and sustainability."
  }
];

const progressKey = "sam10-progress";
const moduleList = document.querySelector("#module-list");
const moduleTemplate = document.querySelector("#module-template");
const moduleTabs = document.querySelector("#module-tabs");
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
  if (moduleTabs) {
    moduleTabs.textContent = "";
  }

  modules.forEach((module, moduleIndex) => {
    if (moduleTabs) {
      const tabButton = document.createElement("button");
      tabButton.type = "button";
      tabButton.className = "tab-button";
      tabButton.setAttribute("role", "tab");
      tabButton.setAttribute("aria-selected", "false");
      tabButton.setAttribute("aria-controls", `topic-${moduleIndex + 1}`);
      tabButton.dataset.tabTarget = `topic-${moduleIndex + 1}`;
      tabButton.textContent = `Topic ${moduleIndex + 1}`;
      tabButton.dataset.search = [module.title, module.summary, ...module.topics, ...module.checks].join(" ").toLowerCase();
      moduleTabs.append(tabButton);
    }

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

    const panel = document.createElement("section");
    panel.className = "tab-panel";
    panel.id = `topic-${moduleIndex + 1}`;
    panel.setAttribute("role", "tabpanel");
    panel.dataset.search = card.dataset.search;
    panel.append(fragment);
    moduleList.append(panel);
  });

  updateProgressDisplays(progress);
  initTabs();
  syncHashTarget();
}

function filterModules() {
  const query = searchInput.value.trim().toLowerCase();

  document.querySelectorAll("#module-list .tab-panel").forEach((panel) => {
    const matches = !query || panel.dataset.search.includes(query);
    panel.hidden = !matches;
  });

  if (moduleTabs) {
    moduleTabs.querySelectorAll(".tab-button").forEach((button) => {
      const matches = !query || button.dataset.search.includes(query);
      button.hidden = !matches;
    });

    const activeButton = moduleTabs.querySelector(".tab-button.is-active:not([hidden])");
    if (!activeButton) {
      const firstVisible = moduleTabs.querySelector(".tab-button:not([hidden])");
      if (firstVisible) {
        activateTab(firstVisible.closest(".tab-container"), firstVisible.dataset.tabTarget, false);
      }
    }
  }
}

function syncHashTarget() {
  const hash = window.location.hash;
  if (!hash) {
    return;
  }

  const targetPanel = document.querySelector(hash);
  if (!targetPanel) {
    return;
  }

  const container = targetPanel.closest(".tab-container");
  if (container) {
    activateTab(container, hash.slice(1), false);
  }

  requestAnimationFrame(() => {
    targetPanel.scrollIntoView({ block: "start", behavior: "smooth" });
  });
}

function activateTab(container, targetId, updateHash = true) {
  if (!container) {
    return;
  }

  const buttons = container.querySelectorAll(".tab-button");
  const panels = container.querySelectorAll(".tab-panel");

  buttons.forEach((button) => {
    const isActive = button.dataset.tabTarget === targetId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  panels.forEach((panel) => {
    const isActive = panel.id === targetId;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });

  if (updateHash) {
    history.replaceState(null, "", `#${targetId}`);
  }
}

function initTabs() {
  document.querySelectorAll(".tab-container").forEach((container) => {
    const buttons = container.querySelectorAll(".tab-button");
    if (!buttons.length) {
      return;
    }

    buttons.forEach((button) => {
      if (button.dataset.tabBound === "true") {
        return;
      }

      button.dataset.tabBound = "true";
      button.addEventListener("click", () => {
        activateTab(container, button.dataset.tabTarget);
      });
    });

    const currentHash = window.location.hash.replace("#", "");
    const hashButton = currentHash
      ? container.querySelector(`.tab-button[data-tab-target="${currentHash}"]`)
      : null;
    const activeButton = hashButton || container.querySelector(".tab-button.is-active") || buttons[0];
    activateTab(container, activeButton.dataset.tabTarget, false);
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

if (!moduleList) {
  initTabs();
  syncHashTarget();
}

if (flashcard) {
  renderFlashcard(currentFlashcard);
}
