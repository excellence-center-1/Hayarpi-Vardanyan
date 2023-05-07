let name = prompt("What is your name?");
let age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Invalid age input. Please enter a valid age.");
} else if (age <= 12) {
  console.log(`Welcome, ${name}! You are a child.`);
} else if (age <= 19) {
  console.log(`Welcome, ${name}! You are a teenager.`);
} else if (age <= 29) {
  console.log(`Welcome, ${name}! You are a young adult.`);
} else if (age <= 59) {
  console.log(`Welcome, ${name}! You are an adult.`);
} else {
  console.log(`Welcome, ${name}! You are a senior.`);
}
