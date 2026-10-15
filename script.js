/**
 * Shakil Ahmed – Portfolio
 * Enterprise-grade · Dual-pillar (Cloud & Systems + AI & RAG)
 * Fast · Separate modules · Production-ready
 */

/* =====================================================
   DATA
   ===================================================== */
const experiences = [
  {
    title: "Senior Systems Engineer",
    company: "Greenlight Australia",
    location: "Melbourne, VIC",
    duration: "August 2024 – August 2026",
    details: [
      "Hold primary responsibility for the ongoing L2/L3 support and administration of a geographically dispersed hybrid cloud infrastructure.",
      "Provide key technical leadership for major infrastructure rollouts and platform upgrades, managing project scope and execution.",
      "Govern and optimize the Microsoft 365 and Azure service stack, focusing on security and performance for over 500 users.",
      "Actively drive performance tuning, vulnerability assessment, and security hardening across all production server environments.",
      "Develop and implement infrastructure automation routines that standardize deployment and improve system configuration integrity."
    ]
  },
  {
    title: "Software Support Engineer (L3)",
    company: "NCR Corporation",
    duration: "December 2022 – August 2024",
    details: [
      "Served as the Tier 3 final escalation point for complex, application-specific issues within the business-critical Retalix R10 POS ecosystem.",
      "Employed structured Root Cause Analysis (RCA) to isolate core problems and implemented definitive, permanent fixes.",
      "Maintained strict system availability targets and security compliance, specifically adhering to PCI requirements, for production POS environments.",
      "Mentored junior support staff, elevating the team's overall capability for advanced resolution.",
      "Deployed advanced monitoring and diagnostics automation, resulting in a reduction in manual support errors."
    ]
  },
  {
    title: "Senior Technical Engineer",
    company: "SPL Services",
    duration: "December 2020 – November 2022",
    details: [
      "Executed Microsoft 365 and data migration projects, focusing on smooth tenant-to-tenant transitions with minimal user impact.",
      "Administered a virtualized fleet of Windows Servers running on VMware and Hyper-V platforms.",
      "Deployed custom monitoring systems that increased operational visibility and enabled proactive remediation of system anomalies.",
      "Created technical documentation and troubleshooting guides, enhancing team efficiency and training.",
      "Implemented administrative automation that reduced manual effort required for platform upkeep."
    ]
  },
  {
    title: "Network Administrator",
    company: "Greenlight Australia",
    location: "Melbourne, VIC",
    duration: "March 2016 – November 2020",
    details: [
      "Managed and configured the enterprise network, encompassing firewalls, routing protocols, VLAN setups, and corporate VPN connectivity.",
      "Enforced system hardening protocols and patch management schedules to maintain network security and compliance.",
      "Deployed network monitoring and scripting tools to identify and address degradation points before they affected user service quality.",
      "Contributed to backup procedures that enhanced the organization's capacity for rapid recovery.",
      "Reduced recurring network instability issues through proactive monitoring systems."
    ]
  }
];

const skills = [
  "Azure Cloud: VNet, Hub & Spoke, NSG, UDR, VPN Gateway, App Service, App Insights, Log Analytics",
  "Microsoft 365: Exchange Online, SharePoint, Teams, Intune, Security & Compliance, Identity Governance",
  "Identity & Security: Azure AD, MFA, Conditional Access, Security Defaults, OAuth, SSO, Access Policies",
  "Automation & Scripting: PowerShell, Bash, Python, Workflow Automation, Diagnostics Automation",
  "Infrastructure & Systems: Windows Server, Linux Administration, VMware, Hyper-V, Patch Management",
  "Networking: Routing & Switching, VLAN, VPN, Firewall Management, TCP/IP Fundamentals",
  "DevOps & Integration: Git, GitHub, Git LFS, CI/CD Basics, API Integration, JSON, Monitoring & RCA",
  "AI & Automation: Multi-Agent Systems, RAG Pipelines, Vector Search, LLM APIs (Gemini), n8n Orchestration, Ticket & Email Intelligence"
];

