// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Initialize typed roles (keeps your original strings & timing)
  new Typed("#typed-roles", {
    strings: [
      "Senior Systems Engineer",
      "Hybrid Infrastructure & Cloud Administration",
      "Azure & Microsoft 365 Engineer",
      "Network & Virtualization Specialist"
    ],
    typeSpeed: 40,
    backSpeed: 25,
    backDelay: 1200,
    loop: true,
    showCursor: true
  });

  // Build page content (your existing functions)
  buildExperience();
  buildSkills();
  buildStrengths();
  buildProjects();
  buildTrainings();
  buildCertifications();
  buildCommunity();
  buildAboutLinks();

  // GSAP + ScrollTrigger setup
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance timeline
    const heroTl = gsap.timeline();
    heroTl
      .from(".hero-kicker", { y: 20, opacity: 0, duration: 0.45, ease: "power2.out" })
      .from(".hero-title", { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.25")
      .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.45, stagger: 0.12 }, "-=0.35")
      .from(".hero-typed", { y: 10, opacity: 0, duration: 0.4 }, "-=0.25")
      .from(".hero-cta .btn", { y: 20, opacity: 0, duration: 0.4, stagger: 0.08 }, "-=0.25")
      .from(".hero-card", { x: 40, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.6");

    // Section reveal animations
    const sections = document.querySelectorAll(".section-padding");
    sections.forEach((section) => {
      const header = section.querySelector(".section-header");
      if (header) {
        gsap.from(header, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out"
        });
      }

      // stagger reveal for cards inside section
      const items = section.querySelectorAll(".card, .project-card, .training-item, .cert-card, .strength-card, .contact-card, .accordion-item");
      if (items.length) {
        gsap.from(items, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          y: 24,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out"
        });
      }
    });

    // subtle parallax for hero-right card on scroll
    gsap.to("#hero-right .hero-card", {
      y: -20,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 0.6
      }
    });
  }

  // Vanta background (NET) for hero - subtle, professional
  // Only initialize if VANTA is available and screen is not tiny
  if (typeof VANTA !== "undefined" && window.innerWidth > 600) {
    try {
      window._vantaHero = VANTA.NET({
        el: "#hero-bg",
        color: 0x22c55e,
        backgroundColor: 0x020617,
        points: 10.0,
        maxDistance: 20.0,
        spacing: 18.0,
        showDots: false,
        mouseControls: true,
        touchControls: true,
        gyroControls: false
      });
    } catch (e) {
      console.warn("Vanta init failed:", e);
    }
  }

  // Destroy Vanta on unload to avoid memory leaks
  window.addEventListener("beforeunload", () => {
    if (window._vantaHero && typeof window._vantaHero.destroy === "function") {
      window._vantaHero.destroy();
    }
  });

  // Navbar scroll state (adds subtle shadow when scrolled)
  const nav = document.querySelector(".custom-nav");
  function onScrollNav() {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  onScrollNav();
  window.addEventListener("scroll", onScrollNav);

  // Smooth scroll for internal nav links WITHOUT leaving hash in URL
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      const id = href.startsWith("#") ? href.slice(1) : href;
      const target = document.getElementById(id);
      if (!target) return;

      // Use native smooth scroll
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // Remove hash from URL while preserving history entry (no # shown)
      // Use replaceState to avoid adding extra history entries
      setTimeout(() => {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }, 600); // delay to allow scroll to start
    });
  });

  // Also handle direct CTA buttons that use href="#..."
  const ctaLinks = document.querySelectorAll('a[href^="#"]');
  ctaLinks.forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }, 600);
    });
  });

  // Accessibility: allow keyboard focus to open accordion items
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const active = document.activeElement;
      if (active && active.classList.contains("accordion-button")) {
        active.click();
      }
    }
  });
});

/* ---------------------------
   Below: your original builders
   (Experience, Skills, Strengths, Projects, Trainings, Certifications, Community, About Links)
   I preserved your arrays and logic; only minor improvements for accessibility and small fixes.
   --------------------------- */

