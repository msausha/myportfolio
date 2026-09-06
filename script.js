/**
 * Shakil Ahmed – Portfolio
 * Enterprise-grade · Fast · Separate modules
 */

/* =====================================================
   DATA
   ===================================================== */
const experiences = [
  {
    title: "Senior Systems Engineer",
    company: "Greenlight Australia",
    location: "Melbourne, VIC",
    duration: "August 2024 – Present",
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
  "DevOps & Integration: Git, GitHub, CI/CD Basics, API Integration, JSON, Monitoring & RCA",
  "AI & Automation: AI Agent Workflows, Ticket Triage Automation, Data Processing Integrations"
];

const strengths = {
  professional: ["Project Management", "Team Collaboration", "Client Engagement", "Problem-Solving", "Leadership", "Business Strategy", "Time Management"],
  technical: ["Microsoft 365 Administration", "Azure Cloud Administration", "IT Service Management (ITIL)", "Full-Stack Web Development", "Cloud Infrastructure & Virtualization", "Database Design & Management", "Version Control & CI/CD", "RESTful API Development", "Automation & Scripting", "Cybersecurity & Compliance"],
  personal: ["Adaptability", "Continuous Learning", "Attention to Detail", "Communication Skills", "Critical Thinking", "Empathy", "Time Management", "Creativity"]
};

const projects = [
  {
    name: "Azure Hybrid Infrastructure – Hub & Spoke Deployment",
    duration: "Ongoing",
    for: "Enterprise Infrastructure",
    desc: "Designed and supported hybrid cloud infrastructure using Azure Hub-and-Spoke, VPN gateways, routing, NSGs, and security hardening.",
    tags: ["Azure VNet", "Hub & Spoke", "NSG", "UDR", "VPN Gateway", "Azure Firewall", "PowerShell"]
  },
  {
    name: "Azure AD + Microsoft 365 Application Integration",
    duration: "Ongoing",
    for: "Identity & Access Management",
    desc: "Integrated external applications with Azure AD using OAuth and SSO, configured Conditional Access, MFA, and identity governance.",
    tags: ["Azure AD", "OAuth", "SSO", "Conditional Access", "MFA", "PowerShell"]
  },
  {
    name: "SharePoint + Power Automate Workflow Automation",
    duration: "Ongoing",
    for: "Business Process Automation",
    desc: "Built automated workflows for approvals, notifications, and document processing using Power Automate and SharePoint.",
    tags: ["SharePoint Online", "Power Automate", "M365", "JSON", "Automation"]
  },
  {
    name: "Azure App Service Deployment & M365 Monitoring",
    duration: "Ongoing",
    for: "Internal Applications",
    desc: "Deployed applications to Azure App Service with diagnostics, monitoring, and automated notifications to Microsoft Teams.",
    tags: ["Azure App Service", "App Insights", "Log Analytics", "Teams Webhooks", "PowerShell"]
  },
  {
    name: "AI Agent for Ticket Triage & Aged Care Triage",
    duration: "Current Project",
    for: "Internal AI Automation",
    desc: "Building an AI agent to classify, triage, and route support tickets and aged care assessments using workflow automation.",
    tags: ["AI Agent", "Prompt Engineering", "Automation", "API Integration"]
  },
  {
    name: "ReactJS & Node.js Admin Panel",
    duration: "1 month",
    for: "E-Commerce Owners",
    desc: "Created an admin panel with backend integration, charts, and inventory management.",
    tags: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Chart.js"]
  }
];

const trainings = [
  "Azure Fundamentals", "Office 365 Admin", "PowerShell Automation", "ITIL Foundations",
  "Windows Server Administration", "Linux for Admins", "Cybersecurity Essentials", "Monitoring & Incident Response"
];

const certifications = [
  { title: "AZ‑104 — Microsoft Certified: Azure Administrator Associate", desc: "Core Azure administration skills including identity, governance, storage, compute, networking, and monitoring." },
  { title: "CCNA — Cisco Certified Network Associate", desc: "Networking fundamentals, routing, switching, and basic security." },
  { title: "JNCIA — Juniper Networks Certified Associate", desc: "Juniper networking fundamentals and Junos OS." },
  { title: "ITIL v3 Foundation", desc: "IT service management best practices and lifecycle processes." }
];


const community = [
  "Mentored junior engineers in PowerShell and troubleshooting techniques.",
  "Participated in design/code review sessions in cross-functional teams.",
  "Shared knowledge through collaborative issue-solving and tech strategy discussions."
];

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

  // Melbourne coordinates
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
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Foggy",
      48: "Depositing rime fog",
      51: "Light drizzle",
      53: "Moderate drizzle",
      55: "Dense drizzle",
      61: "Slight rain",
      63: "Moderate rain",
      65: "Heavy rain",
      71: "Slight snow",
      73: "Moderate snow",
      75: "Heavy snow",
      80: "Slight showers",
      81: "Moderate showers",
      82: "Violent showers",
      95: "Thunderstorm",
      96: "Thunderstorm + hail",
      99: "Thunderstorm + heavy hail"
    };

    tempEl.textContent = `${temp}°C`;
    descEl.textContent = weatherMap[code] || "Unknown";
  } catch (err) {
    tempEl.textContent = "--°";
    descEl.textContent = "Unavailable";
    console.warn("Weather load failed:", err);
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

  // Scroll state
  window.addEventListener(
    "scroll",
    () => {
      if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 40);
    },
    { passive: true }
  );

  // Smooth scroll
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
   THREE.JS – BACKGROUND PARTICLES + HERO SHADER SPHERE
   (matches the Electrician Pro reference style)
   ===================================================== */
