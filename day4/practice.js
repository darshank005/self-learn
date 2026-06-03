const skills = [
  { name: "HTML", level: "beginner" },
  { name: "CSS", level: "beginner" },
  { name: "JavaScript", level: "intermediate" },
  { name: "React", level: "intermediate" },
  { name: "Python", level: "advanced" },
  { name: "FastAPI", level: "advanced" },
];

function renderSkills(list) {
  document.getElementById("skillsList").innerHTML = "";
  list.forEach((skill) => {
    let li = document.createElement("li");
    li.innerText = skill.name + " - " + skill.level;
    document.getElementById("skillsList").appendChild(li);
  });
}

function filterSkills(level) {
  if (level === "all") {
    renderSkills(skills);
  } else {
    const filtered = skills.filter((skill) => skill.level === level);
    renderSkills(filtered);
  }
}

renderSkills(skills);