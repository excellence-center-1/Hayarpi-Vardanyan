let name = prompt("What is your name?");
let age = prompt("What is your age?");

let stageOfLife;

switch(true) {
  case (age < 0):
    stageOfLife = "error";
    break;
  case (age <= 12):
    stageOfLife = "a child";
    break;
  case (age <= 19):
    stageOfLife = "a teenager";
    break;
  case (age <= 29):
    stageOfLife = "a young adult";
    break;
  case (age <= 59):
    stageOfLife = "an adult";
    break;
  default:
    stageOfLife = "a senior";
    break;
}

if(!isNaN(age) && age > 0) {
  console.log(`Welcome, ${name}! You are ${stageOfLife}.`);
} else {
  console.log("Please enter a valid age.");
}

