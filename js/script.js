const skillGroups = [
  {
    label: "languages",
    items: [
      { name: "Java 8+", used: "SpendSnap, RestroCloud" },
      { name: "SQL", used: "SpendSnap, Data Analytics Internship" },
      { name: "Python", used: "Student Management System, Data Analytics" },
      { name: "HTML", used: "Student Management System" },
    ],
  },
  {
    label: "frameworks",
    items: [
      { name: "Spring Boot", used: "SpendSnap, RestroCloud" },
      { name: "Spring Security", used: "RestroCloud" },
      { name: "Spring Data JPA", used: "SpendSnap, RestroCloud" },
      { name: "Hibernate (ORM)", used: "SpendSnap, RestroCloud" },
      { name: "Flask", used: "Student Management System" },
    ],
  },
  {
    label: "api & docs",
    items: [
      { name: "REST API Design", used: "SpendSnap, RestroCloud" },
      { name: "Swagger / OpenAPI", used: "RestroCloud" },
      { name: "JWT Auth", used: "RestroCloud" },
      { name: "RBAC", used: "RestroCloud" },
      { name: "DTO Patterns", used: "SpendSnap" },
    ],
  },
  {
    label: "generative ai",
    items: [
      { name: "Google Gemini API", used: "SpendSnap — receipt scanning" },
      { name: "Prompt Design", used: "SpendSnap" },
      { name: "LLM Data Extraction", used: "SpendSnap" },
    ],
  },
  {
    label: "databases",
    items: [
      { name: "MySQL", used: "SpendSnap, RestroCloud" },
      { name: "MongoDB", used: "Student Management System" },
      { name: "Redis (basic)", used: "RestroCloud" },
    ],
  },
  {
    label: "cloud & devops",
    items: [
      { name: "AWS S3 / RDS", used: "SpendSnap" },
      { name: "Docker", used: "SpendSnap" },
      { name: "Cloudinary", used: "SpendSnap" },
      { name: "Maven", used: "SpendSnap, RestroCloud" },
      { name: "Git", used: "All projects" },
    ],
  },
  {
    label: "testing & tools",
    items: [
      { name: "JUnit", used: "RestroCloud" },
      { name: "Postman", used: "SpendSnap, RestroCloud" },
      { name: "GitHub Actions", used: "Familiar" },
      { name: "Linux Shell", used: "Deployment on Koyeb" },
    ],
  },
  {
    label: "concepts",
    items: [
      { name: "Microservices", used: "RestroCloud" },
      { name: "OOP & SDLC", used: "All projects" },
      { name: "Exception Handling", used: "SpendSnap — @ControllerAdvice" },
      { name: "DSA & Debugging", used: "Ongoing practice" },
    ],
  },
];

const projects = [
  {
    name: "SpendSnap",
    imageBase: "assets/images/projects/spendsnap",
    tagline: "An expense tracker built for people who are done guessing where their money went — snap a receipt, and it does the boring part for you.",
    tech: ["Spring Boot", "MySQL", "JPA/Hibernate", "Thymeleaf", "Cloudinary", "Gemini API", "Docker"],
    bullets: [
      "Rebuilt the query layer around DTO projections instead of full entity fetches — noticeably smaller payloads, and it holds up better once more people hit it at once.",
      "Every error now runs through one central handler (@ControllerAdvice) instead of scattered try-catches, so the API fails predictably instead of surprising the frontend.",
      "Owns its own deploy pipeline on Koyeb — I handle the environment config, DB syncing, and zero-downtime releases myself, end to end.",
      "Added a receipt scanner powered by Gemini's vision model — snap a photo, it pulls out the amount, date, merchant and category, and you just confirm before it saves.",
    ],
    links: [
      { label: "Live Demo", url: "https://spendsnap.koyeb.app/", type: "live" },
    ],
    icon: "receipt",
  },
  {
    name: "RestroCloud",
    imageBase: "assets/images/projects/restrocloud",
    tagline: "A role-based restaurant backend — admins, waiters and kitchen staff each see exactly what they need, and nothing else.",
    tech: ["Spring Boot", "Spring Security", "JWT", "MySQL", "JPA/Hibernate", "React JS", "Swagger"],
    bullets: [
      "Stateless JWT auth with three distinct roles (Admin, Waiter, Kitchen) locking down 15+ endpoints — no shared logins, no session state to babysit.",
      "Modeled orders, tables, payments, menus and sessions as proper relational entities instead of one giant do-everything table.",
      "Paginated, filterable APIs built to hold up under 50+ concurrent restaurant sessions, not just a clean demo dataset.",
      "Documented every endpoint in Swagger so the frontend team could self-serve instead of pinging me for field names.",
      "• Implemented Redis-based OTP verification with OTP hashing",
    ],
    links: [
      { label: "View on GitHub", url: "https://github.com/abhijeetIT/restrocloud-api", type: "github" },
    ],
    icon: "table",
  },
  {
    name: "Student Management System",
    imageBase: "assets/images/projects/student-management",
    tagline: "An admin tool for schools to manage student records — unglamorous, but it taught me how much 'simple' CRUD still needs to be done right.",
    tech: ["Flask", "Python", "MongoDB", "PyMongo", "Bootstrap"],
    bullets: [
      "Flask + MongoDB backend handling full CRUD on student records, with validation that actually catches bad data before it gets saved.",
      "Pulled credentials out of the codebase entirely and into environment config — a small habit that matters a lot later.",
    ],
    links: [
      { label: "View on GitHub", url: "https://github.com/abhijeetIT/Student-Entry", type: "github" },
    ],
    icon: "book",
  },
];

