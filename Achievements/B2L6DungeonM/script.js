let button = document.getElementById("button");
let stat1 = document.getElementById("stat1");
let stat2 = document.getElementById("stat2");
let stat3 = document.getElementById("stat3");
const numbers = [];

button.addEventListener("click", async () => {
  for (let i = 1; i < 4; i++) randomizer(i);

  for (let i = 0; i < 4; i++) numbers.push(randomizer());

  let min_number = Math.min.apply(Math, numbers);
  numbers.pop(min_number);

  optel = numbers[0] + numbers[1] + numbers[2];

  stat1.innerHTML = "Stats: " + optel;
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomizer(range = 6) {
  return Math.floor(Math.random() * range) + 1;
}