const strengths = {
  professional: ["Project Management", "Team Collaboration", "Client Engagement", "Problem-Solving", "Leadership", "Business Strategy", "Time Management"],
  technical: ["Microsoft 365 & Azure Administration", "Multi-Agent AI Systems & RAG", "Cloud Infrastructure & Virtualization", "Automation, n8n & Python Scripting", "Version Control & Git LFS", "RESTful API & LLM Integration", "Cybersecurity & Compliance"],
  personal: ["Adaptability", "Continuous Learning", "Attention to Detail", "Communication Skills", "Critical Thinking", "Empathy", "Time Management", "Creativity"]
};

const projects = [
  {
    name: "AI Foundry – Multi-Agent Ticketing System",
    duration: "2026",
    for: "Enterprise AI Platform",
    desc: "Complete agentic ticketing system built in AI Foundry with four specialised agents. Three collaborative agents analyse incidents, identify root causes, retrieve historical matches from prior tickets, and cross-check against backend systems plus live internet sources. The fourth agent synthesises full analytics, recommended actions and priority scoring for rapid resolution.",
    tags: ["AI Foundry", "Multi-Agent", "RAG", "Root Cause Analysis", "Analytics", "Python"],
    track: "ai"
  },
  {
    name: "Intelligent Email Aggregator & Analyst",
    duration: "Current Project",
    for: "Productivity Automation",
    desc: "n8n multi-node workflow that aggregates emails from multiple sources, performs deep analysis, shortlists high-value messages, and hands off to Gemini LLM. The LLM produces a polished daily brief containing category, importance, priority ranking, concise summary and clear CTAs — runnable on schedule or manual trigger — dramatically reducing inbox processing time.",
    tags: ["n8n", "Gemini LLM", "Email Intelligence", "Workflow Automation", "Priority Scoring", "CTA Generation"],
    track: "ai"
  },
  {
    name: "Bunnings AI Agent (RAG & Retail Automation)",
    duration: "2026",
    for: "AI Portfolio Demonstration",
    desc: "Built a domain-specific conversational AI agent utilizing Retrieval-Augmented Generation (RAG) and vector search for automated product querying, customer assistance, and multi-layer workflow execution.",
    tags: ["Python", "RAG", "Vector Search", "Google Colab", "Git LFS", "LLM API"],
    track: "ai"
  },
  {
    name: "Azure Hybrid Infrastructure – Hub & Spoke Deployment",
    duration: "Ongoing",
    for: "Enterprise Infrastructure",
    desc: "Designed and supported hybrid cloud infrastructure using Azure Hub-and-Spoke, VPN gateways, routing, NSGs, and security hardening.",
    tags: ["Azure VNet", "Hub & Spoke", "NSG", "UDR", "VPN Gateway", "Azure Firewall", "PowerShell"],
    track: "cloud"
  },
  {
    name: "Azure AD + Microsoft 365 Application Integration",
    duration: "Ongoing",
    for: "Identity & Access Management",
    desc: "Integrated external applications with Azure AD using OAuth and SSO, configured Conditional Access, MFA, and identity governance.",
    tags: ["Azure AD", "OAuth", "SSO", "Conditional Access", "MFA", "PowerShell"],
    track: "cloud"
  },
  {
    name: "SharePoint + Power Automate Workflow Automation",
    duration: "Ongoing",
    for: "Business Process Automation",
    desc: "Built automated workflows for approvals, notifications, and document processing using Power Automate and SharePoint.",
    tags: ["SharePoint Online", "Power Automate", "M365", "JSON", "Automation"],
    track: "cloud"
  },
  {
    name: "AI Agent for Ticket Triage & Workflow Automation",
    duration: "Current Project",
    for: "Internal AI Automation",
    desc: "Building and deploying AI agents to classify, triage, and route support tickets and administrative assessments using workflow tools and Microsoft Graph API.",
    tags: ["AI Agent", "n8n", "Microsoft Graph", "Python", "API Integration"],
    track: "ai"
  },
  {
    name: "ReactJS & Node.js Admin Panel",
    duration: "1 month",
    for: "Full-Stack Web Development",
    desc: "Created an admin panel with backend integration, charts, and inventory management.",
    tags: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Chart.js"],
    track: "cloud"
  }
];

const trainings = [
  "Azure Fundamentals", "Office 365 Admin", "PowerShell Automation", "ITIL Foundations",
  "Windows Server Administration", "Linux for Admins", "Cybersecurity Essentials",
  "AI & RAG Pipeline Architecture", "Multi-Agent Systems Design", "n8n Advanced Workflows"
];

