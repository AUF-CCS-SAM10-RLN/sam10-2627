const awsRegions = [
  { code: "us-east-1", name: "US East (N. Virginia)" },
  { code: "us-east-2", name: "US East (Ohio)" },
  { code: "us-west-1", name: "US West (N. California)" },
  { code: "us-west-2", name: "US West (Oregon)" },
  { code: "af-south-1", name: "Africa (Cape Town)" },
  { code: "ap-east-1", name: "Asia Pacific (Hong Kong)" },
  { code: "ap-south-2", name: "Asia Pacific (Hyderabad)" },
  { code: "ap-southeast-3", name: "Asia Pacific (Jakarta)" },
  { code: "ap-southeast-5", name: "Asia Pacific (Malaysia)" },
  { code: "ap-southeast-4", name: "Asia Pacific (Melbourne)" },
  { code: "ap-south-1", name: "Asia Pacific (Mumbai)" },
  { code: "ap-southeast-6", name: "Asia Pacific (New Zealand)" },
  { code: "ap-northeast-3", name: "Asia Pacific (Osaka)" },
  { code: "ap-northeast-2", name: "Asia Pacific (Seoul)" },
  { code: "ap-southeast-1", name: "Asia Pacific (Singapore)" },
  { code: "ap-southeast-2", name: "Asia Pacific (Sydney)" },
  { code: "ap-east-2", name: "Asia Pacific (Taipei)" },
  { code: "ap-southeast-7", name: "Asia Pacific (Thailand)" },
  { code: "ap-northeast-1", name: "Asia Pacific (Tokyo)" },
  { code: "ca-central-1", name: "Canada (Central)" },
  { code: "ca-west-1", name: "Canada West (Calgary)" },
  { code: "eu-central-1", name: "Europe (Frankfurt)" },
  { code: "eu-west-1", name: "Europe (Ireland)" },
  { code: "eu-west-2", name: "Europe (London)" },
  { code: "eu-south-1", name: "Europe (Milan)" },
  { code: "eu-west-3", name: "Europe (Paris)" },
  { code: "eu-south-2", name: "Europe (Spain)" },
  { code: "eu-north-1", name: "Europe (Stockholm)" },
  { code: "eu-central-2", name: "Europe (Zurich)" },
  { code: "il-central-1", name: "Israel (Tel Aviv)" },
  { code: "mx-central-1", name: "Mexico (Central)" },
  { code: "me-south-1", name: "Middle East (Bahrain)" },
  { code: "me-central-1", name: "Middle East (UAE)" },
  { code: "sa-east-1", name: "South America (Sao Paulo)" }
];

const regionStorageKey = "sam10-aws-region";
const serviceStorageKey = "sam10-aws-service-state-v2";

