const provisioningStateKey = "sam10-aws-provisioning-state";

function getDefaultResources() {
  return [
    {
      id: cryptoRandomId(),
      type: "EC2",
      name: "web-app-01",
      profile: "Standard",
      environment: "Staging",
      status: "running",
      notes: "Initial web tier simulation resource"
    },
    {
      id: cryptoRandomId(),
      type: "S3",
      name: "course-artifacts-bucket",
      profile: "Cost Optimized",
      environment: "Lab",
      status: "available",
      notes: "Stores sample exports and reports"
    }
  ];
}

function cryptoRandomId() {
  return Math.random().toString(36).slice(2, 10);
}

function loadState() {
  try {
    const raw = localStorage.getItem(provisioningStateKey);
    if (!raw) {
      const initial = { resources: getDefaultResources(), log: [logEntry("Simulator initialized with sample resources.")] };
      saveState(initial);
      return initial;
    }
    return JSON.parse(raw);
  } catch {
    const fallback = { resources: getDefaultResources(), log: [logEntry("Simulator reset after unreadable local state.")] };
    saveState(fallback);
    return fallback;
  }
}

function saveState(state) {
  localStorage.setItem(provisioningStateKey, JSON.stringify(state));
}

function logEntry(message) {
  return {
    id: cryptoRandomId(),
    message,
    time: new Date().toLocaleString()
  };
}

function statusClass(status) {
  return status === "running" || status === "available" ? "ok" : status === "stopped" ? "warn" : "";
}

function nextStatusForType(resource) {
  if (resource.type === "EC2") {
    return resource.status === "running" ? "stopped" : "running";
  }
  return resource.status === "available" ? "stopped" : "available";
}

function nextToggleLabel(resource) {
  return resource.status === "running" || resource.status === "available" ? "Stop" : "Start";
}

function renderProvisioningSimulator() {
  const form = document.getElementById("provisioning-form");
  const tableBody = document.getElementById("resource-table-body");
  if (!form || !tableBody) {
    return;
  }

  const badge = document.getElementById("resource-count-badge");
  const emptyState = document.getElementById("empty-state");
  const logList = document.getElementById("activity-log");
  const resetButton = document.getElementById("reset-simulator");
  const template = document.getElementById("resource-row-template");

  let state = loadState();

  function commit() {
    saveState(state);
    render();
  }

  function render() {
    tableBody.innerHTML = "";
    logList.innerHTML = "";

    badge.textContent = `${state.resources.length} resource${state.resources.length === 1 ? "" : "s"}`;
    emptyState.hidden = state.resources.length > 0;

    state.resources.forEach((resource) => {
      const row = template.content.firstElementChild.cloneNode(true);
      row.dataset.resourceId = resource.id;
      row.querySelector('[data-field="type"]').textContent = resource.type;
      row.querySelector('[data-field="name"]').textContent = resource.name;
      row.querySelector('[data-field="profile"]').textContent = resource.profile;
      row.querySelector('[data-field="environment"]').textContent = resource.environment;
      row.querySelector('[data-field="status"]').innerHTML = `<span class="aws-status ${statusClass(resource.status)}">${resource.status}</span>`;
      row.querySelector('[data-action="toggle"]').textContent = nextToggleLabel(resource);
      tableBody.appendChild(row);
    });

    state.log.slice().reverse().forEach((entry) => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${entry.message}</span><strong>${entry.time}</strong>`;
      logList.appendChild(li);
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const type = data.get("serviceType");
    const name = String(data.get("resourceName") || "").trim();
    const profile = data.get("resourceProfile");
    const environment = data.get("resourceEnvironment");
    const notes = String(data.get("resourceNotes") || "").trim();

    if (!name) {
      return;
    }

    const status = type === "EC2" ? "running" : "available";
    state.resources.push({
      id: cryptoRandomId(),
      type,
      name,
      profile,
      environment,
      status,
      notes
    });
    state.log.push(logEntry(`Created ${type} resource \"${name}\" with ${profile} profile in ${environment}.`));
    form.reset();
    document.getElementById("resource-profile").value = "Standard";
    document.getElementById("resource-environment").value = "Lab";
    commit();
  });

  tableBody.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const action = target.dataset.action;
    if (!action) {
      return;
    }
    const row = target.closest("tr");
    const resourceId = row?.dataset.resourceId;
    const resource = state.resources.find((item) => item.id === resourceId);
    if (!resource) {
      return;
    }

    if (action === "modify") {
      const newProfile = prompt(`Modify profile for ${resource.name}`, resource.profile);
      if (!newProfile) {
        return;
      }
      resource.profile = newProfile;
      state.log.push(logEntry(`Modified ${resource.type} resource \"${resource.name}\" to profile ${newProfile}.`));
    }

    if (action === "toggle") {
      resource.status = nextStatusForType(resource);
      state.log.push(logEntry(`${resource.status === "stopped" ? "Stopped" : "Started"} ${resource.type} resource \"${resource.name}\".`));
    }

    if (action === "remove") {
      state.resources = state.resources.filter((item) => item.id !== resource.id);
      state.log.push(logEntry(`Removed ${resource.type} resource \"${resource.name}\" from the simulated environment.`));
    }

    commit();
  });

  resetButton?.addEventListener("click", () => {
    state = { resources: getDefaultResources(), log: [logEntry("Simulator reset to sample baseline.")] };
    commit();
  });

  render();
}

document.addEventListener("DOMContentLoaded", renderProvisioningSimulator);