const certifications = [
  { title: "CCNA", desc: "Cisco Certified Network Associate" },
  { title: "JNCIA", desc: "Juniper Networks Certified Associate" },
  { title: "ITIL v3 Foundation", desc: "IT Service Management Best Practices" },
  { title: "AZ-104", desc: "Microsoft Azure Administrator Associate" }
];

const community = [
  "Mentored junior engineers in PowerShell and troubleshooting techniques.",
  "Participated in design/code review sessions in cross-functional teams.",
  "Shared knowledge through collaborative issue-solving and tech strategy discussions."
];

/* Dual-track content maps */
const trackContent = {
  cloud: {
    kicker: "Senior Systems Engineer",
    lead: "Hybrid enterprise infrastructure specialist driving efficiency through Azure, Microsoft 365, virtualization and large-scale automation.",
    roles: [
      "Senior Systems Engineer",
      "Hybrid Infrastructure & Cloud Administration",
      "Azure & Microsoft 365 Engineer",
      "Enterprise Networking Specialist"
    ],
    cardTitle: "Key Technical Domains",
    cardItems: [
      "Azure, Microsoft 365, Intune, AD Federation",
      "Windows Server, Linux, VMware, Hyper-V",
      "Automation & Infrastructure Scripting",
      "Core Routing & Switching, Firewall Management",
      "ServiceNow, SCCM, ITIL Process"
    ]
  },
  ai: {
    kicker: "AI & Multi-Agent Engineering",
    lead: "Designing and orchestrating production multi-agent systems, RAG pipelines and intelligent automation that turn complex tickets, emails and knowledge into actionable insight and measurable time savings.",
    roles: [
      "Multi-Agent Systems Architect",
      "RAG & Vector Search Specialist",
      "AI Foundry & Autonomous Agents",
      "Email Intelligence & LLM Orchestration"
    ],
    cardTitle: "AI Engineering Focus",
    cardItems: [
      "AI Foundry Multi-Agent Ticketing (4-Agent Pipeline)",
      "Intelligent Email Aggregator + Gemini Briefing",
      "RAG Pipelines, Vector Search & Historical Matching",
      "n8n Orchestration · Root-Cause & Analytics Agents",
      "Python · Gemini · Microsoft Graph · Git LFS"
    ]
  }
};

/* =====================================================
   CONTENT BUILDERS (no external deps – runs immediately)
   ===================================================== */
function buildExperience() {
  const list = document.getElementById("experienceList");
  if (!list) return;

  experiences.forEach((job) => {
    const item = document.createElement("div");
    item.className = "glass exp-item";
    item.innerHTML = `
      <button class="exp-header" type="button" aria-expanded="false">
        <span><strong>${job.title}</strong> · ${job.company}${job.location ? " · " + job.location : ""}</span>
        <span class="exp-icon" aria-hidden="true">+</span>
      </button>
      <div class="exp-body">
        <div class="exp-content">
          <div class="duration">${job.duration}</div>
          <ul>${job.details.map((d) => `<li>${d}</li>`).join("")}</ul>
        </div>
      </div>`;
    list.appendChild(item);

    item.querySelector(".exp-header").addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      document.querySelectorAll(".exp-item").forEach((el) => {
        el.classList.remove("active");
        el.querySelector(".exp-header").setAttribute("aria-expanded", "false");
      });
      if (!isActive) {
        item.classList.add("active");
        item.querySelector(".exp-header").setAttribute("aria-expanded", "true");
      }
    });
  });
}

function buildSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;
  skills.forEach((s) => {
    const card = document.createElement("div");
    card.className = "glass skill-card";
    card.textContent = s;
    grid.appendChild(card);
  });
}

function buildStrengths() {
  const grid = document.getElementById("strengthsGrid");
  if (!grid) return;
  Object.entries(strengths).forEach(([key, arr]) => {
    const card = document.createElement("div");
    card.className = "glass strength-card";
    const title = key.charAt(0).toUpperCase() + key.slice(1) + " Strengths";
    card.innerHTML = `<div class="strength-title">${title}</div><div class="typed-output" data-strings='${JSON.stringify(arr)}'></div>`;
    grid.appendChild(card);
  });
}

function buildProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  projects.forEach((p) => {
    const card = document.createElement("div");
    card.className = "glass project-card";
    card.dataset.track = p.track || "cloud";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <div class="project-meta">${p.duration} · ${p.for}</div>
      <p>${p.desc}</p>
      <div class="project-tags">${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}</div>`;
    grid.appendChild(card);
  });
}

function buildTrainings() {
  const grid = document.getElementById("trainingsGrid");
  if (!grid) return;
  trainings.forEach((t) => {
    const item = document.createElement("div");
    item.className = "glass training-item";
    item.textContent = t;
    grid.appendChild(item);
  });
}

function buildCerts() {
  const grid = document.getElementById("certsGrid");
  if (!grid) return;
  certifications.forEach((c) => {
    const card = document.createElement("div");
    card.className = "glass cert-card";
    card.innerHTML = `<h3>${c.title}</h3><p>${c.desc}</p>`;
    grid.appendChild(card);
  });
}

function buildCommunity() {
  const list = document.getElementById("communityList");
  if (!list) return;
  community.forEach((c) => {
    const li = document.createElement("li");
    li.className = "glass";
    li.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg><span>${c}</span>`;
    list.appendChild(li);
  });
}

/* =====================================================
   DUAL-TRACK SPECIALTY SWITCHER
   ===================================================== */
let typedInstance = null;
let currentTrack = "cloud";

function updateHeroForTrack(track) {
  const content = trackContent[track];
  if (!content) return;

  currentTrack = track;

  // Buttons
  document.querySelectorAll(".track-btn").forEach((btn) => {
    const isActive = btn.dataset.track === track;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  // Kicker
  const kickerText = document.getElementById("kickerText");
  if (kickerText) kickerText.textContent = content.kicker;

  // Lead
  const lead = document.getElementById("heroLead");
  if (lead) {
    lead.style.opacity = "0";
    setTimeout(() => {
      lead.textContent = content.lead;
      lead.style.opacity = "1";
    }, 180);
  }

  // Typed roles
  if (window.Typed && typedInstance) {
    typedInstance.destroy();
  }
  const typedEl = document.getElementById("typed-roles");
  if (typedEl && window.Typed) {
    typedEl.innerHTML = "";
    typedInstance = new Typed("#typed-roles", {
      strings: content.roles,
      typeSpeed: 42,
      backSpeed: 28,
      backDelay: 1400,
      loop: true,
      showCursor: true
    });
  }

  // Hero card content
  const cardTitle = document.getElementById("heroCardTitle");
  const cardList = document.getElementById("heroCardList");
  if (cardTitle) cardTitle.textContent = content.cardTitle;
  if (cardList) {
    cardList.innerHTML = content.cardItems.map((item) => `
      <li>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        ${item}
      </li>`).join("");
  }

  // Highlight matching projects
  document.querySelectorAll(".project-card").forEach((card) => {
    const matches = card.dataset.track === track;
    card.classList.toggle("highlight", matches);
  });
}

function initTrackSwitcher() {
  document.querySelectorAll(".track-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const track = btn.dataset.track;
      if (track && track !== currentTrack) {
        updateHeroForTrack(track);
      }
    });
  });
}

/* =====================================================
   LIVE TELEMETRY SIMULATION
   ===================================================== */
function startTelemetry() {
  const uptimeEl = document.getElementById("azureUptime");
  const syncStatus = document.getElementById("aiSyncStatus");
  const syncMeta = document.getElementById("aiSyncMeta");
  if (!uptimeEl || !syncStatus || !syncMeta) return;

  // Simulate tiny uptime fluctuations around 99.98%
  let baseUptime = 99.98;
  setInterval(() => {
    const variance = (Math.random() - 0.5) * 0.004;
    const val = Math.min(100, Math.max(99.95, baseUptime + variance)).toFixed(2);
    uptimeEl.textContent = `${val}%`;
  }, 4500);

  // Simulate AI Foundry multi-agent status
  let minutesAgo = 2;
  const statuses = ["Active", "Analysing", "Active", "Syncing"];
  let statusIdx = 0;

  setInterval(() => {
    minutesAgo = Math.max(1, minutesAgo + Math.floor(Math.random() * 3) - 1);
    if (Math.random() > 0.65) {
      statusIdx = (statusIdx + 1) % statuses.length;
    }
    syncStatus.textContent = statuses[statusIdx];
    syncMeta.textContent = `4 agents · synced ${minutesAgo}m ago`;
  }, 8000);
}