const projectIcons = {
  receipt: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8h32v48l-6-4-6 4-6-4-6 4-6-4-6 4V8z" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round"/>
    <path d="M22 20h20M22 28h20M22 36h12" stroke="#8b9198" stroke-width="2" stroke-linecap="round"/>
    <circle cx="46" cy="44" r="9" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
    <path d="M43 44l2 2 4-5" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  table: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="22" width="44" height="6" rx="1.5" stroke="#38BDF8" stroke-width="2"/>
    <path d="M16 28v22M48 28v22" stroke="#8b9198" stroke-width="2" stroke-linecap="round"/>
    <circle cx="32" cy="14" r="5" stroke="#38BDF8" stroke-width="2"/>
    <path d="M24 14h4M36 14h4" stroke="#8b9198" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  book: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 16c-5-4-13-5-20-3v34c7-2 15-1 20 3 5-4 13-5 20-3V13c-7-2-15-1-20 3z" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round"/>
    <path d="M32 16v34" stroke="#8b9198" stroke-width="2"/>
  </svg>`,
};

const linkIcons = {
  live: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18M3 12h18" stroke="currentColor" stroke-width="1.8"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.4-3.4-1.4-.4-1.2-1-1.5-1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.4.1-2.8 0 0 .8-.3 2.7 1a9 9 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.5.1 2.8.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0 0 22 12.2C22 6.6 17.5 2 12 2z"/></svg>`,
};

/* ================= Render: Skills ================= */

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = skillGroups
    .map(
      (group) => `
      <div class="skill-cat">
        <h4>${group.label}</h4>
        <div class="chip-row">
          ${group.items
            .map(
              (item) => `
            <span class="chip">${item.name}<span class="chip-tip">Used in: ${item.used}</span></span>
          `
            )
            .join("")}
        </div>
      </div>`
    )
    .join("");
}

/* ================= Render: Projects ================= */

function renderProjects() {
  const list = document.getElementById("project-list");
  list.innerHTML = projects
    .map((p, idx) => {
      const primary = p.links[0];
      return `
      <article class="project-card">
        <a class="project-thumb" href="${primary.url}" target="_blank" rel="noopener" aria-label="Open ${p.name}">
          ${projectIcons[p.icon]}
          <img data-base="${p.imageBase}" alt="${p.name} screenshot">
        </a>
        <div class="project-body">
          <div class="project-head">
            <h3><a class="project-title-link" href="${primary.url}" target="_blank" rel="noopener">${p.name}</a></h3>
          </div>
          <p class="project-tagline">${p.tagline}</p>

          <div class="project-links">
            ${p.links
              .map(
                (l, i) => `
              <a class="project-cta ${i === 0 ? "project-cta-primary" : "project-cta-ghost"}" href="${l.url}" target="_blank" rel="noopener">
                ${linkIcons[l.type] || ""}
                ${l.label}
              </a>`
              )
              .join("")}
          </div>

          <div class="tech-row">
            ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>

          <button class="read-more-btn" data-toggle="bullets-${idx}" aria-expanded="false">
            Read more <span class="read-more-arrow">↓</span>
          </button>
          <ul class="project-bullets" id="bullets-${idx}">
            ${p.bullets.map((b) => `<li>${b}</li>`).join("")}
          </ul>
        </div>
      </article>`;
    })
    .join("");

  document.querySelectorAll(".read-more-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.toggle);
      const isOpen = target.classList.toggle("expanded");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      btn.innerHTML = isOpen
        ? `Show less <span class="read-more-arrow">↑</span>`
        : `Read more <span class="read-more-arrow">↓</span>`;
    });
  });
}

function initTabs() {
  const tabs = document.querySelectorAll(".nav-link[data-target]");
  const panels = document.querySelectorAll(".panel");

  function activate(target, updateHash = true) {
    tabs.forEach((t) => {
      const isActive = t.dataset.target === target;
      t.classList.toggle("active", isActive);
    });
    panels.forEach((p) => p.classList.toggle("active", p.id === target));

    if (updateHash) {
      history.replaceState(null, "", `#${target}`);
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activate(tab.dataset.target));
  });

  // Hero / inline "jump" links (e.g. the "See the work" button) reuse the same tab system
  document.querySelectorAll("[data-jump]").forEach((el) => {
    el.addEventListener("click", () => activate(el.dataset.jump));
  });

  const initial = window.location.hash.replace("#", "");
  const valid = ["about", "projects"];
  activate(valid.includes(initial) ? initial : "about", false);
}