const serviceConfigs = {
  ec2: {
    label: "EC2 instance",
    createLabel: "Launch instance",
    modifyLabel: "Resize",
    toggleLabels: ["Stop", "Start"],
    removeLabel: "Terminate",
    activeState: "running",
    inactiveState: "stopped",
    defaultProfile: "t3.micro",
    profiles: ["t3.micro", "t3.small", "t3.medium", "m7g.large"],
    defaults: [
      { name: "web-01", profile: "t3.micro", environment: "Staging", status: "running", notes: "Web node" },
      { name: "bastion-01", profile: "t3.small", environment: "Production", status: "running", notes: "Admin access" }
    ]
  },
  vpc: {
    label: "VPC environment",
    createLabel: "Create VPC",
    modifyLabel: "Update CIDR",
    toggleLabels: ["Disable", "Enable"],
    removeLabel: "Delete",
    activeState: "available",
    inactiveState: "disabled",
    defaultProfile: "10.0.0.0/16",
    profiles: ["10.0.0.0/16", "10.10.0.0/16", "172.16.0.0/16", "192.168.0.0/16"],
    defaults: [
      { name: "sam10-prod-vpc", profile: "10.0.0.0/16", environment: "Production", status: "available", notes: "Two-tier VPC" }
    ]
  },
  iam: {
    label: "IAM role",
    createLabel: "Create role",
    modifyLabel: "Update policy",
    toggleLabels: ["Disable", "Enable"],
    removeLabel: "Delete",
    activeState: "active",
    inactiveState: "disabled",
    defaultProfile: "ReadOnlyAccess",
    profiles: ["ReadOnlyAccess", "PowerUserAccess", "CustomAdmin", "SupportRole"],
    defaults: [
      { name: "LabSupportRole", profile: "SupportRole", environment: "Lab", status: "active", notes: "Shared support role" }
    ]
  },
  s3: {
    label: "S3 bucket",
    createLabel: "Create bucket",
    modifyLabel: "Update lifecycle",
    toggleLabels: ["Suspend", "Resume"],
    removeLabel: "Delete",
    activeState: "active",
    inactiveState: "suspended",
    defaultProfile: "Versioning enabled",
    profiles: ["Versioning enabled", "Lifecycle archive", "Static website", "Backup archive"],
    defaults: [
      { name: "sam10-lab-artifacts", profile: "Versioning enabled", environment: "Lab", status: "active", notes: "Stores exports" }
    ]
  },
  cloudwatch: {
    label: "CloudWatch alarm",
    createLabel: "Create alarm",
    modifyLabel: "Tune threshold",
    toggleLabels: ["Disable", "Enable"],
    removeLabel: "Delete",
    activeState: "enabled",
    inactiveState: "disabled",
    defaultProfile: "CPU > 70%",
    profiles: ["CPU > 70%", "StatusCheckFailed", "Disk > 80%", "Budget warning"],
    defaults: [
      { name: "db-support-cpu", profile: "CPU > 70%", environment: "Production", status: "enabled", notes: "Database helper host" }
    ]
  }
};

