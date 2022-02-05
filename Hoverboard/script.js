const container = document.getElementById("container");

const colors = [
  "#9400D3",
  "#4B0082",
  "#0000FF",
  "#00FF00",
  "#FFFF00",
  "#FF7F00",
  "#FF0000",
];
const squares = 500;

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColors(square));
  square.addEventListener("mouseout", () => removeColors(square));

  container.appendChild(square);
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setColors(e) {
  const color = getRandomColor();
  e.style.background = color;
  e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColors(e) {
  e.style.background = "#1d1d1d";
  e.style.boxShadow = "0 0 2px #000";
}