/* =====================================================
   MELBOURNE TIME + WEATHER
   ===================================================== */
function startMelbourneClock() {
  const timeEl = document.getElementById("melTime");
  const dateEl = document.getElementById("melDate");
  if (!timeEl || !dateEl) return;

  const formatterTime = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Melbourne",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  const formatterDate = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Melbourne",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  function tick() {
    const now = new Date();
    timeEl.textContent = formatterTime.format(now);
    dateEl.textContent = formatterDate.format(now);
  }

  tick();
  setInterval(tick, 1000);
}

async function loadMelbourneWeather() {
  const tempEl = document.getElementById("melTemp");
  const descEl = document.getElementById("melDesc");
  if (!tempEl || !descEl) return;

  const lat = -37.8136;
  const lon = 144.9631;

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=Australia%2FMelbourne`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Weather fetch failed");
    const data = await res.json();

    const temp = Math.round(data.current.temperature_2m);
    const code = data.current.weather_code;

    const weatherMap = {
      0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
      45: "Foggy", 51: "Light drizzle", 61: "Slight rain", 63: "Moderate rain",
      71: "Slight snow", 80: "Slight showers", 95: "Thunderstorm"
    };

    tempEl.textContent = `${temp}°C`;
    descEl.textContent = weatherMap[code] || "Clear";
  } catch (err) {
    tempEl.textContent = "--°";
    descEl.textContent = "Unavailable";
  }
}

/* =====================================================
   LIVE TECH PULSE
   ===================================================== */
/* =====================================================
   LIVE TECH PULSE (Fixed & Bulletproof)
   ===================================================== */
async function loadTechPulse() {
  const track = document.getElementById("techPulseTrack");
  if (!track) return;

  const API_URL = "https://syncline-news-backend.onrender.com/api/news";

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (!data.success || !data.items || data.items.length === 0) {
      track.innerHTML = `<span class="tp-loading">Headlines unavailable</span>`;
      return;
    }

    const items = data.items.map((item) => {
      if (typeof item === 'string') {
        return {
          title: item,
          url: "https://syncline.com.au",
          source: "TECH"
        };
      }
      // Safely fallback category/source to "TECH" if undefined or null
      const rawSource = item.category || item.source || "TECH";
      return {
        title: item.title || "Tech Update",
        url: item.link || item.url || "https://syncline.com.au",
        source: String(rawSource).toUpperCase()
      };
    });

    const renderItems = (list) =>
      list
        .map(
          (item) =>
            `<a class="tp-item" href="${item.url}" target="_blank" rel="noopener noreferrer">
              <span class="tp-source">${item.source}</span>
              <span>${item.title}</span>
            </a>`
        )
        .join("");

    track.innerHTML = renderItems(items) + renderItems(items);

    requestAnimationFrame(() => {
      track.classList.add("animating");
    });
  } catch (err) {
    console.warn("Tech pulse failed:", err);
    track.innerHTML = `<span class="tp-loading">Headlines unavailable</span>`;
  }
}

/* =====================================================
   NAV + SMOOTH SCROLL
   ===================================================== */
function initNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const navbar = document.getElementById("navbar");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });

    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  window.addEventListener("scroll", () => {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
}

/* =====================================================
   THREE.JS BACKGROUND & SHADER SPHERE
   ===================================================== */
async function initThree() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const THREE = await import("https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js");

  const bgCanvas = document.getElementById("webgl-bg");
  if (bgCanvas) {
    const bgRenderer = new THREE.WebGLRenderer({ canvas: bgCanvas, alpha: true, antialias: false, powerPreference: "high-performance" });
    const bgScene = new THREE.Scene();
    const bgCamera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 100);
    bgCamera.position.z = 7;
    bgRenderer.setSize(innerWidth, innerHeight);
    bgRenderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));

    const starCount = 900;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 40;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    const starGeom = new THREE.BufferGeometry();
    starGeom.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const stars = new THREE.Points(starGeom, new THREE.PointsMaterial({ size: 0.04, transparent: true, opacity: 0.75, color: 0x22d3ee, depthWrite: false }));
    bgScene.add(stars);

    function bgTick() {
      stars.rotation.y += 0.00055;
      bgRenderer.render(bgScene, bgCamera);
      requestAnimationFrame(bgTick);
    }
    bgTick();

    window.addEventListener("resize", () => {
      bgCamera.aspect = innerWidth / innerHeight;
      bgCamera.updateProjectionMatrix();
      bgRenderer.setSize(innerWidth, innerHeight);
      bgRenderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
    }, { passive: true });
  }

  const heroCanvas = document.getElementById("webgl-hero");
  if (!heroCanvas || window.innerWidth < 640) return;

  const heroRenderer = new THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  const heroScene = new THREE.Scene();
  const heroCamera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 100);
  heroCamera.position.set(0, 0, 4);
  heroRenderer.setSize(innerWidth, innerHeight);
  heroRenderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));

  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vNormal;
    void main() {
      vUv = uv;
      vNormal = normal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    precision highp float;
    varying vec2 vUv;
    varying vec3 vNormal;
    uniform float time;
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }
    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
      vec2 i = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
      m = m * m; m = m * m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
      vec3 g; g.x = a0.x * x0.x + h.x * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }
    void main() {
      vec3 base = mix(vec3(0.05, 0.75, 0.85), vec3(0.45, 0.35, 0.95), vUv.y);
      float n = snoise(vUv * 5.0 + vec2(time * 0.45, time * 0.7));
      float light = smoothstep(0.0, 1.0, dot(normalize(vNormal), vec3(0.0, 0.15, 1.0)));
      gl_FragColor = vec4((base + n * 0.22) * light, 1.0);
    }
  `;

  const uniforms = { time: { value: 0 } };
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(1.25, 96, 96), new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms, side: THREE.DoubleSide }));
  heroScene.add(sphere);

  const clock = new THREE.Clock();
  function heroTick() {
    uniforms.time.value = clock.getElapsedTime();
    sphere.rotation.y += 0.0022;
    sphere.rotation.x = Math.sin(clock.getElapsedTime() * 0.15) * 0.08;
    heroRenderer.render(heroScene, heroCamera);
    requestAnimationFrame(heroTick);
  }
  heroTick();
  heroCanvas.classList.add("ready");
}