/* Experience data (from your resume + existing JS) */
const jobExperiences = [
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

function buildExperience() {
  const container = document.getElementById("experienceDiv");
  if (!container) return;
  container.innerHTML = "";
  jobExperiences.forEach((job, index) => {
    const item = document.createElement("div");
    item.classList.add("accordion-item", "col-12");

    const button = document.createElement("button");
    button.classList.add("accordion-button");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("type", "button");
    button.innerHTML = `
      <span>
        <strong>${job.title}</strong> ${job.company ? " | " + job.company : ""} ${job.location ? " | " + job.location : ""}
      </span>
      <span class="accordion-icon" aria-hidden="true">+</span>
    `;

    const content = document.createElement("div");
    content.classList.add("accordion-content");
    content.style.display = "none";
    content.setAttribute("aria-hidden", "true");

    const meta = document.createElement("p");
    meta.innerHTML = `<strong>${job.duration}</strong>`;

    const ul = document.createElement("ul");
    job.details.forEach((d) => {
      const li = document.createElement("li");
      li.textContent = d;
      ul.appendChild(li);
    });

    content.appendChild(meta);
    content.appendChild(ul);
    item.appendChild(button);
    item.appendChild(content);
    container.appendChild(item);

    button.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      document.querySelectorAll("#experienceDiv .accordion-item").forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".accordion-content").style.display = "none";
        i.querySelector(".accordion-content").setAttribute("aria-hidden", "true");
        i.querySelector(".accordion-button").setAttribute("aria-expanded", "false");
        i.querySelector(".accordion-icon").textContent = "+";
      });
      if (!isActive) {
        item.classList.add("active");
        content.style.display = "block";
        content.setAttribute("aria-hidden", "false");
        button.setAttribute("aria-expanded", "true");
        button.querySelector(".accordion-icon").textContent = "-";
      }
    });
  });
}

/* Skills */
const skillCards = [
  "Azure Cloud: VNet, Hub & Spoke, NSG, UDR, VPN Gateway, App Service, App Insights, Log Analytics",
  "Microsoft 365: Exchange Online, SharePoint, Teams, Intune, Security & Compliance, Identity Governance",
  "Identity & Security: Azure AD, MFA, Conditional Access, Security Defaults, OAuth, SSO, Access Policies",
  "Automation & Scripting: PowerShell, Bash, Python, Workflow Automation, Diagnostics Automation",
  "Infrastructure & Systems: Windows Server, Linux Administration, VMware, Hyper‑V, Patch Management",
  "Networking: Routing & Switching, VLAN, VPN, Firewall Management, TCP/IP Fundamentals",
  "DevOps & Integration: Git, GitHub, CI/CD Basics, API Integration, JSON, Monitoring & RCA",
  "AI & Automation: AI Agent Workflows, Ticket Triage Automation, Data Processing Integrations"
];

function buildSkills() {
  const grid = document.getElementById("skillDiv");
  if (!grid) return;
  grid.innerHTML = "";
  skillCards.forEach((text) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = text;
    grid.appendChild(card);
  });

  // small entrance animation using GSAP if available
  if (typeof gsap !== "undefined") {
    gsap.from("#skillDiv .card", {
      translateY: [20, 0],
      opacity: [0, 1],
      ease: "easeOutExpo",
      duration: 0.8,
      delay: 0.15,
      stagger: 0.08
    });
  }
}

/* Strengths */
const strengths = {
  professional: [
    "Project Management",
    "Team Collaboration",
    "Client Engagement",
    "Problem-Solving",
    "Leadership",
    "Business Strategy",
    "Time Management"
  ],
  technical: [
    "Microsoft 365 Administration",
    "Azure Cloud Administration",
    "IT Service Management (ITIL)",
    "Full-Stack Web Development",
    "Cloud Infrastructure & Virtualization",
    "Database Design & Management",
    "Version Control & CI/CD (Git, GitHub, GitLab)",
    "RESTful API Development & Integration",
    "Automation & Scripting (PowerShell, Bash, Python)",
    "Cybersecurity & Compliance Best Practices"
  ],
  personal: [
    "Adaptability",
    "Continuous Learning",
    "Attention to Detail",
    "Communication Skills",
    "Critical Thinking",
    "Empathy and Emotional Intelligence",
    "Time Management",
    "Creativity"
  ]
};

