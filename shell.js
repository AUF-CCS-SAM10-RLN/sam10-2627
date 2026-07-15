const shellOutput = document.querySelector("#shell-output");
const shellInput = document.querySelector("#shell-input");
const shellForm = document.querySelector("#shell-form");
const shellTree = document.querySelector("#shell-tree");
const shellPromptLabel = document.querySelector("#shell-prompt-label");
const resetShellButton = document.querySelector("#reset-shell");
const runHelpButton = document.querySelector("#run-help");
const toolbarButtons = document.querySelectorAll("[data-command]");

const baseFs = {
  home: {
    type: "dir",
    children: {
      student: {
        type: "dir",
        children: {
          labs: {
            type: "dir",
            children: {
              "notes.txt": {
                type: "file",
                content: [
                  "SAM10 lab workspace",
                  "- Topic 1: infrastructure diagrams",
                  "- Topic 2: deployment comparison memo",
                  "- Topic 3: IAM policy note",
                  "- Topic 4: VPC network design brief",
                  "- Topic 5: EC2 provisioning runbook"
                ].join("\n")
              },
              "iam-policy.txt": {
                type: "file",
                mode: "rw-r-----",
                content: "role=cloud-admin\nscope=sam10-account\nmfa=required\nreview=quarterly"
              },
              "webapp.log": {
                type: "file",
                content: [
                  "2025-01-15T08:00:12Z INFO webapp.service Starting web application",
                  "2025-01-15T08:00:16Z INFO webapp.service Database connection established",
                  "2025-01-15T08:05:42Z WARN webapp.service Elevated latency detected",
                  "2025-01-15T08:06:03Z ERROR webapp.service Health check timeout on /api/status"
                ].join("\n")
              }
            }
          },
          reports: {
            type: "dir",
            children: {
              "inventory.csv": {
                type: "file",
                content: "hostname,role,ip\nweb-01,frontend,10.0.1.10\ndb-01,database,10.0.2.20"
              }
            }
          }
        }
      }
    }
  },
  etc: {
    type: "dir",
    children: {
      "os-release": {
        type: "file",
        content: 'NAME="Ubuntu"\nVERSION="22.04.4 LTS (Jammy Jellyfish)"\nID=ubuntu'
      },
      "hostname": {
        type: "file",
        content: "sam10-lab"
      }
    }
  }
};

let fileSystem = {};
let currentPath = ["home", "student"];
let commandHistory = [];
let historyIndex = -1;

function cloneFs() {
  return JSON.parse(JSON.stringify(baseFs));
}

function resetShellState() {
  fileSystem = cloneFs();
  currentPath = ["home", "student"];
  commandHistory = [];
  historyIndex = -1;
  shellOutput.textContent = "";
  printLine("SAM10 Linux practice shell");
  printLine("Static GitHub Pages mode. Type `help` to see supported commands.");
  printPrompt();
  renderTree();
}

function pathToString(pathArray = currentPath) {
  if (pathArray[0] === "home" && pathArray[1] === "student") {
    if (pathArray.length === 2) {
      return "~";
    }
    return `~/${pathArray.slice(2).join("/")}`;
  }
  return `/${pathArray.join("/")}`;
}

function getPrompt() {
  return `student@sam10-lab:${pathToString()}$`;
}

function printLine(text = "") {
  const line = document.createElement("div");
  line.className = "shell-line";
  line.textContent = text;
  shellOutput.append(line);
  shellOutput.scrollTop = shellOutput.scrollHeight;
}

