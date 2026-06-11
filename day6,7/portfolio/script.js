
// SKILLS DATA
const skills = [
  "HTML", "CSS", "JavaScript", "React",
  "Python", "FastAPI", "Git", "SQL"
];

// PROJECTS DATA
const projects = [
  {
    title: "GitHub User Search",
    desc: "Search any GitHub user and view their profile stats including repos and followers. Built with vanilla JS and GitHub API.",
    tags: ["JavaScript", "Fetch API", "HTML/CSS"],
    github: "https://github.com/darshank005/self-learn/blob/main/day5/practice.html",
    live: "#"
  },
  {
    title: "Skill Filter App",
    desc: "Dynamic skill filtering app that renders and filters skills by level using arrays and DOM manipulation.",
    tags: ["JavaScript", "DOM", "Arrays"],
    github: "https://github.com/darshank005/self-learn/blob/main/day4/practice.html",
    live: "#"
  },
  {
    title: "Portfolio Website",
    desc: "Personal developer portfolio built from scratch with HTML, CSS and JavaScript. Fully responsive.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/darshank005/self-learn/tree/main/day6",
    live: "#"
  }
];

// RENDER SKILLS
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  skills.forEach((skill) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerText = skill;
    grid.appendChild(card);
  });
}

// RENDER PROJECTS
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3 class="project-title">${project.title}</h3>
      <p class="project-desc">${project.desc}</p>
      <div>
        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
      </div>
      <div class="project-links">
        <a href="${project.github}" target="_blank" class="btn btn-outline">GitHub</a>
        <a href="${project.live}" class="btn btn-primary">Live</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ACTIVE NAV ON SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

renderSkills();
renderProjects();