function buildStrengths() {
  const grid = document.getElementById("strengthDiv");
  if (!grid) return;
  grid.innerHTML = "";

  function createCard(title, arr) {
    const card = document.createElement("div");
    card.classList.add("strength-card");

    const t = document.createElement("div");
    t.classList.add("strength-title");
    t.textContent = title;

    const out = document.createElement("div");
    out.classList.add("typed-output");

    card.appendChild(t);
    card.appendChild(out);
    grid.appendChild(card);

    // Use Typed on the element (works with string arrays)
    new Typed(out, {
      strings: arr,
      typeSpeed: 40,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true
    });
  }

  createCard("Professional Strengths", strengths.professional);
  createCard("Technical Strengths", strengths.technical);
  createCard("Personal Strengths", strengths.personal);
}

/* Projects */
const projects = [
  {
    projectName: "Azure Hybrid Infrastructure – Hub & Spoke Deployment",
    duration: "Ongoing",
    whoIsThisFor: "Enterprise Infrastructure",
    whatDidILearn:
      "Designed and supported hybrid cloud infrastructure using Azure Hub-and-Spoke, VPN gateways, routing, NSGs, and security hardening.",
    skillsAndToolsUsed: [
      "Azure VNet",
      "Hub & Spoke",
      "NSG",
      "UDR",
      "VPN Gateway",
      "Azure Firewall",
      "PowerShell",
      "Monitoring"
    ]
  },
  {
    projectName: "Azure AD + Microsoft 365 Application Integration",
    duration: "Ongoing",
    whoIsThisFor: "Identity & Access Management",
    whatDidILearn:
      "Integrated external applications with Azure AD using OAuth and SSO, configured Conditional Access, MFA, and identity governance.",
    skillsAndToolsUsed: [
      "Azure AD",
      "App Registrations",
      "OAuth",
      "SSO",
      "Conditional Access",
      "MFA",
      "Security Defaults",
      "PowerShell"
    ]
  },
  {
    projectName: "SharePoint + Power Automate Workflow Automation",
    duration: "Ongoing",
    whoIsThisFor: "Business Process Automation",
    whatDidILearn:
      "Built automated workflows for approvals, notifications, and document processing using Power Automate and SharePoint.",
    skillsAndToolsUsed: [
      "SharePoint Online",
      "Power Automate",
      "M365",
      "JSON",
      "Automation",
      "API Connectors"
    ]
  },
  {
    projectName: "Azure App Service Deployment & M365 Monitoring Integration",
    duration: "Ongoing",
    whoIsThisFor: "Internal Applications",
    whatDidILearn:
      "Deployed applications to Azure App Service with diagnostics, monitoring, and automated notifications to Microsoft Teams.",
    skillsAndToolsUsed: [
      "Azure App Service",
      "App Insights",
      "Log Analytics",
      "Teams Webhooks",
      "PowerShell",
      "Monitoring"
    ]
  },
  {
    projectName: "AI Agent for Ticket Triage & Aged Care Triage",
    duration: "Current Project",
    whoIsThisFor: "Internal AI Automation",
    whatDidILearn:
      "Building an AI agent to classify, triage, and route support tickets and aged care assessments using workflow automation.",
    skillsAndToolsUsed: [
      "AI Agent",
      "Prompt Engineering",
      "Automation",
      "API Integration",
      "Data Processing"
    ]
  },
  {
    projectName: "ReactJS & Node.js Admin Panel (Legacy Project)",
    duration: "1 month",
    whoIsThisFor: "E-Commerce Owners",
    whatDidILearn:
      "Created an admin panel with backend integration, charts, and inventory management.",
    skillsAndToolsUsed: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Chart.js",
      "HTML",
      "CSS"
    ]
  },
  {
    projectName: "ReactJS Shopping Cart (Legacy Project)",
    duration: "1 month",
    whoIsThisFor: "Online Retailers",
    whatDidILearn:
      "Built a shopping cart with state management and cart persistence.",
    skillsAndToolsUsed: ["ReactJS", "JavaScript", "CSS", "Redux"]
  }
];

function buildProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  projects.forEach((p) => {
    const col = document.createElement("div");
    col.classList.add("col-md-6", "col-lg-4");

    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <h5>${p.projectName}</h5>
      <div class="project-meta">Duration: ${p.duration}</div>
      <p><strong>Who is this for:</strong> ${p.whoIsThisFor}</p>
      <p>${p.whatDidILearn}</p>
    `;

    const tags = document.createElement("div");
    tags.classList.add("project-tags");
    p.skillsAndToolsUsed.forEach((t) => {
      const span = document.createElement("span");
      span.classList.add("project-tag");
      span.textContent = t;
      tags.appendChild(span);
    });

    card.appendChild(tags);
    col.appendChild(card);
    grid.appendChild(col);
  });
}

/* Trainings */
const trainings = [
  "Azure Fundamentals",
  "Office 365 Admin",
  "PowerShell Automation",
  "ITIL Foundations",
  "Windows Server Administration",
  "Linux for Admins",
  "Cybersecurity Essentials",
  "Monitoring & Incident Response"
];

function buildTrainings() {
  const grid = document.getElementById("trainingsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  trainings.forEach((t) => {
    const item = document.createElement("div");
    item.classList.add("training-item");
    item.textContent = t;
    grid.appendChild(item);
  });
}

/* Certifications */
const certifications = [
  { title: "CCNA", desc: "Cisco Certified Network Associate" },
  { title: "JNCIA", desc: "Juniper Networks Certified Associate" },
  { title: "ITIL v3 Foundation", desc: "IT Service Management Best Practices" }
];

function buildCertifications() {
  const grid = document.getElementById("certificationsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  certifications.forEach((c) => {
    const card = document.createElement("div");
    card.classList.add("cert-card");
    card.innerHTML = `
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
    `;
    grid.appendChild(card);
  });
}

/* Community */
const communityItems = [
  "Mentored junior engineers in PowerShell and troubleshooting techniques.",
  "Participated in design/code review sessions in cross-functional teams.",
  "Shared knowledge through collaborative issue-solving and tech strategy discussions."
];

function buildCommunity() {
  const container = document.getElementById("communityContent");
  if (!container) return;
  container.innerHTML = "";
  const h = document.createElement("h4");
  h.textContent = "Activities";
  const ul = document.createElement("ul");
  communityItems.forEach((c) => {
    const li = document.createElement("li");
    li.textContent = c;
    ul.appendChild(li);
  });
  container.appendChild(h);
  container.appendChild(ul);
}

/* About / Contact links */
const aboutSectionInfo = [
  { type: "Email", info: "shakilmsa@yahoo.com" },
  { type: "LinkedIn", info: "https://www.linkedin.com/in/shakil-a-b2225418b/" }
];

// 1. The Global Helper Function
window.showMobile = function(button, originalNumber, telLink) {
  const container = document.getElementById("mobile-container");
  if (container) {
    container.innerHTML = `<a href="tel:${telLink}">${originalNumber}</a>`;
  }
};

// 2. Your Main Builder Function
function buildAboutLinks() {
  const list = document.getElementById("aboutLinks");
  if (!list) return;
  list.innerHTML = "";
  
  aboutSectionInfo.forEach((item) => {
    const li = document.createElement("li");

    if (item.type === "Email") {
      li.innerHTML = `<strong>Email:</strong> <a href="mailto:${item.info}">${item.info}</a>`;
    } 
    else if (item.type === "Mobile") {
      const tel = item.info.replace(/\s+/g, "").replace(/^0/, "+61");
      const maskedInfo = item.info.substring(0, 4) + " xxx xxx";

      li.innerHTML = `
        <strong>Mobile:</strong> 
        <span id="mobile-container">
          <span id="masked-phone">${maskedInfo}</span>
          <button onclick="showMobile(this, '${item.info}', '${tel}')" 
                  style="margin-left:10px; cursor:pointer; font-size: 0.8em; padding: 2px 5px;">
            Show Number
          </button>
        </span>`;
    }
    else if (item.type === "LinkedIn") {
      li.innerHTML = `<strong>LinkedIn:</strong> <a href="${item.info}" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>`;
    }

    list.appendChild(li);
  });
}

// Call the function to run it
buildAboutLinks();