/* ================= Mobile nav toggle + smooth-scroll to Contact ================= */

function initNavExtras() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    // close mobile menu after choosing a link
    links.querySelectorAll(".nav-link, .nav-resume").forEach((el) => {
      el.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.classList.remove("open");
      });
    });
  }

  document.querySelectorAll("[data-scroll]").forEach((el) => {
    el.addEventListener("click", () => {
      const target = document.getElementById(el.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      if (links) links.classList.remove("open");
    });
  });
}

/* ================= Skill chip tooltips (tap-friendly for mobile) ================= */

function initChipTooltips() {
  document.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    document.querySelectorAll(".chip.open").forEach((c) => {
      if (c !== chip) {
        c.classList.remove("open");
        const tip = c.querySelector(".chip-tip");
        if (tip) tip.style.left = "";
      }
    });
    if (!chip) return;
    chip.classList.toggle("open");
    if (chip.classList.contains("open")) {
      const tip = chip.querySelector(".chip-tip");
      if (tip) {
        tip.style.left = "";
        const rect = tip.getBoundingClientRect();
        const margin = 12;
        if (rect.left < margin) {
          tip.style.left = `calc(50% + ${margin - rect.left}px)`;
        } else if (rect.right > window.innerWidth - margin) {
          tip.style.left = `calc(50% - ${rect.right - (window.innerWidth - margin)}px)`;
        }
      }
    }
  });
}


const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "JPG", "JPEG", "PNG"];

function loadWithFallback(imgEl, basePath, onSuccess, onAllFail) {
  let i = 0;
  function tryNext() {
    if (i >= IMAGE_EXTENSIONS.length) {
      if (onAllFail) onAllFail();
      return;
    }
    const candidate = `${basePath}.${IMAGE_EXTENSIONS[i]}`;
    i++;
    imgEl.onerror = tryNext;
    imgEl.onload = () => {
      if (onSuccess) onSuccess();
    };
    imgEl.src = candidate;
  }
  tryNext();
}

function initProfilePhoto() {
  const img = document.getElementById("profile-img");
  const fallback = document.querySelector(".avatar-fallback");
  const trigger = document.getElementById("avatar-trigger");
  if (!img) return;
  loadWithFallback(
    img,
    "assets/images/profile",
    () => {
      img.style.display = "block";
      if (fallback) fallback.style.display = "none";
      if (trigger) trigger.dataset.hasPhoto = "true";
    },
    () => {
      img.style.display = "none";
    }
  );
}

/* ================= Photo lightbox ================= */

function initLightbox() {
  const trigger = document.getElementById("avatar-trigger");
  const profileImg = document.getElementById("profile-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");
  if (!trigger || !lightbox) return;

  function open() {
    if (trigger.dataset.hasPhoto !== "true") return; // no real photo loaded yet, nothing to zoom into
    lightboxImg.src = profileImg.src;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function close() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  trigger.addEventListener("click", open);
  trigger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open();
    }
  });
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function initProjectThumbs() {
  document.querySelectorAll(".project-thumb img[data-base]").forEach((img) => {
    const icon = img.previousElementSibling; // the inline SVG icon sits right before the img
    loadWithFallback(
      img,
      img.dataset.base,
      () => {
        img.style.display = "block";
        if (icon) icon.style.display = "none";
      },
      () => {
        img.style.display = "none";
      }
    );
  });
}

/* ================= Favicon: use profile photo when available ================= */
/* Falls back silently to the existing AJ favicon files already linked in <head>
   if no profile photo is found — nothing to break either way. */

function initFavicon() {
  const testImg = new Image();
  loadWithFallback(testImg, "assets/images/profile", () => {
    document.querySelectorAll("link[rel~='icon']").forEach((link) => {
      link.href = testImg.src;
    });
    const appleIcon = document.querySelector("link[rel='apple-touch-icon']");
    if (appleIcon) appleIcon.href = testImg.src;
  });
}

/* ================= Terminal typewriter effect ================= */

function initTerminalTypewriter() {
  const el = document.getElementById("terminal-typed");
  if (!el) return;

  const phrases = [
    "explore my skills",
    "check out my projects",
    "grab my resume",
    "let's build something",
  ];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    el.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const TYPE_SPEED = 65;
  const DELETE_SPEED = 35;
  const HOLD_TIME = 1400;
  const GAP_TIME = 400;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, HOLD_TIME);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, GAP_TIME);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  tick();
}

/* ================= Init ================= */

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  initTabs();
  initNavExtras();
  initChipTooltips();
  initProfilePhoto();
  initProjectThumbs();
  initFavicon();
  initLightbox();
  initTerminalTypewriter();
});