async function initThree() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const THREE = await import("https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js");

  /* ---------- Background starfield ---------- */
  const bgCanvas = document.getElementById("webgl-bg");
  if (bgCanvas) {
    const bgRenderer = new THREE.WebGLRenderer({
      canvas: bgCanvas,
      alpha: true,
      antialias: false,
      powerPreference: "high-performance"
    });
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
    const starMat = new THREE.PointsMaterial({
      size: 0.04,
      transparent: true,
      opacity: 0.75,
      color: 0x22d3ee,
      depthWrite: false
    });
    const stars = new THREE.Points(starGeom, starMat);
    bgScene.add(stars);

    function bgTick() {
      stars.rotation.y += 0.00055;
      bgRenderer.render(bgScene, bgCamera);
      requestAnimationFrame(bgTick);
    }
    bgTick();

    window.addEventListener(
      "resize",
      () => {
        bgCamera.aspect = innerWidth / innerHeight;
        bgCamera.updateProjectionMatrix();
        bgRenderer.setSize(innerWidth, innerHeight);
        bgRenderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
      },
      { passive: true }
    );
  }

  /* ---------- Hero shader sphere (the “globe”) ---------- */
  const heroCanvas = document.getElementById("webgl-hero");
  if (!heroCanvas) return;

  // Skip heavy sphere on very small screens for performance
  if (window.innerWidth < 640) {
    heroCanvas.style.display = "none";
    return;
  }

  const heroRenderer = new THREE.WebGLRenderer({
    canvas: heroCanvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  const heroScene = new THREE.Scene();
  const heroCamera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 100);
  heroCamera.position.set(0, 0, 4);
  heroRenderer.setSize(innerWidth, innerHeight);
  heroRenderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));

  // Exact-style shaders from the reference template
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
      m = m * m;
      m = m * m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
      vec3 g;
      g.x = a0.x * x0.x + h.x * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      // Cyan → indigo palette to match the enterprise theme
      vec3 base = mix(vec3(0.05, 0.75, 0.85), vec3(0.45, 0.35, 0.95), vUv.y);
      float n = snoise(vUv * 5.0 + vec2(time * 0.45, time * 0.7));
      float light = dot(normalize(vNormal), vec3(0.0, 0.15, 1.0));
      light = smoothstep(0.0, 1.0, light);
      vec3 color = (base + n * 0.22) * light;
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const uniforms = { time: { value: 0 } };
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.25, 96, 96),
    new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      side: THREE.DoubleSide
    })
  );
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

  // Scroll-linked motion (subtle)
  let scrollY = 0;
  window.addEventListener(
    "scroll",
    () => {
      scrollY = window.scrollY;
    },
    { passive: true }
  );

  // Optional subtle parallax via RAF
  function parallaxLoop() {
    const progress = Math.min(scrollY / (document.body.scrollHeight * 0.35), 1);
    sphere.position.y = progress * 0.9;
    sphere.scale.setScalar(1 + progress * 0.35);
    requestAnimationFrame(parallaxLoop);
  }
  parallaxLoop();

  window.addEventListener(
    "resize",
    () => {
      heroCamera.aspect = innerWidth / innerHeight;
      heroCamera.updateProjectionMatrix();
      heroRenderer.setSize(innerWidth, innerHeight);
      heroRenderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
    },
    { passive: true }
  );
}

/* =====================================================
   GSAP + TYPED (loaded dynamically after paint)
   ===================================================== */
async function initAnimations() {
  // Load Typed.js
  await loadScript("https://cdn.jsdelivr.net/npm/typed.js@2.0.16/dist/typed.umd.js");

  if (window.Typed) {
    new Typed("#typed-roles", {
      strings: [
        "Senior Systems Engineer",
        "Hybrid Infrastructure & Cloud Administration",
        "Azure & Microsoft 365 Engineer",
        "Network & Virtualization Specialist"
      ],
      typeSpeed: 42,
      backSpeed: 28,
      backDelay: 1400,
      loop: true,
      showCursor: true
    });

    document.querySelectorAll(".typed-output").forEach((el) => {
      const strings = JSON.parse(el.dataset.strings);
      new Typed(el, {
        strings,
        typeSpeed: 36,
        backSpeed: 26,
        backDelay: 1100,
        startDelay: 400,
        loop: true,
        showCursor: true
      });
    });
  }

  // Load GSAP + ScrollTrigger
  await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js");
  await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js");

  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  gsap.from(".hero-kicker, .hero h1, .hero-lead, .hero-typed, .btn-row, .melbourne-widget, .hero-card", {
    y: 24,
    opacity: 0,
    duration: 0.6,
    stagger: 0.07,
    ease: "power2.out",
    delay: 0.12
  });

  // Section titles
  gsap.utils.toArray(".section-title").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
      y: 22,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  });

  // Cards
  gsap.utils.toArray(".skill-card, .project-card, .training-item, .cert-card, .strength-card, .community-list li, .exp-item").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
      y: 26,
      opacity: 0,
      duration: 0.48,
      ease: "power2.out"
    });
  });
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

/* =====================================================
   BOOT
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Content (instant)
  buildExperience();
  buildSkills();
  buildStrengths();
  buildProjects();
  buildTrainings();
  buildCerts();
  buildCommunity();

  // 2. Nav + clock
  initNav();
  startMelbourneClock();
  loadMelbourneWeather();

  // 3. Heavy visual work after first paint
  const schedule = (fn) => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(fn, { timeout: 1600 });
    } else {
      setTimeout(fn, 400);
    }
  };

  schedule(() => {
    initThree().catch((e) => console.warn("Three.js init failed:", e));
    initAnimations().catch((e) => console.warn("Animations init failed:", e));
  });
});