/* =====================================================
   GSAP ENTRANCE + PARALLAX + TYPED
   ===================================================== */
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const s = document.createElement("script");
    s.src = src; s.async = true;
    s.onload = resolve; s.onerror = reject;
    document.head.appendChild(s);
  });
}

async function initAnimations() {
  // Load Typed.js
  await loadScript("https://cdn.jsdelivr.net/npm/typed.js@2.0.16/dist/typed.umd.js");

  // Load GSAP
  await loadScript("https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js");

  // Initial typed for cloud track
  if (window.Typed) {
    typedInstance = new Typed("#typed-roles", {
      strings: trackContent.cloud.roles,
      typeSpeed: 42,
      backSpeed: 28,
      backDelay: 1400,
      loop: true,
      showCursor: true
    });
  }

  // GSAP entrance
  if (window.gsap && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(".hero-content > *", {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.08
    }, 0.15)
    .to(".hero-side", {
      opacity: 1,
      y: 0,
      duration: 0.85
    }, 0.25);
  } else {
    // Fallback: show immediately
    document.querySelectorAll(".hero-content > *, .hero-side").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  }

  // Strengths typing (lightweight)
  document.querySelectorAll(".typed-output").forEach((el) => {
    try {
      const strings = JSON.parse(el.getAttribute("data-strings") || "[]");
      if (strings.length && window.Typed) {
        new Typed(el, {
          strings,
          typeSpeed: 36,
          backSpeed: 22,
          backDelay: 1800,
          loop: true,
          showCursor: false
        });
      }
    } catch (_) {}
  });
}

/* Subtle 3D mouse-move parallax tilt on hero card */
function initParallax() {
  const card = document.getElementById("heroCard");
  if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.innerWidth < 768) return;

  const maxTilt = 7;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * maxTilt;
    const rotateX = ((midY - y) / midY) * maxTilt;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  });
}

/* =====================================================
   BOOT
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  buildExperience();
  buildSkills();
  buildStrengths();
  buildProjects();
  buildTrainings();
  buildCerts();
  buildCommunity();

  initNav();
  initTrackSwitcher();
  startMelbourneClock();
  loadMelbourneWeather();
  loadTechPulse();
  startTelemetry();

  setTimeout(() => {
    initThree().catch(() => {});
    initAnimations().catch(() => {});
    initParallax();
  }, 280);
});
