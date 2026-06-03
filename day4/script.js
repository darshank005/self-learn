const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js","Python"];
for(let i=0;i<skills.length;i++){
    let li = document.createElement("li");
    li.innerText = skills[i];
    document.getElementById("skillsList").appendChild(li);

}



const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter((num)=> num %2 ===0);
console.log(even);

const names = ["Alice", "Bob", "Charlie", "David"];
const upperNames = names.map((name)=> name.toUpperCase());
console.log(upperNames);

const ages = [15,22,17,30];
const firstAdult = ages.find((age)=> age >=18);
console.log(firstAdult);