function printPrompt(command = "") {
  shellPromptLabel.textContent = getPrompt();
  if (command) {
    const entry = document.createElement("div");
    entry.className = "shell-line shell-command-line";
    entry.innerHTML = `<span class="shell-terminal-prompt">${getPrompt()}</span> ${escapeHtml(command)}`;
    shellOutput.append(entry);
    shellOutput.scrollTop = shellOutput.scrollHeight;
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function getNode(pathArray) {
  if (!pathArray.length) {
    return null;
  }

  let node = fileSystem[pathArray[0]];
  for (let index = 1; index < pathArray.length; index += 1) {
    if (!node || node.type !== "dir") {
      return null;
    }
    node = node.children[pathArray[index]];
  }
  return node;
}

function resolvePath(input = "") {
  if (!input || input === ".") {
    return [...currentPath];
  }

  const start = input.startsWith("/") ? [] : [...currentPath];
  const segments = input.replace(/^~\//, "home/student/").replace(/^~/, "home/student").split("/");
  const result = input.startsWith("/") ? [] : start;

  segments.forEach((segment) => {
    if (!segment || segment === ".") {
      return;
    }
    if (segment === "..") {
      if (result.length > 1) {
        result.pop();
      }
      return;
    }
    result.push(segment);
  });

  return result;
}

function listEntries(node) {
  if (!node || node.type !== "dir") {
    return [];
  }
  return Object.entries(node.children);
}

function writeOutput(text) {
  text.split("\n").forEach((line) => printLine(line));
}

function ensureDir(pathArray) {
  const node = getNode(pathArray);
  if (!node || node.type !== "dir") {
    return null;
  }
  return node;
}

function getParentAndName(pathValue) {
  const resolved = resolvePath(pathValue);
  const name = resolved.pop();
  const parent = getNode(resolved);
  return { parent, name, resolved };
}

function makeFileTree(node, prefix = "") {
  if (!node || node.type !== "dir") {
    return "";
  }

  const entries = Object.entries(node.children);
  return entries.map(([name, child], index) => {
    const connector = index === entries.length - 1 ? "└── " : "├── ";
    const nextPrefix = prefix + (index === entries.length - 1 ? "    " : "│   ");
    const line = `${prefix}${connector}${name}${child.type === "dir" ? "/" : ""}`;
    if (child.type === "dir") {
      return `${line}\n${makeFileTree(child, nextPrefix)}`;
    }
    return line;
  }).join("\n");
}

function renderTree() {
  const homeNode = getNode(["home", "student"]);
  shellTree.innerHTML = "";
  const pre = document.createElement("pre");
  pre.textContent = `~/\n${makeFileTree(homeNode, "    ")}`;
  shellTree.append(pre);
}

function handleLs(args) {
  const pathArg = args.find((arg) => !arg.startsWith("-"));
  const targetPath = pathArg ? resolvePath(pathArg) : currentPath;
  const node = getNode(targetPath);
  if (!node) {
    writeOutput(`ls: cannot access '${pathArg || ""}': No such file or directory`);
    return;
  }
  if (node.type === "file") {
    writeOutput(targetPath[targetPath.length - 1]);
    return;
  }

  const detailed = args.includes("-la") || args.includes("-l") || args.includes("-al");
  const entries = listEntries(node);
  if (detailed) {
    const rows = entries.map(([name, child]) => {
      const mode = child.mode || (child.type === "dir" ? "rwxr-xr-x" : "rw-r--r--");
      const size = child.type === "dir" ? "4096" : String(child.content.length);
      return `${child.type === "dir" ? "d" : "-"}${mode} 1 student student ${size.padStart(5, " ")} Jan 15 08:00 ${name}`;
    });
    writeOutput(rows.join("\n"));
    return;
  }
  writeOutput(entries.map(([name, child]) => child.type === "dir" ? `${name}/` : name).join("  "));
}

function handleCd(args) {
  const nextPath = resolvePath(args[0] || "~");
  const node = getNode(nextPath);
  if (!node || node.type !== "dir") {
    writeOutput(`cd: ${args[0]}: No such file or directory`);
    return;
  }
  currentPath = nextPath;
}

function handleCat(args) {
  const node = getNode(resolvePath(args[0] || ""));
  if (!node || node.type !== "file") {
    writeOutput(`cat: ${args[0]}: No such file`);
    return;
  }
  writeOutput(node.content);
}

function handleMkdir(args) {
  const target = args[0];
  if (!target) {
    writeOutput("mkdir: missing operand");
    return;
  }

  const { parent, name } = getParentAndName(target);
  if (!parent || parent.type !== "dir") {
    writeOutput(`mkdir: cannot create directory '${target}': No such file or directory`);
    return;
  }
  if (parent.children[name]) {
    writeOutput(`mkdir: cannot create directory '${target}': File exists`);
    return;
  }
  parent.children[name] = { type: "dir", children: {} };
  renderTree();
}

function handleTouch(args) {
  const target = args[0];
  if (!target) {
    writeOutput("touch: missing file operand");
    return;
  }
  const { parent, name } = getParentAndName(target);
  if (!parent || parent.type !== "dir") {
    writeOutput(`touch: cannot touch '${target}': No such file or directory`);
    return;
  }
  parent.children[name] = parent.children[name] || { type: "file", content: "" };
  renderTree();
}

function handleCp(args) {
  const [sourceArg, destArg] = args;
  if (!sourceArg || !destArg) {
    writeOutput("cp: missing file operand");
    return;
  }

  const source = getNode(resolvePath(sourceArg));
  if (!source || source.type !== "file") {
    writeOutput(`cp: cannot stat '${sourceArg}': No such file`);
    return;
  }

  const { parent, name } = getParentAndName(destArg);
  if (!parent || parent.type !== "dir") {
    writeOutput(`cp: cannot create regular file '${destArg}': No such file or directory`);
    return;
  }
  parent.children[name] = JSON.parse(JSON.stringify(source));
  renderTree();
}

function handleMv(args) {
  const [sourceArg, destArg] = args;
  if (!sourceArg || !destArg) {
    writeOutput("mv: missing file operand");
    return;
  }

  const sourcePath = resolvePath(sourceArg);
  const sourceName = sourcePath[sourcePath.length - 1];
  const sourceParent = getNode(sourcePath.slice(0, -1));
  const source = sourceParent?.children?.[sourceName];
  const destination = getParentAndName(destArg);

  if (!sourceParent || !source) {
    writeOutput(`mv: cannot stat '${sourceArg}': No such file or directory`);
    return;
  }
  if (!destination.parent || destination.parent.type !== "dir") {
    writeOutput(`mv: cannot move to '${destArg}': No such file or directory`);
    return;
  }

  destination.parent.children[destination.name] = source;
  delete sourceParent.children[sourceName];
  renderTree();
}

function handleGrep(args) {
  const [pattern, fileArg] = args;
  const node = getNode(resolvePath(fileArg || ""));
  if (!pattern || !node || node.type !== "file") {
    writeOutput("grep: usage: grep PATTERN FILE");
    return;
  }
  const matches = node.content
    .split("\n")
    .filter((line) => line.toLowerCase().includes(pattern.toLowerCase()));
  writeOutput(matches.length ? matches.join("\n") : "");
}

function handleChmod(args) {
  const [mode, fileArg] = args;
  const node = getNode(resolvePath(fileArg || ""));
  if (!mode || !node) {
    writeOutput("chmod: usage: chmod MODE FILE");
    return;
  }
  if (mode === "640") {
    node.mode = "rw-r-----";
  } else if (mode === "600") {
    node.mode = "rw-------";
  } else if (mode === "644") {
    node.mode = "rw-r--r--";
  } else {
    writeOutput(`chmod: mode '${mode}' accepted in demo context but not fully simulated`);
    return;
  }
  writeOutput(`mode of '${fileArg}' changed to ${mode}`);
}

function handleSimpleLookup(command, args) {
  const lookups = {
    help: [
      "Supported commands:",
      "pwd, ls, cd, cat, mkdir, touch, cp, mv, grep, clear, tree",
      "whoami, id, groups, uname -a, hostnamectl",
      "ps aux, top, free -h, df -h, lsblk",
      "ip a, ip r, ss -tuln, dig, ping, traceroute, curl",
      "systemctl status webapp, journalctl -u webapp, chmod, sudo, ssh"
    ].join("\n"),
    pwd: pathToString().replace(/^~$/, "/home/student").replace(/^~\//, "/home/student/"),
    whoami: "student",
    id: "uid=1001(student) gid=1001(student) groups=1001(student),27(sudo),998(docker)",
    groups: "student sudo docker",
    "uname -a": "Linux sam10-lab 6.5.0-1025-sam10 #25~22.04.1-Ubuntu SMP x86_64 GNU/Linux",
    hostnamectl: [
      " Static hostname: sam10-lab",
      "       Icon name: computer-vm",
      "         Chassis: vm",
      "      Machine ID: 77f1ce40f91d4f67b7f2f8d4d509cc1c",
      " Operating System: Ubuntu 22.04.4 LTS",
      "           Kernel: Linux 6.5.0-1025-sam10",
      "     Architecture: x86-64"
    ].join("\n"),
    "ps aux": [
      "USER      PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND",
      "root        1  0.0  0.3 169280 11880 ?        Ss   08:00   0:01 /sbin/init",
      "ubuntu    425  0.1  1.2 237552 49320 ?        Ssl  08:01   0:05 /usr/bin/amazon-ssm-agent",
      "student   882  0.0  0.2  12888  5212 pts/0    Ss   08:04   0:00 -bash",
      "www-data 1198  0.5  2.0 312512 80440 ?        Sl   08:05   0:07 /usr/bin/webapp"
    ].join("\n"),
    top: [
      "top - 08:14:44 up 1 day,  1:33,  1 user,  load average: 0.18, 0.22, 0.29",
      "Tasks: 123 total,   1 running, 122 sleeping,   0 stopped,   0 zombie",
      "%Cpu(s):  8.3 us,  2.1 sy,  0.0 ni, 88.7 id,  0.4 wa,  0.0 hi,  0.5 si,  0.0 st",
      "MiB Mem :   3900.0 total,   1884.2 free,   1120.8 used,    895.0 buff/cache"
    ].join("\n"),
    "free -h": [
      "               total        used        free      shared  buff/cache   available",
      "Mem:           3.8Gi       1.1Gi       1.8Gi       116Mi       874Mi       2.4Gi",
      "Swap:          2.0Gi          0B       2.0Gi"
    ].join("\n"),
    "df -h": [
      "Filesystem      Size  Used Avail Use% Mounted on",
      "/dev/nvme0n1p1   40G   13G   25G  35% /",
      "tmpfs           780M     0  780M   0% /dev/shm",
      "/dev/nvme1n1    100G   28G   68G  30% /data"
    ].join("\n"),
    lsblk: [
      "NAME         MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS",
      "nvme0n1      259:0    0   40G  0 disk",
      "└─nvme0n1p1  259:1    0   40G  0 part /",
      "nvme1n1      259:2    0  100G  0 disk /data"
    ].join("\n"),
    "ip a": [
      "2: ens5: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 9001",
      "    inet 10.0.1.24/24 brd 10.0.1.255 scope global dynamic ens5",
      "    inet6 fe80::87d:31ff:fe11:ac6b/64 scope link"
    ].join("\n"),
    "ip r": [
      "default via 10.0.1.1 dev ens5 proto dhcp src 10.0.1.24 metric 100",
      "10.0.1.0/24 dev ens5 proto kernel scope link src 10.0.1.24"
    ].join("\n"),
    "ss -tuln": [
      "Netid State  Recv-Q Send-Q Local Address:Port  Peer Address:Port",
      "tcp   LISTEN 0      511    0.0.0.0:80         0.0.0.0:*",
      "tcp   LISTEN 0      128    0.0.0.0:22         0.0.0.0:*",
      "tcp   LISTEN 0      100    127.0.0.1:3000     0.0.0.0:*"
    ].join("\n"),
    "dig sam10.internal": [
      "; <<>> DiG 9.18 <<>> sam10.internal",
      "sam10.internal.      60   IN   A    10.0.2.15"
    ].join("\n"),
    ping: "PING 10.0.2.15 (10.0.2.15): 56 data bytes\n64 bytes from 10.0.2.15: icmp_seq=0 ttl=63 time=1.62 ms",
    traceroute: [
      "traceroute to 10.0.2.15, 30 hops max",
      " 1  10.0.1.1  1.123 ms",
      " 2  10.0.2.15  1.552 ms"
    ].join("\n"),
    "curl https://status.sam10.internal/health": '{"status":"ok","service":"webapp","latency_ms":42}',
    "systemctl status webapp": [
      "webapp.service - SAM10 Web Application",
      "     Loaded: loaded (/etc/systemd/system/webapp.service; enabled)",
      "     Active: active (running) since Wed 2025-01-15 08:00:12 UTC; 14min ago",
      "   Main PID: 1198 (webapp)",
      "      Tasks: 12",
      "     Memory: 78.5M"
    ].join("\n"),
    "journalctl -u webapp": [
      "Jan 15 08:00:12 sam10-lab systemd[1]: Started webapp.service - SAM10 Web Application.",
      "Jan 15 08:05:42 sam10-lab webapp[1198]: WARN elevated latency detected",
      "Jan 15 08:06:03 sam10-lab webapp[1198]: ERROR health check timeout on /api/status"
    ].join("\n"),
    "cat /etc/os-release": 'NAME="Ubuntu"\nVERSION="22.04.4 LTS (Jammy Jellyfish)"\nID=ubuntu',
    tree: `.\n${makeFileTree(getNode(["home", "student"]), "")}`,
    sudo: "Demo mode: `sudo` is shown for syntax familiarity only. Privilege escalation is not executed.",
    ssh: "Demo mode: SSH session opening is simulated. In production, SSH would connect to a remote host using keys and network access."
  };

  if (command === "dig" && args[0] && !lookups[`dig ${args[0]}`]) {
    writeOutput(`; <<>> DiG 9.18 <<>> ${args[0]}\n${args[0]}.      60   IN   A    10.0.3.25`);
    return true;
  }

  if (command === "curl" && args[0] && !lookups[`curl ${args[0]}`]) {
    writeOutput(`{"requested":"${args[0]}","status":"ok"}`);
    return true;
  }

  if (command === "ping" && args[0]) {
    writeOutput(`PING ${args[0]} (${args[0]}): 56 data bytes\n64 bytes from ${args[0]}: icmp_seq=0 ttl=63 time=1.62 ms`);
    return true;
  }

  if (command === "traceroute" && args[0]) {
    writeOutput(`traceroute to ${args[0]}, 30 hops max\n 1  10.0.1.1  1.123 ms\n 2  ${args[0]}  1.552 ms`);
    return true;
  }

  if (lookups[command]) {
    writeOutput(lookups[command]);
    return true;
  }

  return false;
}

function runCommand(rawInput) {
  const input = rawInput.trim();
  if (!input) {
    return;
  }

  printPrompt(input);
  const args = input.split(/\s+/);
  const command = args.shift();
  const normalized = [command, ...args].join(" ");

  if (normalized === "clear" || command === "clear") {
    shellOutput.textContent = "";
    return;
  }

  switch (command) {
    case "help":
    case "pwd":
    case "whoami":
    case "id":
    case "groups":
    case "hostnamectl":
    case "lsblk":
    case "tree":
      handleSimpleLookup(normalized, args);
      break;
    case "uname":
      if (args[0] === "-a") {
        handleSimpleLookup("uname -a", []);
      } else {
        writeOutput("uname: demo supports `uname -a`");
      }
      break;
    case "ps":
      if (args[0] === "aux") {
        handleSimpleLookup("ps aux", []);
      } else {
        writeOutput("ps: demo supports `ps aux`");
      }
      break;
    case "free":
      if (args[0] === "-h") {
        handleSimpleLookup("free -h", []);
      } else {
        writeOutput("free: demo supports `free -h`");
      }
      break;
    case "df":
      if (args[0] === "-h") {
        handleSimpleLookup("df -h", []);
      } else {
        writeOutput("df: demo supports `df -h`");
      }
      break;
    case "ip":
      if (args[0] === "a" || args[0] === "addr") {
        handleSimpleLookup("ip a", []);
      } else if (args[0] === "r" || args[0] === "route") {
        handleSimpleLookup("ip r", []);
      } else {
        writeOutput("ip: demo supports `ip a` and `ip r`");
      }
      break;
    case "ss":
      if (args[0] === "-tuln") {
        handleSimpleLookup("ss -tuln", []);
      } else {
        writeOutput("ss: demo supports `ss -tuln`");
      }
      break;
    case "ls":
      handleLs(args);
      break;
    case "cd":
      handleCd(args);
      break;
    case "cat":
      handleCat(args);
      break;
    case "mkdir":
      handleMkdir(args);
      break;
    case "touch":
      handleTouch(args);
      break;
    case "cp":
      handleCp(args);
      break;
    case "mv":
      handleMv(args);
      break;
    case "grep":
      handleGrep(args);
      break;
    case "chmod":
      handleChmod(args);
      break;
    case "systemctl":
      if (args[0] === "status" && args[1] === "webapp") {
        handleSimpleLookup("systemctl status webapp", []);
      } else {
        writeOutput("systemctl: demo supports `systemctl status webapp`");
      }
      break;
    case "journalctl":
      if (args[0] === "-u" && args[1] === "webapp") {
        handleSimpleLookup("journalctl -u webapp", []);
      } else {
        writeOutput("journalctl: demo supports `journalctl -u webapp`");
      }
      break;
    case "dig":
    case "curl":
    case "ping":
    case "traceroute":
    case "sudo":
    case "ssh":
    case "top":
      if (!handleSimpleLookup(normalized || command, args)) {
        handleSimpleLookup(command, args);
      }
      break;
    default:
      writeOutput(`${command}: command not found`);
  }

  renderTree();
}

shellForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const command = shellInput.value;
  if (!command.trim()) {
    return;
  }
  commandHistory.push(command);
  historyIndex = commandHistory.length;
  runCommand(command);
  shellInput.value = "";
  shellPromptLabel.textContent = getPrompt();
});

shellInput?.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    if (!commandHistory.length) {
      return;
    }
    historyIndex = Math.max(0, historyIndex - 1);
    shellInput.value = commandHistory[historyIndex];
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    if (!commandHistory.length) {
      return;
    }
    historyIndex = Math.min(commandHistory.length, historyIndex + 1);
    shellInput.value = historyIndex >= commandHistory.length ? "" : commandHistory[historyIndex];
  }
});

toolbarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const command = button.dataset.command;
    shellInput.value = command;
    runCommand(command);
    commandHistory.push(command);
    historyIndex = commandHistory.length;
    shellInput.value = "";
    shellInput.focus();
  });
});

resetShellButton?.addEventListener("click", resetShellState);

runHelpButton?.addEventListener("click", () => {
  shellInput.value = "help";
  runCommand("help");
  commandHistory.push("help");
  historyIndex = commandHistory.length;
  shellInput.value = "";
  shellInput.focus();
});

resetShellState();