function loadServiceState() {
  try {
    const raw = localStorage.getItem(serviceStorageKey);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch {}
  const state = {};
  Object.entries(serviceConfigs).forEach(([key, config]) => {
    state[key] = config.defaults.map((item, index) => ({ id: `${key}-${index + 1}`, ...item }));
  });
  localStorage.setItem(serviceStorageKey, JSON.stringify(state));
  return state;
}

function saveServiceState(state) {
  localStorage.setItem(serviceStorageKey, JSON.stringify(state));
}

function getSelectedRegion() {
  return localStorage.getItem(regionStorageKey) || "us-east-1";
}

function setSelectedRegion(region) {
  localStorage.setItem(regionStorageKey, region);
}

function renderRegionSelectors() {
  const selectedRegion = getSelectedRegion();
  document.querySelectorAll('.aws-region-select').forEach((select) => {
    select.innerHTML = '';
    awsRegions.forEach((region) => {
      const option = document.createElement('option');
      option.value = region.code;
      option.textContent = `${region.code} - ${region.name}`;
      if (region.code === selectedRegion) {
        option.selected = true;
      }
      select.appendChild(option);
    });
    select.addEventListener('change', () => {
      setSelectedRegion(select.value);
      renderRegionSelectors();
    });
  });
}

function createSimSection(root, serviceKey, state) {
  const config = serviceConfigs[serviceKey];
  if (!config) {
    return;
  }

  const resources = state[serviceKey] || [];
  const selectedRegion = getSelectedRegion();
  const regionName = awsRegions.find((region) => region.code === selectedRegion)?.name || selectedRegion;

  root.innerHTML = `
    <div class="provisioning-grid">
      <form class="provisioning-form" data-service-form="${serviceKey}">
        <label class="provisioning-field">
          <span>${config.label} name</span>
          <input name="name" type="text" placeholder="${serviceKey}-sample-01" required>
        </label>
        <label class="provisioning-field">
          <span>Configuration</span>
          <select name="profile">
            ${config.profiles.map((profile) => `<option value="${profile}">${profile}</option>`).join('')}
          </select>
        </label>
        <label class="provisioning-field">
          <span>Environment</span>
          <select name="environment">
            <option value="Lab">Lab</option>
            <option value="Development">Development</option>
            <option value="Staging">Staging</option>
            <option value="Production">Production</option>
          </select>
        </label>
        <label class="provisioning-field">
          <span>Selected Region</span>
          <input type="text" value="${selectedRegion} - ${regionName}" readonly>
        </label>
        <label class="provisioning-field provisioning-field-wide">
          <span>Notes</span>
          <textarea name="notes" rows="3" placeholder="Purpose, admin note, or service intent"></textarea>
        </label>
        <div class="page-banner-actions provisioning-field-wide">
          <button class="primary-button" type="submit">${config.createLabel}</button>
        </div>
      </form>
      <div class="aws-panel provisioning-guide">
        <div class="aws-panel-head"><div><p class="aws-panel-kicker">Workflow note</p><h3>Why this feels closer to a real console</h3></div></div>
        <ul class="outcome-list">
          <li>Actions are scoped to the service page instead of a generic provisioning page.</li>
          <li>Region context is visible while students perform service actions.</li>
          <li>Lifecycle buttons match the service more closely than a one-size-fits-all workflow.</li>
        </ul>
      </div>
    </div>
    <div class="aws-table-wrap">
      <table class="aws-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Configuration</th>
            <th>Environment</th>
            <th>Region</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${resources.map((resource) => `
            <tr data-resource-id="${resource.id}">
              <td>${resource.name}</td>
              <td>${resource.profile}</td>
              <td>${resource.environment}</td>
              <td>${resource.region || selectedRegion}</td>
              <td><span class="aws-status ${resource.status === config.activeState ? 'ok' : 'warn'}">${resource.status}</span></td>
              <td>
                <div class="sim-action-group">
                  <button class="sim-action-button" data-service="${serviceKey}" data-action="modify" type="button">${config.modifyLabel}</button>
                  <button class="sim-action-button" data-service="${serviceKey}" data-action="toggle" type="button">${resource.status === config.activeState ? config.toggleLabels[0] : config.toggleLabels[1]}</button>
                  <button class="sim-action-button sim-action-danger" data-service="${serviceKey}" data-action="remove" type="button">${config.removeLabel}</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <div class="sim-empty-state" ${resources.length ? 'hidden' : ''}>No simulated ${config.label.toLowerCase()} resources yet. Use the form above to start.</div>
  `;

  const form = root.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    state[serviceKey].push({
      id: `${serviceKey}-${Date.now()}`,
      name: String(data.get('name') || '').trim(),
      profile: String(data.get('profile') || config.defaultProfile),
      environment: String(data.get('environment') || 'Lab'),
      region: getSelectedRegion(),
      status: config.activeState,
      notes: String(data.get('notes') || '').trim()
    });
    saveServiceState(state);
    createSimSection(root, serviceKey, state);
  });

  root.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const row = button.closest('tr');
      const resourceId = row?.dataset.resourceId;
      const resource = state[serviceKey].find((item) => item.id === resourceId);
      if (!resource) {
        return;
      }

      if (button.dataset.action === 'modify') {
        const updatedProfile = prompt(`Update configuration for ${resource.name}`, resource.profile);
        if (updatedProfile) {
          resource.profile = updatedProfile;
        }
      }

      if (button.dataset.action === 'toggle') {
        resource.status = resource.status === config.activeState ? config.inactiveState : config.activeState;
      }

      if (button.dataset.action === 'remove') {
        state[serviceKey] = state[serviceKey].filter((item) => item.id !== resource.id);
      }

      saveServiceState(state);
      createSimSection(root, serviceKey, state);
    });
  });
}

function initializeAwsConsoleSim() {
  renderRegionSelectors();
  const state = loadServiceState();
  document.querySelectorAll('.aws-sim-root').forEach((root) => {
    const serviceKey = root.dataset.serviceSim;
    createSimSection(root, serviceKey, state);
  });
}

document.addEventListener('DOMContentLoaded', initializeAwsConsoleSim);
